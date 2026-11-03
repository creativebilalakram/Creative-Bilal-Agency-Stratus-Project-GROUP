import { createFileRoute } from "@tanstack/react-router";
import Faqs from "@/components/pages/Faqs";
import { pageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/faqs")({
  component: Faqs,
  head: () =>
    pageHead({
      title: "FAQs - Frequently Asked Questions",
      description:
        "Find answers about our development services, project process, approval timelines, pricing, and coverage areas across Greater Sydney and NSW.",
      canonical: "/faqs",
    }),
});
