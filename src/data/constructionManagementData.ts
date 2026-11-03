import { ServicePageData } from "@/types/servicePageTypes";
import { HardHat, ClipboardCheck, ShieldCheck } from "lucide-react";
import construction1 from "@/assets/services/construction-1.png";
import construction2 from "@/assets/services/construction-2.png";
import construction3 from "@/assets/services/construction-3.png";
import construction4 from "@/assets/services/construction-4.png";
import construction5 from "@/assets/services/construction-5.png";

const constructionManagementData: ServicePageData = {
  slug: "construction-project-management",
  title: "Construction & Project Management",
  seoTitle: "Construction & Project Management - Site Coordination Sydney",
  seoDescription: "Professional construction coordination and project management in Sydney. Builder, certifier, and consultant coordination with timeline tracking and accountability.",
  subtitle: "Our Services",
  heroSlides: [
    { image: construction1, alt: "Site coordination and management" },
    { image: construction2, alt: "Project planning and blueprints" },
    { image: construction3, alt: "Engineering and technical oversight" },
    { image: construction4, alt: "On-site project inspection" },
    { image: construction5, alt: "Aerial view of construction site" },
  ],
  description:
    "Construction delays, miscommunication, and budget blowouts don't happen by accident - they happen when there's no one coordinating between builder, certifier, consultants, and client. At Stratus Project Group, we provide hands-on site coordination and project oversight from groundwork to handover.\n\nWe keep your project on scope, on schedule, and on budget - with clear accountability, proactive problem-solving, and zero tolerance for delays or rework.",
  bulletPoints: [],
  bulletCategories: [
    {
      title: "1. Site Coordination",
      points: [
        { text: "Builder & subcontractor liaison" },
        { text: "Trade scheduling & sequencing" },
        { text: "Certifier & inspection coordination" },
        { text: "Material deliveries & procurement tracking" },
        { text: "Site access & logistics management" },
      ],
    },
    {
      title: "2. Project Oversight",
      points: [
        { text: "Scope control & variation management" },
        { text: "Progress monitoring & milestone tracking" },
        { text: "Budget tracking & cost control" },
        { text: "Quality assurance & compliance checks" },
        { text: "Risk identification & issue resolution" },
        { text: "Client reporting & communication" },
      ],
    },
  ],
  valueCardsSubtitle: "What We Deliver",
  valueCardsTitle: "Site Coordination & Project Control",
  valueCardsDescription:
    "We don't just observe your build - we actively manage it. Our team coordinates trades, tracks progress, resolves issues before they escalate, and ensures every milestone is met on time and within budget. You get full visibility and peace of mind from start to finish.",
  valueCards: [
    {
      icon: HardHat,
      title: "Full Site Coordination",
      description:
        "We manage builders, trades, certifiers, and deliveries - keeping your site running efficiently with zero miscommunication.",
    },
    {
      icon: ClipboardCheck,
      title: "Budget & Schedule Control",
      description:
        "Real-time tracking of costs, timelines, and milestones - so nothing slips through the cracks and your project stays on track.",
    },
    {
      icon: ShieldCheck,
      title: "Quality & Compliance Assurance",
      description:
        "Every stage is inspected and verified against standards - ensuring your build meets all regulatory and quality requirements.",
    },
  ],
  processSubtitle: "Our Approach",
  processTitle: "How We Deliver Your Project",
  processDescription:
    "From pre-construction planning to final handover, we embed ourselves into your project to ensure seamless delivery at every stage.",
  processSteps: [
    {
      num: "01",
      title: "Pre-Construction Setup",
      description:
        "We review all documentation, establish project schedules, and set up coordination frameworks before any work begins on site.",
    },
    {
      num: "02",
      title: "Active Site Management",
      description:
        "Daily coordination of trades, inspections, deliveries, and compliance - with real-time reporting and proactive issue resolution.",
    },
    {
      num: "03",
      title: "Handover & Closeout",
      description:
        "Final inspections, defect management, certification, and complete project documentation delivered for a clean handover.",
    },
  ],
  contactCTA: {
    title: "Ready to Keep Your Project on Track from Start to Finish?",
    subtitle:
      "Let us take the stress out of construction management - so your project is delivered on time, on budget, and to the highest standard.",
    buttonText: "Book Free Project Consultation",
  },
};

export default constructionManagementData;
