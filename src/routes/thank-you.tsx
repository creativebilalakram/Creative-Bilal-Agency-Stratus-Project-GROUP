import { createFileRoute } from "@tanstack/react-router";
import ThankYou from "@/components/pages/ThankYou";
import { pageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/thank-you")({
  component: ThankYou,
  head: () =>
    pageHead({
      title: "Thank You",
      description:
        "Your request has been received. We'll get back to you within 24 hours.",
      noindex: true,
    }),
});
