import { ServicePageData } from "@/types/servicePageTypes";
import { Search, FileCheck, ShieldCheck } from "lucide-react";
import inspections1 from "@/assets/services/inspections-1.png";
import inspections2 from "@/assets/services/inspections-2.png";
import inspections3 from "@/assets/services/inspections-3.png";
import inspections4 from "@/assets/services/inspections-4.png";

const buildingInspectionsData: ServicePageData = {
  slug: "building-inspections",
  title: "Building Inspections",
  seoTitle: "Building Inspections - Pre-Build & As-Built Compliance Sydney",
  seoDescription: "Independent building inspections in Sydney - pre-build and as-built checks to verify compliance, quality, and construction accuracy at every critical stage.",
  subtitle: "Our Services",
  heroSlides: [
    { image: inspections1, alt: "Building exterior inspection" },
    { image: inspections2, alt: "Interior quality inspection" },
    { image: inspections3, alt: "Compliance and regulatory review" },
    { image: inspections4, alt: "On-site building assessment" },
  ],
  description:
    "A building inspection isn't just a formality - it's your last line of defence against defects, non-compliance, and costly surprises. At Stratus Project Group, we carry out thorough, independent inspections at every critical stage of your build - from slab to handover - so nothing gets missed and nothing gets approved that shouldn't.\n\nWhether you're a developer needing stage sign-offs or a homeowner wanting peace of mind before settlement, we deliver clear, detailed reports you can act on.",
  bulletPoints: [
    { text: "Pre-purchase & pre-settlement inspections" },
    { text: "Frame, lock-up & fixing stage inspections" },
    { text: "Slab & foundation inspections" },
    { text: "Defect identification & reporting" },
    { text: "Compliance verification against BCA/NCC" },
    { text: "Handover & final completion inspections" },
  ],
  valueCardsSubtitle: "What We Deliver",
  valueCardsTitle: "Thorough Inspections You Can Trust",
  valueCardsDescription:
    "We don't just tick boxes - we inspect every detail against the approved plans, Australian Standards, and the Building Code of Australia. Our reports are clear, photographic, and actionable - giving you full confidence in the quality and compliance of your build.",
  valueCards: [
    {
      icon: Search,
      title: "Detailed Defect Reports",
      description:
        "Every issue is documented with photos, locations, and references to the relevant standard - so builders can't dispute or dismiss findings.",
    },
    {
      icon: FileCheck,
      title: "Stage-by-Stage Verification",
      description:
        "We inspect at every critical milestone - slab, frame, lock-up, fixing, and handover - ensuring compliance before work is covered up.",
    },
    {
      icon: ShieldCheck,
      title: "Independent & Unbiased",
      description:
        "We work for you, not the builder. Our inspections are fully independent, giving you an honest assessment without conflicts of interest.",
    },
  ],
  processSubtitle: "Our Approach",
  processTitle: "How We Deliver Your Inspection",
  processDescription:
    "From booking to final report, we make the inspection process simple, fast, and completely transparent.",
  processSteps: [
    {
      num: "01",
      title: "Book & Brief",
      description:
        "You tell us the stage, property type, and any specific concerns. We schedule your inspection at a time that works for you.",
    },
    {
      num: "02",
      title: "On-Site Inspection",
      description:
        "Our inspector conducts a thorough, methodical review - checking every element against plans, codes, and standards with photographic evidence.",
    },
    {
      num: "03",
      title: "Report & Action",
      description:
        "You receive a clear, detailed report within 24-48 hours - with defect summaries, compliance notes, and recommended next steps.",
    },
  ],
  contactCTA: {
    title: "Ready to Verify Your Build is Done Right?",
    subtitle:
      "Book an independent inspection and get a clear, honest assessment - before you sign off on anything.",
    buttonText: "Book Free Design Consultation",
  },
};

export default buildingInspectionsData;
