import { Link } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SEO from "@/components/SEO";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  PenTool,
  FileCheck,
  HardHat,
} from "lucide-react";
import { useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import about1 from "@/assets/about-1.png";
import about2 from "@/assets/about-2.png";
import about3 from "@/assets/about-3.png";
import about4 from "@/assets/about-4.png";
import stratusLogo from "@/assets/stratus-logo.png";
import aboutTeam from "@/assets/about-team-1.jpg";

const features = [
  "Clarity in Every Step",
  "Smarter, Build-Ready Design",
  "One Team, One Responsibility",
];

const roles = [
  {
    icon: PenTool,
    title: "Design & Documentation",
    description:
      "Build-ready drawings and documentation aligned to both approvals and construction requirements.",
  },
  {
    icon: FileCheck,
    title: "Development Applications & Approvals",
    description:
      "DA/CDC submissions managed end-to-end to avoid delays and rework.",
  },
  {
    icon: HardHat,
    title: "Construction Coordination",
    description:
      "Clear consultant + builder coordination from approval to final build delivery.",
  },
];

const whyPoints = [
  "Architectural precision meets builder execution.",
  "Approvals handled without confusion or rework.",
  "Projects progress without unnecessary delays.",
  "Full transparency from feasibility to handover.",
];

const coreValues = [
  { name: "Clarity", desc: "Every step documented. No guesswork." },
  { name: "Efficiency", desc: "Time matters. Processes must move." },
  { name: "Accountability", desc: "One point of ownership, start to finish." },
  { name: "Integrity", desc: "No shortcuts. Ever." },
];

const AboutUsPage = () => {
  const introRef = useStaggerReveal();
  const whoRef = useStaggerReveal();
  const whatRef = useStaggerReveal();
  const whyRef = useStaggerReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us - Sydney Development Consultancy"
        description="Stratus Project Group is a Sydney-based consultancy helping developers deliver residential projects the right way - compliant, coordinated, and commercially sound."
        canonical="/about-us"
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
          <p className="section-subtitle mb-3 md:mb-4">About Us</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight font-heading">
            About Us
          </h1>
        </div>
      </section>

      {/* About Intro */}
      <section className="section-padding bg-background" ref={introRef}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-20 items-center">
            <div className="relative" data-reveal>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <img src={about1} alt="Team reviewing architectural plans" className="rounded-xl w-full aspect-[4/3] object-cover" loading="lazy" />
                <img src={about2} alt="Modern residential project" className="rounded-xl w-full aspect-[4/3] object-cover mt-8 md:mt-10" loading="lazy" />
                <img src={about3} alt="Collaborative team meeting" className="rounded-xl w-full aspect-[4/3] object-cover -mt-4 md:-mt-6" loading="lazy" />
                <img src={about4} alt="Engineers on construction site" className="rounded-xl w-full aspect-[4/3] object-cover mt-3 md:mt-4" loading="lazy" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-background rounded-full p-2 md:p-3 shadow-xl">
                  <img src={stratusLogo} alt="Stratus" className="w-10 h-10 md:w-14 md:h-14 object-contain" />
                </div>
              </div>
            </div>

            <div className="max-w-xl" data-reveal>
              <p className="section-subtitle mb-2 md:mb-3">About Us</p>
              <h2 className="section-title mb-4 md:mb-6 text-2xl md:text-4xl lg:text-5xl">
                We Guide Developments From Idea to Completion.
              </h2>
              <p className="text-muted-foreground text-sm md:text-base lg:text-[17px] leading-relaxed mb-6 md:mb-8 max-w-lg">
                We help new and growing developers move from concept and
                approvals through to construction coordination - with clarity,
                compliance, and control.
              </p>

              <div className="bg-muted rounded-xl px-4 md:px-6 py-4 md:py-5 mb-6 md:mb-8">
                <div className="space-y-3 md:space-y-4">
                  {features.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 md:gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                      <span className="font-semibold text-foreground text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact-us" className="btn-primary text-xs md:text-sm group">
                  Book A Free Design Consultation
                  <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
                <a href="tel:+610422207176" className="btn-outline text-xs md:text-sm group">
                  <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-secondary" ref={whoRef}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center">
            <div className="max-w-xl" data-reveal>
              <p className="section-subtitle mb-2 md:mb-3">Who We Are</p>
              <h2 className="section-title mb-4 md:mb-6 text-2xl md:text-4xl lg:text-5xl">
                Development Done Right.
              </h2>
              <p className="text-muted-foreground text-sm md:text-base lg:text-[17px] leading-relaxed max-w-lg">
                Stratus Project Group is a Sydney-based development consultancy
                focused on helping developers deliver residential projects the
                right way - compliant, coordinated, and commercially sound. We
                manage the journey from design to approvals to construction
                coordination, ensuring every decision is informed, documented,
                and strategically aligned with project goals.
              </p>
            </div>

            <div className="relative" data-reveal>
              <img
                src={aboutTeam}
                alt="Team collaboration in office"
                className="rounded-xl w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-5 md:-right-5 bg-background rounded-xl p-4 md:p-6 shadow-xl border border-border">
                <p className="text-3xl md:text-4xl lg:text-5xl font-black text-primary font-heading">
                  100%
                </p>
                <p className="text-muted-foreground text-xs md:text-sm font-medium">
                  Compliance-Driven
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-background" ref={whatRef}>
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-14" data-reveal>
            <p className="section-subtitle mb-2 md:mb-3">What We Do</p>
            <h2 className="section-title">Our Role in the Project</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-3 md:gap-6">
            {roles.map((role) => (
              <div
                key={role.title}
                className="group card-premium p-5 md:p-8 lg:p-10"
                data-reveal
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-secondary border border-border flex items-center justify-center mb-4 md:mb-6 transition-all duration-400 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 group-hover:border-transparent group-hover:scale-105">
                  <role.icon className="w-5 h-5 md:w-7 md:h-7 text-muted-foreground transition-all duration-400 group-hover:text-white" />
                </div>
                <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-3 transition-colors duration-300 group-hover:text-primary font-heading">
                  {role.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-xs md:text-[15px]">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist + Core Values */}
      <section className="section-padding bg-secondary" ref={whyRef}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-3 md:gap-6">
            <div className="card-premium p-6 md:p-10 lg:p-12" data-reveal>
              <p className="section-subtitle mb-2 md:mb-3">Why We Exist</p>
              <h3 className="text-lg md:text-2xl lg:text-3xl font-black tracking-tight font-heading mb-4 md:mb-6">
                We Bridge the Gap Between Designers and Builders.
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-xs md:text-[15px] leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-premium p-6 md:p-10 lg:p-12" data-reveal>
              <p className="section-subtitle mb-2 md:mb-3">Core Values</p>
              <h3 className="text-lg md:text-2xl lg:text-3xl font-black tracking-tight font-heading mb-4 md:mb-6">
                The Principles That Shape Every Project
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {coreValues.map((value) => (
                  <li key={value.name} className="flex items-start gap-2.5 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-xs md:text-[15px] leading-relaxed">
                      <strong className="text-foreground">{value.name}</strong>{" "}
                      - {value.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner variant="dark" sectionBg="white" />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
