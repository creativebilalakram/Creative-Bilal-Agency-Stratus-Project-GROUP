import { ServicePageData } from "@/types/servicePageTypes";
import { PenTool, FileCheck, Users } from "lucide-react";
import design1 from "@/assets/services/design-1.png";
import design2 from "@/assets/services/design-2.png";
import design3 from "@/assets/services/design-3.png";
import design4 from "@/assets/services/design-4.png";

const designDocumentationData: ServicePageData = {
  slug: "services/architecture-design",
  title: "Design & Documentation",
  seoTitle: "Architectural Design & Documentation - Council-Ready Plans Sydney",
  seoDescription: "Build-ready architectural plans and technical drawings prepared to council standards in Sydney. Accurate, compliant documentation from concept to submission.",
  subtitle: "From concept to council-ready plans - we design with purpose and precision.",

  heroSlides: [
    { image: design1, alt: "Construction team reviewing blueprints on site" },
    { image: design2, alt: "Engineers reviewing construction plans" },
    { image: design3, alt: "Team reviewing architectural blueprints" },
    { image: design4, alt: "Design team collaborating on plans" },
  ],

  description:
    "Great projects start with great design. At Stratus Project Group, we deliver architectural and engineering documentation that's built for approval, construction, and long-term value. Whether you're developing a duplex, multi-dwelling housing, or a commercial fit-out, our design team works closely with you to turn your vision into detailed, council-ready plans - on time and on budget.",

  bulletPoints: [
    { text: "Concept design & schematic development" },
    { text: "Architectural drawings (floor plans, elevations, sections)" },
    { text: "Construction documentation & detailing" },
    { text: "Interior layout & spatial planning" },
    { text: "BASIX & NatHERS compliance integration" },
    { text: "Coordination with engineers & consultants" },
  ],

  valueCardsSubtitle: "How We Deliver Your Design",
  valueCardsTitle: "Design That Works - From Vision to Approval",
  valueCardsDescription:
    "Our design process is structured for speed, accuracy, and compliance. We don't just draw plans - we engineer them for approval and buildability, so your project moves forward without costly redesigns or delays.",

  valueCards: [
    {
      icon: PenTool,
      title: "Purpose-Built Design",
      description:
        "Every drawing is tailored to your site, your goals, and your council's requirements - maximising yield while minimising risk.",
    },
    {
      icon: FileCheck,
      title: "Council-Ready Documentation",
      description:
        "Our plans are detailed, compliant, and formatted for fast approval - reducing back-and-forth with certifiers and councils.",
    },
    {
      icon: Users,
      title: "Coordinated Team Approach",
      description:
        "We manage architects, engineers, and consultants under one roof - so your documentation is consistent, complete, and conflict-free.",
    },
  ],

  processSubtitle: "Our Process",
  processTitle: "From Brief to Build-Ready Plans",
  processDescription: "We deliver your design documentation in 3 clear phases.",

  processSteps: [
    {
      num: "01.",
      title: "Brief & Concept Development",
      description:
        "We start by understanding your goals, budget, and site. Then we develop initial concept options that align with planning controls and your vision.",
    },
    {
      num: "02.",
      title: "Design Development & Coordination",
      description:
        "We refine the design, coordinate with engineers and consultants, and prepare detailed drawings that meet council and certification requirements.",
    },
    {
      num: "03.",
      title: "Final Documentation & Lodgement",
      description:
        "You receive complete, construction-ready documentation - formatted for DA, CDC, or CC lodgement with all supporting reports included.",
    },
  ],

  contactCTA: {
    title: "Ready to Turn Your Concept Into Council-Ready Plans?",
    subtitle: "Let's design your project with precision - from concept to construction documentation, built for approval.",
    buttonText: "Book Free Design Consultation",
  },
};

export default designDocumentationData;
