import { createFileRoute } from "@tanstack/react-router";
import Services from "@/components/pages/Services";
import { pageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () =>
    pageHead({
      title: "Our Services - Design, Approvals & Construction",
      description:
        "Explore our full range of development services - feasibility studies, architectural design, DA/CDC approvals, engineering compliance, construction management, and building inspections in Sydney.",
      canonical: "/services",
    }),
});
