import { createFileRoute } from "@tanstack/react-router";
import ConstructionManagement from "@/components/pages/ConstructionManagement";
import constructionManagementData from "@/data/constructionManagementData";
import { pageHead } from "@/lib/seo-head";

const data = constructionManagementData;

export const Route = createFileRoute("/construction-project-management")({
  component: ConstructionManagement,
  head: () =>
    pageHead({
      title: data.seoTitle || `${data.title} - Sydney Development Services`,
      description: data.seoDescription || data.description.slice(0, 155),
      canonical: `/${data.slug}`,
    }),
});
