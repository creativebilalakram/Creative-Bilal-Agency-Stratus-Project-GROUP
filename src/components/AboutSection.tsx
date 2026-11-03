import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import about1 from "@/assets/about-1.png";
import about2 from "@/assets/about-2.png";
import about3 from "@/assets/about-3.png";
import about4 from "@/assets/about-4.png";
import stratusLogo from "@/assets/stratus-logo.png";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import SkeletonImage from "@/components/SkeletonImage";

const features = [
  "Clarity in Every Step",
  "Smarter, Build-Ready Design",
  "One Team, One Responsibility",
];

const AboutSection = () => {
  const ref = useStaggerReveal();

  return (
    <section className="section-padding bg-background relative section-glow" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-20 items-center">
          {/* Left - Image Grid */}
          <div className="relative" data-reveal>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <SkeletonImage src={about1} alt="Team reviewing architectural plans" className="rounded-xl w-full aspect-[4/3] object-cover" skeletonClassName="rounded-xl aspect-[4/3]" loading="lazy" />
              <SkeletonImage src={about2} alt="Modern residential project" className="rounded-xl w-full aspect-[4/3] object-cover mt-8 md:mt-10" skeletonClassName="rounded-xl aspect-[4/3] mt-8 md:mt-10" loading="lazy" />
              <SkeletonImage src={about3} alt="Collaborative team meeting" className="rounded-xl w-full aspect-[4/3] object-cover -mt-4 md:-mt-6" skeletonClassName="rounded-xl aspect-[4/3] -mt-4 md:-mt-6" loading="lazy" />
              <SkeletonImage src={about4} alt="Engineers on construction site" className="rounded-xl w-full aspect-[4/3] object-cover mt-3 md:mt-4" skeletonClassName="rounded-xl aspect-[4/3] mt-3 md:mt-4" loading="lazy" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-background rounded-full p-2 md:p-3 shadow-xl">
                <img src={stratusLogo} alt="Stratus" className="w-10 h-10 md:w-14 md:h-14 object-contain" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="max-w-xl" data-reveal>
            <p className="section-subtitle mb-2 md:mb-3">About Us</p>
            <h2 className="section-title mb-4 md:mb-6 text-2xl md:text-4xl lg:text-5xl">
              Built for Developers - Not<br className="hidden lg:block" /> Just Designers
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-[17px] leading-relaxed mb-6 md:mb-8 max-w-lg">
              Stratus Project Group combines architectural planning, council compliance, and construction coordination into one streamlined workflow. We work with new and growing developers to keep projects moving forward - with clarity, accountability, and zero wasted time.
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
              <a href="#contact" className="btn-primary text-xs md:text-sm group">
                Book A Free Design Consultation
                <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
              <Link to="/about-us" className="btn-outline text-xs md:text-sm group">
                More About Us
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
