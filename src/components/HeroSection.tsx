import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.webp";
import SkeletonImage from "@/components/SkeletonImage";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "100%", label: "Compliance Rate" },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const children = el.querySelectorAll("[data-animate]");
    children.forEach((child, i) => {
      setTimeout(() => {
        (child as HTMLElement).style.opacity = "1";
        (child as HTMLElement).style.transform = "translateY(0)";
      }, 600 + i * 200);
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[100dvh] flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <SkeletonImage
          src={heroBg}
          alt="Modern construction site"
          className="w-full h-full object-cover object-center hero-zoom blur-[1.5px]"
          skeletonClassName="w-full h-full"
          width={1920}
          height={1080}
        />
        {/* Light base overlay */}
        <div className="absolute inset-0 bg-[#0a1628]/30" />
        {/* Left gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 via-[#0a1628]/50 to-transparent" />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/25 via-transparent to-[#0a1628]/70" />
        {/* Warm tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent" />
        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.02] hero-grain pointer-events-none" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center container-custom w-full pt-20 md:pt-24">
        <div className="max-w-2xl">
          <div
            data-animate
            className="flex items-center gap-3 mb-5 md:mb-8 opacity-0 translate-y-5 transition-all duration-700 ease-out"
          >
            <div className="w-7 md:w-8 h-[2px] bg-primary" />
            <p className="text-primary/90 font-semibold uppercase tracking-[0.25em] text-[9px] md:text-[11px]">
              Welcome to Stratus
            </p>
          </div>

          <h1
            data-animate
            className="text-[1.65rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-extrabold text-white leading-[1.12] mb-4 md:mb-7 opacity-0 translate-y-5 transition-all duration-700 ease-out tracking-[-0.015em] font-heading"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            Strategic Design &{" "}
            <br className="hidden sm:block" />
            Construction{" "}
            <span className="text-primary drop-shadow-[0_0_20px_rgba(220,38,38,0.3)]">Coordination</span>
          </h1>

          <p
            data-animate
            className="text-white/45 text-[12.5px] md:text-[15px] lg:text-base max-w-sm md:max-w-md mb-7 md:mb-10 leading-[1.7] opacity-0 translate-y-5 transition-all duration-700 ease-out font-light"
          >
            From concept to completion - we manage the documentation, approvals, and coordination required to move your development forward.
          </p>

          <div
            data-animate
            className="flex flex-row gap-2.5 sm:gap-3 opacity-0 translate-y-5 transition-all duration-700 ease-out"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 bg-primary text-white px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl font-bold text-[12px] md:text-sm transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.85) 100%)",
                boxShadow: "0 4px 20px rgba(220,38,38,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Consultation
                <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </span>
            </a>
            <a
              href="#casestudy"
              className="group inline-flex items-center justify-center gap-2.5 border border-white/15 text-white/70 px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl font-semibold text-[12px] md:text-sm hover:bg-white/[0.07] hover:border-white/30 hover:text-white hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm active:scale-[0.98]"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              View Work
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="relative z-10 container-custom w-full pb-5 md:pb-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent mb-4 md:mb-5" />
        <div
          data-animate
          className="flex items-center justify-between gap-4 opacity-0 translate-y-4 transition-all duration-700 ease-out"
          style={{ transitionDelay: "1.6s" }}
        >
          <div className="flex gap-6 md:gap-12">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex items-baseline gap-1.5 ${i === 2 ? "hidden md:flex" : ""}`}
              >
                <span className="text-base md:text-2xl font-bold text-white/90 tracking-tight font-heading">
                  {stat.value}
                </span>
                <span className="text-white/25 text-[7px] md:text-[10px] font-medium uppercase tracking-[0.12em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <div className="hidden md:flex animate-bounce">
            <ChevronDown className="w-3.5 h-3.5 text-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
