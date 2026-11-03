import { Link } from "@tanstack/react-router";
import { ArrowRight, Search, PenTool, FileCheck, Settings, HardHat, ClipboardCheck } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import servicesBg from "@/assets/services-bg.png";

const services = [
  {
    icon: Search,
    title: "Feasibility Study",
    description: "Early stage assessment of site potential, planning controls, and project viability-so you know what's possible before spending on design.",
    href: "/feasibility-study",
  },
  {
    icon: PenTool,
    title: "Design & Documentation",
    description: "Architectural plans and technical drawings prepared to council standards-accurate, buildable, and compliant from the first submission.",
    href: "/services/architecture-design",
  },
  {
    icon: FileCheck,
    title: "Development Approvals (DA & CDC)",
    description: "Full approval management from lodgement to certification-council liaison, compliance reporting, and fast-tracked submissions handled end-to-end.",
    href: "/development-approvals-da-cdc",
  },
  {
    icon: Settings,
    title: "Engineering & Compliance Setup",
    description: "Structural, stormwater, BASIX, and NatHERS documentation coordinated with certified consultants-integrated into your project from day one.",
    href: "/engineering-compliance-setup",
  },
  {
    icon: HardHat,
    title: "Construction & Project Management",
    description: "Site coordination between builder, certifier, and consultants-with scope control, timeline tracking, and accountability enforced throughout delivery.",
    href: "/construction-project-management",
  },
  {
    icon: ClipboardCheck,
    title: "Building Inspections",
    description: "Independent pre-build and as-built inspections to verify compliance, quality, and construction accuracy at critical project stages.",
    href: "/building-inspections",
  },
];

const ServicesSection = () => {
  const ref = useStaggerReveal();

  return (
    <section className="section-padding bg-secondary relative overflow-hidden section-glow" ref={ref}>
      <img
        src={servicesBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute top-0 right-0 w-[600px] opacity-15 pointer-events-none"
      />
      <div className="container-custom relative z-10">
        <div className="text-center mb-8 md:mb-14" data-reveal>
          <p className="section-subtitle mb-2 md:mb-3">Our services</p>
          <h2 className="section-title">Comprehensive Services</h2>
          <p className="text-muted-foreground mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            We manage every stage of development - from concept design and approvals to construction coordination - so you can focus on results, not red tape.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href as any}
              className="group card-premium flex flex-col p-4 md:p-8 lg:p-10 min-h-[200px] md:min-h-[300px] overflow-hidden"
              data-reveal
            >
              {/* Icon */}
              <div className="relative w-10 h-10 md:w-14 md:h-14 mb-3 md:mb-6 rounded-xl bg-secondary border border-border flex items-center justify-center transition-all duration-[var(--transition-smooth)] group-hover:border-transparent group-hover:scale-105">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <service.icon className="relative z-10 w-5 h-5 md:w-7 md:h-7 text-muted-foreground stroke-[1.5] transition-all duration-400 group-hover:text-white group-hover:scale-105" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <h3 className="text-sm md:text-lg font-bold mb-1.5 md:mb-2.5 tracking-tight transition-colors duration-300 group-hover:text-primary font-heading">{service.title}</h3>
                <p className="text-muted-foreground text-[11px] md:text-[14.5px] leading-relaxed flex-1 line-clamp-3 md:line-clamp-4">{service.description}</p>
              </div>

              {/* CTA */}
              <div className="pt-3 md:pt-5 mt-3 md:mt-5 border-t border-border group-hover:border-primary/15 transition-colors duration-300">
                <span className="inline-flex items-center gap-2 text-muted-foreground text-xs md:text-sm font-semibold transition-all duration-300 group-hover:text-primary">
                  Learn more<span className="sr-only"> about {service.title}</span>
                  <span className="w-5 h-5 rounded-full border border-current/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-white">
                    <ArrowRight className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 justify-center" data-reveal>
          <a href="#contact" className="btn-primary text-xs md:text-sm group">
            Book a Consultation
            <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </a>
          <Link to="/services" className="btn-outline text-xs md:text-sm group">
            View all Services
            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
