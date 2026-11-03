import { createFileRoute } from "@tanstack/react-router";
import DevelopmentApprovals from "@/components/pages/DevelopmentApprovals";
import developmentApprovalsData from "@/data/developmentApprovalsData";
import { pageHead } from "@/lib/seo-head";

const data = developmentApprovalsData;

export const Route = createFileRoute("/development-approvals-da-cdc")({
  component: DevelopmentApprovals,
  head: () =>
    pageHead({
      title: data.seoTitle || `${data.title} - Sydney Development Services`,
      description: data.seoDescription || data.description.slice(0, 155),
      canonical: `/${data.slug}`,
    }),
});
