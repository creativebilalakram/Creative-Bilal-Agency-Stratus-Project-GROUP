/**
 * Site's own AI concierge route — the primary brain for the agency chat
 * widget (the agency AI is only the fallback when this route 404s).
 * Powered by the site's own Lovable AI Gateway; the key stays server-side.
 */

import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { generateResponse, GatewayError } from "@lovable.dev/ai-gateway";
import type {} from "@/ai-gateway.types";

const BodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant", "system"]),
        content: z.string().min(1).max(4000),
      }),
    )
    .min(1)
    .max(24),
  lead_context: z.string().max(2000).optional(),
});

const SYSTEM_INSTRUCTIONS = `You are the friendly concierge for Stratus Project Group, a Sydney-based development consultancy (website https://stratusprojectgroup.com.au). Answer ONLY from the business facts below; if something is not covered, say so and point the visitor to the contact form on the website or to a phone call. Never invent prices, timelines or promises. Keep replies short (2-5 sentences), warm and professional, using simple Markdown. Never ask for sensitive details (full addresses, ID numbers, payment details).

BUSINESS FACTS
About: Stratus Project Group is a Sydney-based development consultancy helping homeowners, first-time developers and builders deliver residential projects — duplexes, townhouses and small multi-unit sites — from first feasibility study through design, council approvals (DA & CDC), engineering and compliance setup, construction coordination and building inspections. Address: 9 Epic Pl, Villawood NSW 2163. Phone: +61 0422 207 176. Email: Sajidur@Stratusprojectgroup.com.au.
Services: Feasibility Study (assess what a site can deliver before you commit); Design & Documentation (architectural design and construction-ready documentation); Development Approvals DA & CDC (council and complying development approvals, clean documentation to prevent delays); Engineering & Compliance Setup (structural, BASIX, NatHERS and certifier coordination); Construction & Project Management (consultant, builder and certifier coordination without unnecessary variations); Building Inspections (site checks and progress inspections).
Hours: Monday to Friday, 8:00 am – 6:00 pm. Free consultation; enquiries answered within 24 hours. Serving Greater Sydney and surrounding NSW regions.
FAQs: Projects are residential developments (duplexes, townhouses, small multi-unit sites). An existing architect is not required — they can start from concept or take over mid-way. DA/CDC timeframes vary by council and project type; clean documentation prevents delays. Site visits happen when required. Fees depend on scope — a fixed-fee proposal is provided once the site and needs are understood. First-time developers are guided through each stage. Engineering and inspections are coordinated with architectural, structural and certifier consultants.`;

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

function extractReply(resp: unknown): string {
  const fallback =
    "Sorry — I couldn't answer that just now. Please try again, call us on +61 0422 207 176, or send a message through the contact form.";
  const parts: string[] = [];
  const output = (resp as { output?: Array<{ type?: string; content?: Array<{ type?: string; text?: string }> }> })
    ?.output;
  if (Array.isArray(output)) {
    for (const item of output) {
      if (item?.type === "message" && Array.isArray(item.content)) {
        for (const part of item.content) {
          if (part?.type === "output_text" && typeof part.text === "string") parts.push(part.text);
        }
      }
    }
  }
  return parts.join("\n").trim() || fallback;
}

export const Route = createFileRoute("/api/public/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const raw = await request.json().catch(() => null);
        const parsed = BodySchema.safeParse(raw);
        if (!parsed.success) {
          return Response.json({ error: "Invalid request" }, { status: 400 });
        }
        const input = parsed.data.messages
          .filter((m: ChatMessage) => m.role !== "system")
          .map((m: ChatMessage) => ({ role: m.role as "user" | "assistant", content: m.content }));
        if (!process.env.LOVABLE_API_KEY) {
          return Response.json({ error: "Local AI unavailable" }, { status: 404 });
        }
        try {
          const resp = await generateResponse({
            model: "openai/gpt-6-astra",
            instructions: SYSTEM_INSTRUCTIONS,
            input,
            max_output_tokens: 700,
          });
          return Response.json({ reply: extractReply(resp) });
        } catch (error) {
          if (error instanceof GatewayError) {
            console.error("[chat] gateway error", error.code, error.httpStatus);
          } else {
            console.error("[chat] unexpected error", error);
          }
          // 404 tells the chat widget to fall back to the agency AI (e.g. on
          // hosts without the AI key, like a self-hosted deploy).
          return Response.json({ error: "Local AI unavailable" }, { status: 404 });
        }
      },
    },
  },
});
