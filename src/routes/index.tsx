import { createFileRoute } from "@tanstack/react-router";
import Index from "@/components/pages/Index";
import { pageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/")({
  component: Index,
  head: () =>
    pageHead({
      title:
        "Stratus Project Group | Strategic Design & Construction Coordination Sydney",
      description:
        "End-to-end development services in Sydney - feasibility studies, design documentation, DA/CDC approvals, engineering compliance, and construction coordination for residential projects.",
      canonical: "/",
    }),
});
