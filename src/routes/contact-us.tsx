import { createFileRoute } from "@tanstack/react-router";
import ContactUs from "@/components/pages/ContactUs";
import { pageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/contact-us")({
  component: ContactUs,
  head: () =>
    pageHead({
      title: "Contact Us - Book a Free Consultation",
      description:
        "Get in touch with Stratus Project Group for a free design consultation. Based in Sydney - we respond within 24 hours. Call, email, or fill out our form.",
      canonical: "/contact-us",
    }),
});
