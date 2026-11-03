import { createFileRoute } from "@tanstack/react-router";
import BuildingInspections from "@/components/pages/BuildingInspections";
import buildingInspectionsData from "@/data/buildingInspectionsData";
import { pageHead } from "@/lib/seo-head";

const data = buildingInspectionsData;

export const Route = createFileRoute("/building-inspections")({
  component: BuildingInspections,
  head: () =>
    pageHead({
      title: data.seoTitle || `${data.title} - Sydney Development Services`,
      description: data.seoDescription || data.description.slice(0, 155),
      canonical: `/${data.slug}`,
    }),
});
