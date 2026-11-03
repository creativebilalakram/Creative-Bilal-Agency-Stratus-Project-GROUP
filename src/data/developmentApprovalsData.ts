import { ServicePageData } from "@/types/servicePageTypes";
import { Handshake, FileCheck2, ShieldCheck } from "lucide-react";
import approvals1 from "@/assets/services/approvals-1.png";
import approvals2 from "@/assets/services/approvals-2.png";
import approvals3 from "@/assets/services/approvals-3.png";
import approvals4 from "@/assets/services/approvals-4.png";

const developmentApprovalsData: ServicePageData = {
  slug: "development-approvals-da-cdc",
  title: "Development Approvals (DA & CDC)",
  seoTitle: "DA & CDC Approvals - Fast-Tracked Development Approvals Sydney",
  seoDescription: "End-to-end DA and CDC approval management in Sydney. Council liaison, compliance reporting, and fast-tracked submissions for residential developments.",
  subtitle: "Getting development approval shouldn't mean months of back-and-forth with council.",

  heroSlides: [
    { image: approvals1, alt: "Project planning and documentation" },
    { image: approvals2, alt: "Consultant managing approvals" },
    { image: approvals3, alt: "Professional handling council liaison" },
    { image: approvals4, alt: "Team planning approval strategy" },
  ],

  description:
    "Getting development approval shouldn't mean months of back-and-forth with council. At Stratus Project Group, we manage the entire approval process - from lodgement to certification - with full council liaison, compliance reporting, and fast-tracked submissions handled end-to-end. We take the admin burden off your plate and get your project approved without delays or rejected applications.",

  bulletPoints: [
    { text: "Development Application (DA) preparation & lodgement" },
    { text: "Complying Development Certificate (CDC) pathways" },
    { text: "Town planning assessments & reports" },
    { text: "Council correspondence & query responses" },
    { text: "Construction Certificate coordination" },
    { text: "Section 4.55 modifications" },
  ],

  valueCardsSubtitle: "What We Deliver",
  valueCardsTitle: "Full Approval Management from Start to Finish",
  valueCardsDescription:
    "We don't just lodge your DA or CDC - we actively manage it through to approval. Our team coordinates with council planners, responds to queries, handles objections, and ensures every compliance requirement is met on time. You stay updated at every stage, while we handle the paperwork, follow-ups, and problem-solving.",

  valueCards: [
    {
      icon: Handshake,
      title: "Council Liaison Handled",
      description:
        "We communicate directly with council officers, respond to requests, and push approvals through without delays.",
    },
    {
      icon: FileCheck2,
      title: "Complete Compliance Reporting",
      description:
        "All necessary documentation - town planning reports, BASIX, traffic, waste management - prepared and submitted correctly.",
    },
    {
      icon: ShieldCheck,
      title: "Zero Admin Burden on You",
      description:
        "From lodgement to conditions clearance, we manage every step so you can focus on your project, not paperwork.",
    },
  ],

  processSubtitle: "Our Process",
  processTitle: "How We Secure Your Approvals",
  processDescription: "We deliver your approvals in 3 streamlined steps.",

  processSteps: [
    {
      num: "01.",
      title: "Application Strategy & Preparation",
      description:
        "We assess your project, determine the best approval pathway (DA or CDC), and prepare all required documentation and reports for lodgement.",
    },
    {
      num: "02.",
      title: "Lodgement & Council Management",
      description:
        "We lodge your application, liaise with council planners, respond to queries and requests for information, and manage the process through to determination.",
    },
    {
      num: "03.",
      title: "Approval & Conditions Clearance",
      description:
        "Once approved, we review conditions of consent, coordinate any modifications needed, and ensure you're ready to proceed to construction.",
    },
  ],

  contactCTA: {
    title: "Ready to Get Your Project Approved - Fast and Right?",
    subtitle: "Let us handle the approvals process end-to-end - so you can focus on building, not paperwork.",
    buttonText: "Book Free Approval Consultation",
  },
};

export default developmentApprovalsData;
