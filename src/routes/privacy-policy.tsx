import { createFileRoute } from "@tanstack/react-router";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy";
import { pageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () =>
    pageHead({
      title: "Privacy Policy",
      description:
        "Read the Stratus Project Group privacy policy - how we collect, use, and protect your personal information.",
      canonical: "/privacy-policy",
    }),
});
