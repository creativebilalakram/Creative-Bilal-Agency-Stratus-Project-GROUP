import { Users, Zap, HardHat } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";

const reasons = [
  {
    icon: Users,
    title: "One Partner, Start to Finish",
    description: "We manage everything - design, approvals, and construction coordination. No juggling architects, engineers, or certifiers. One team. One responsibility. Zero finger-pointing.",
  },
  {
    icon: Zap,
    title: "Faster Approvals, Less Noise",
    description: "Our planning and compliance expertise accelerates council and certifier approvals. No back-and-forth. No missing documentation.",
  },
  {
    icon: HardHat,
    title: "Built by People Who Actually Build",
    description: "We don't just draw plans - we understand construction. Every detail is coordinated to be build-ready, not just \"nice on paper.\"",
  },
];

const WhyStratusSection = () => {
  const ref = useStaggerReveal();

  return (
    <section className="section-padding bg-secondary relative section-glow" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-14" data-reveal>
          <p className="section-subtitle mb-2 md:mb-3">WHY STRATUS?</p>
          <h2 className="section-title">Why Developers Work With Us</h2>
          <p className="text-muted-foreground mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            We remove the confusion, delays, and coordination problems that drag projects down - giving you one accountable partner from planning to construction.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-3 md:gap-6">
          {reasons.map((reason) => (
            <div key={reason.title} className="group card-premium p-5 md:p-8 lg:p-10" data-reveal>
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-secondary border border-border flex items-center justify-center mb-4 md:mb-6 transition-all duration-400 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 group-hover:border-transparent group-hover:scale-105">
                <reason.icon className="w-5 h-5 md:w-7 md:h-7 text-muted-foreground transition-all duration-400 group-hover:text-white" />
              </div>
              <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-3 transition-colors duration-300 group-hover:text-primary font-heading">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-xs md:text-[15px]">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStratusSection;
