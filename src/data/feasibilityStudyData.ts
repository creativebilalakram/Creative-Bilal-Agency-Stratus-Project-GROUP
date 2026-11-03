import { ServicePageData } from "@/types/servicePageTypes";
import { Unlock, ShieldAlert, ThumbsUp } from "lucide-react";
import feasibility1 from "@/assets/services/feasibility-1.png";
import feasibility2 from "@/assets/services/feasibility-2.png";
import feasibility3 from "@/assets/services/feasibility-3.png";
import feasibility4 from "@/assets/services/feasibility-4.png";
import feasibility5 from "@/assets/services/feasibility-5.png";

const feasibilityStudyData: ServicePageData = {
  slug: "feasibility-study",
  title: "Feasibility Study",
  seoTitle: "Feasibility Study - Site Assessment & Viability Analysis Sydney",
  seoDescription: "Professional feasibility studies for Sydney residential developments. We assess site potential, planning controls, and project viability before you invest in design.",
  subtitle: "Before you invest in design, approvals, or construction - you need to know what's actually possible.",

  heroSlides: [
    { image: feasibility1, alt: "Feasibility study documentation" },
    { image: feasibility2, alt: "Construction site with cranes" },
    { image: feasibility3, alt: "Aerial view of development site" },
    { image: feasibility4, alt: "Construction team inspecting site" },
    { image: feasibility5, alt: "Aerial construction site" },
  ],

  description:
    "Before you invest in design, approvals, or construction - you need to know what's actually possible. At Stratus Project Group, we conduct comprehensive feasibility assessments that evaluate your site's development potential, planning constraints, and project viability from day one. We help you make informed decisions early, so you don't waste time and money on projects that won't stack up - or miss opportunities you didn't know existed.",

  bulletPoints: [
    { text: "Zoning, planning controls & development standards (FSR, height, setbacks)" },
    { text: "Site constraints (easements, flooding, contamination, heritage)" },
    { text: "Subdivision & dual occupancy potential" },
    { text: "Preliminary cost estimates & project timeline" },
    { text: "Council requirements & approval pathway strategy" },
    { text: "Market demand & financial viability overview" },
  ],

  valueCardsSubtitle: "What We Deliver",
  valueCardsTitle: "Clear Answers Before You Commit",
  valueCardsDescription:
    "Our feasibility studies go beyond basic zoning checks. We assess planning controls, site constraints, development potential, and financial viability - giving you a complete picture of what can be built, what it will cost, and whether it's worth pursuing.",

  valueCards: [
    {
      icon: Unlock,
      title: "Development Potential Unlocked",
      description:
        "We identify the maximum yield, best use, and optimal design approach for your site under current planning controls.",
    },
    {
      icon: ShieldAlert,
      title: "Risk Identified Early",
      description:
        "Site constraints, council requirements, and cost implications flagged upfront - before you're locked into design or approvals.",
    },
    {
      icon: ThumbsUp,
      title: "Confidence to Proceed",
      description:
        "Know exactly what's achievable, what it will take to get there, and whether the numbers make sense for your goals.",
    },
  ],

  processSubtitle: "Better Process",
  processTitle: "How We Assess Your Site's Potential",
  processDescription: "We deliver your project assessment in simple 3 steps.",

  processSteps: [
    {
      num: "01.",
      title: "Site Review & Data Collection",
      description:
        "We analyze your site, planning controls, and local council requirements to understand what's possible under current regulations.",
    },
    {
      num: "02.",
      title: "Constraint Analysis & Design Strategy",
      description:
        "We identify any physical or regulatory constraints, then outline the best development approach to maximize value and minimize risk.",
    },
    {
      num: "03.",
      title: "Feasibility Report & Recommendations",
      description:
        "You receive a detailed report with development options, cost estimates, timelines, and our recommendation on whether to proceed.",
    },
  ],

  contactCTA: {
    title: "Ready to Find Out What's Possible on Your Site?",
    subtitle: "Let's assess your site's potential before you commit - so you invest in the right project, not the wrong one.",
    buttonText: "Book Free Feasibility Consultation",
  },
};

export default feasibilityStudyData;
