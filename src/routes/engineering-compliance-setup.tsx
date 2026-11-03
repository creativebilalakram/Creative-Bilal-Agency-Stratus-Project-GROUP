import { createFileRoute } from "@tanstack/react-router";
import EngineeringCompliance from "@/components/pages/EngineeringCompliance";
import engineeringComplianceData from "@/data/engineeringComplianceData";
import { pageHead } from "@/lib/seo-head";

const data = engineeringComplianceData;

export const Route = createFileRoute("/engineering-compliance-setup")({
  component: EngineeringCompliance,
  head: () =>
    pageHead({
      title: data.seoTitle || `${data.title} - Sydney Development Services`,
      description: data.seoDescription || data.description.slice(0, 155),
      canonical: `/${data.slug}`,
    }),
});
