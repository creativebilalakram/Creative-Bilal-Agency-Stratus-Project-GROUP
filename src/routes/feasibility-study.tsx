import { createFileRoute } from "@tanstack/react-router";
import FeasibilityStudy from "@/components/pages/FeasibilityStudy";
import feasibilityStudyData from "@/data/feasibilityStudyData";
import { pageHead } from "@/lib/seo-head";

const data = feasibilityStudyData;

export const Route = createFileRoute("/feasibility-study")({
  component: FeasibilityStudy,
  head: () =>
    pageHead({
      title: data.seoTitle || `${data.title} - Sydney Development Services`,
      description: data.seoDescription || data.description.slice(0, 155),
      canonical: `/${data.slug}`,
    }),
});
