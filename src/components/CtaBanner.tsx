import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import ctaBuilding from "@/assets/cta-building.png";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import SkeletonImage from "@/components/SkeletonImage";

interface CtaBannerProps {
  variant?: "light" | "dark";
  title?: string;
  description?: string;
  sectionBg?: "white" | "gray";
}

const CtaBanner = ({ variant = "light", title, description, sectionBg = "gray" }: CtaBannerProps) => {
  const ref = useStaggerReveal();
  const isDark = variant === "dark";
  const displayTitle = title || "Ready to Start Your Development?";
  const displayDesc = description || "We don't talk in theory. We deliver outcomes. Here's one recent project where strategic design and coordinated execution led directly to measurable profit.";

  return (
    <section className={`pt-20 md:pt-28 lg:pt-32 pb-[var(--section-spacing)] ${sectionBg === "white" ? "bg-background" : "bg-secondary"}`} ref={ref}>
      <div className="container-custom">
        <div
          className={`relative rounded-xl overflow-visible border min-h-[280px] md:min-h-[340px] lg:min-h-[380px] ${
            isDark
              ? "border-navy-light bg-navy text-navy-foreground"
              : "border-border bg-background"
          }`}
          style={{
            boxShadow: isDark
              ? "0 24px 80px -20px rgba(0, 0, 0, 0.25)"
              : "0 24px 80px -20px rgba(0, 0, 0, 0.12)",
          }}
        >
          <div className="relative">
            <div className="px-5 py-10 md:px-10 md:py-16 lg:pl-16 lg:pr-8 lg:py-20 lg:max-w-[55%]">
              <h2
                className={`section-title mb-3 md:mb-5 font-heading text-2xl md:text-4xl lg:text-5xl ${
                  isDark ? "text-navy-foreground" : ""
                }`}
                data-reveal
              >
                {displayTitle}
              </h2>
              <p
                className={`text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 max-w-md ${
                  isDark ? "text-navy-foreground/70" : "text-muted-foreground"
                }`}
                data-reveal
              >
                {displayDesc}
              </p>
              <div data-reveal>
                <Link to="/contact-us" className="btn-primary text-xs md:text-sm group">
                  Book A Free Consultation
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/15 flex items-center justify-center transition-all duration-300 group-hover:bg-white/25">
                    <ArrowRight className="w-2.5 h-2.5 md:w-3 md:h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:absolute lg:right-0 lg:bottom-0 flex items-end justify-end">
              <SkeletonImage
                src={ctaBuilding}
                alt="Modern commercial building"
                className="w-full max-w-[250px] md:max-w-[320px] lg:max-w-[420px] object-contain lg:-mt-14"
                skeletonClassName="max-w-[250px] md:max-w-[320px] lg:max-w-[420px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
