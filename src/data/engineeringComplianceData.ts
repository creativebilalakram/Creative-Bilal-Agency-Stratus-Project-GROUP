import { ServicePageData } from "@/types/servicePageTypes";
import { Settings, ClipboardCheck, GitMerge } from "lucide-react";
import engineering1 from "@/assets/services/engineering-1.png";
import engineering2 from "@/assets/services/engineering-2.png";
import engineering3 from "@/assets/services/engineering-3.png";
import engineering4 from "@/assets/services/engineering-4.png";

const engineeringComplianceData: ServicePageData = {
  slug: "engineering-compliance-setup",
  title: "Engineering & Compliance Coordination",
  seoTitle: "Engineering & Compliance Setup - BASIX, NatHERS & Structural Sydney",
  seoDescription: "Coordinated engineering and compliance documentation for Sydney developments - structural, stormwater, BASIX, and NatHERS integrated from day one.",
  subtitle: "Every build needs the right engineering and compliance setup - we make sure yours is sorted from the start.",

  heroSlides: [
    { image: engineering1, alt: "Construction crane on modern building" },
    { image: engineering2, alt: "Engineers discussing compliance reports" },
    { image: engineering3, alt: "Architectural model and blueprints" },
    { image: engineering4, alt: "Team reviewing engineering plans" },
  ],

  description:
    "Every development project requires a team of engineers and compliance consultants - structural, civil, hydraulic, geotechnical, BASIX, access, and more. At Stratus Project Group, we coordinate all engineering disciplines and compliance requirements under one roof, ensuring every report, certificate, and design is completed on time and meets council and certification standards.",

  bulletPoints: [
    { text: "Structural engineering coordination" },
    { text: "Civil & stormwater engineering" },
    { text: "Hydraulic & mechanical services" },
    { text: "BASIX, NatHERS & energy compliance" },
    { text: "Geotechnical & contamination reports" },
    { text: "BCA compliance & access reports" },
  ],

  valueCardsSubtitle: "What We Deliver",
  valueCardsTitle: "Coordinated Engineering & Compliance - No Gaps, No Delays",
  valueCardsDescription:
    "We don't just brief engineers - we actively manage their output to ensure it aligns with your design, meets council conditions, and is delivered on schedule. No chasing, no gaps, no coordination failures.",

  valueCards: [
    {
      icon: Settings,
      title: "Full Engineering Coordination",
      description:
        "We manage all engineering disciplines - structural, civil, hydraulic, geotech - so everything aligns with your design and approval requirements.",
    },
    {
      icon: ClipboardCheck,
      title: "Compliance Reports Handled",
      description:
        "From BASIX to BCA, access audits to waste management plans - every compliance report prepared and submitted correctly.",
    },
    {
      icon: GitMerge,
      title: "Single Point of Contact",
      description:
        "Instead of managing 5-10 consultants yourself, you deal with one team. We coordinate everyone and deliver a complete, consistent package.",
    },
  ],

  processSubtitle: "Our Process",
  processTitle: "How We Deliver Engineering & Compliance",
  processDescription: "We manage your engineering and compliance in 3 clear phases.",

  processSteps: [
    {
      num: "01.",
      title: "Scope & Brief Consultants",
      description:
        "We review your project requirements, identify all necessary engineering and compliance disciplines, and brief the right consultants for each scope.",
    },
    {
      num: "02.",
      title: "Coordinate & Review Outputs",
      description:
        "We manage timelines, review all reports and designs for accuracy and consistency, and resolve any conflicts between disciplines before submission.",
    },
    {
      num: "03.",
      title: "Deliver Complete Package",
      description:
        "You receive a fully coordinated set of engineering designs and compliance reports - ready for DA lodgement, CC application, or construction.",
    },
  ],

  contactCTA: {
    title: "Ready to Get Your Engineering & Compliance Sorted - Properly?",
    subtitle: "Let us coordinate all your engineering and compliance needs - so nothing gets missed and everything gets approved.",
    buttonText: "Book Free Consultation",
  },
};

export default engineeringComplianceData;
