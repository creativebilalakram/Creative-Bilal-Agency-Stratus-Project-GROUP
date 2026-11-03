import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import SEO from "@/components/SEO";

import { useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "General & Process",
    items: [
      {
        question: "What types of projects do you work on?",
        answer:
          "We focus on residential developments - particularly duplexes, townhouses, and small multi-unit sites. If the project requires design, approvals, coordination, or construction documentation - we handle it.",
      },
      {
        question: "Do I need to have an architect before working with you?",
        answer:
          "No. We can start from concept or take over mid-way if you already have plans. Our role is to make sure documentation, approvals, and coordination are handled properly from day one.",
      },
      {
        question: "How long does a DA or CDC approval usually take?",
        answer:
          "Timeframes vary based on council and project type. The key is ensuring the documentation is clean - which prevents delays. That's where we focus.",
      },
      {
        question: "How do I start a project with your company?",
        answer:
          "Our post-construction services gives you peace of mind knowing that we are still here for you even after.",
      },
      {
        question: "Can you also handle the construction side?",
        answer:
          "Yes. We coordinate consultants, builders, and certifiers to make sure the build progresses smoothly - without unnecessary variations or miscommunication.",
      },
    ],
  },
  {
    title: "Pricing, Support & Coverage",
    items: [
      {
        question: "Do you visit the site?",
        answer:
          "Yes, when required. Site coordination and progress checks are part of ensuring the project stays on track.",
      },
      {
        question: "How do your fees work?",
        answer:
          "Fees depend on scope. Once we understand the site and what's needed - we provide a fixed-fee proposal so there are no surprises later.",
      },
      {
        question:
          "I'm a first-time developer. Will you guide me through the entire process?",
        answer:
          "Yes. We work with many first-time and small developers - helping them understand each stage, avoid mistakes, and keep control of the project.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "Greater Sydney & surrounding NSW regions.",
      },
      {
        question: "Can you help with engineering or inspections too?",
        answer:
          "Absolutely. We coordinate all key consultants - architectural, structural, and certifiers - ensuring compliance and efficiency across every stage.",
      },
    ],
  },
];

const FaqsPage = () => {
  const introRef = useStaggerReveal();
  const faqRef = useStaggerReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="FAQs - Frequently Asked Questions"
        description="Find answers about our development services, project process, approval timelines, pricing, and coverage areas across Greater Sydney and NSW."
        canonical="/faqs"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Construction site background"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/85" />
        </div>
        <div className="relative z-10 text-center container-custom">
          <p className="text-primary font-bold uppercase tracking-[0.25em] text-[10px] md:text-xs mb-3 md:mb-4">
            FAQs
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight font-heading">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding" ref={introRef}>
        <div className="container-custom text-center max-w-3xl mx-auto" data-reveal>
          <p className="section-subtitle mb-2 md:mb-3">Got Questions?</p>
          <h2 className="section-title mb-4 md:mb-6">
            Everything You Need to Know
          </h2>
          <p className="text-muted-foreground text-xs md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Find answers to the most common questions about our services,
            process, pricing, and coverage areas.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Sections */}
      <section className="pb-[var(--section-spacing)]" ref={faqRef}>
        <div className="container-custom max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} data-reveal>
              <div className="flex items-center gap-3 mb-5 md:mb-7">
                <div className="w-1.5 h-8 md:h-10 rounded-full bg-primary" />
                <h3 className="text-lg md:text-2xl lg:text-3xl font-black tracking-tight font-heading">
                  {category.title}
                </h3>
              </div>

              <Accordion
                type="single"
                collapsible
                defaultValue={`item-${catIdx}-0`}
                className="space-y-3"
              >
                {category.items.map((item, itemIdx) => (
                  <AccordionItem
                    key={itemIdx}
                    value={`item-${catIdx}-${itemIdx}`}
                    className="card-premium px-5 py-1 md:px-7 md:py-2 border rounded-xl data-[state=open]:border-primary/20"
                  >
                    <AccordionTrigger className="text-sm md:text-base font-semibold hover:no-underline text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-xs md:text-sm leading-relaxed pt-1 pb-2">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        variant="dark"
        sectionBg="white"
        title="Still Have a Question in Mind?"
        description="For more details, just click the button below - it'll take you right where you need to go."
      />

      <Footer />
    </div>
  );
};

export default FaqsPage;
