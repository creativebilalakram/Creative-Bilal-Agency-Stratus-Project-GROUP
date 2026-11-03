import { createFileRoute } from "@tanstack/react-router";
import AboutUs from "@/components/pages/AboutUs";
import { pageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/about-us")({
  component: AboutUs,
  head: () =>
    pageHead({
      title: "About Us - Sydney Development Consultancy",
      description:
        "Stratus Project Group is a Sydney-based consultancy helping developers deliver residential projects the right way - compliant, coordinated, and commercially sound.",
      canonical: "/about-us",
    }),
});
