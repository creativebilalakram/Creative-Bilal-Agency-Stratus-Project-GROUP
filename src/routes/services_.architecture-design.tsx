import { createFileRoute } from "@tanstack/react-router";
import DesignDocumentation from "@/components/pages/DesignDocumentation";
import designDocumentationData from "@/data/designDocumentationData";
import { pageHead } from "@/lib/seo-head";

const data = designDocumentationData;

export const Route = createFileRoute("/services_/architecture-design")({
  component: DesignDocumentation,
  head: () =>
    pageHead({
      title: data.seoTitle || `${data.title} - Sydney Development Services`,
      description: data.seoDescription || data.description.slice(0, 155),
      canonical: `/${data.slug}`,
    }),
});
