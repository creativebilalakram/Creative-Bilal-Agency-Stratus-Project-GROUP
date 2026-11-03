import { Search, PenTool, FileCheck, Settings, HardHat, ClipboardCheck } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";

const flowSteps = [
  { num: "01", icon: Search, title: "Feasibility", desc: "Comprehensive site evaluation and viability analysis" },
  { num: "02", icon: PenTool, title: "Design", desc: "Detailed architectural plans and technical documentation" },
  { num: "03", icon: FileCheck, title: "Approvals", desc: "Development and construction permit applications" },
  { num: "04", icon: Settings, title: "Engineering", desc: "Technical specifications and compliance verification" },
  { num: "05", icon: HardHat, title: "Construction", desc: "On-site execution with dedicated project oversight" },
  { num: "06", icon: ClipboardCheck, title: "Inspections", desc: "Rigorous quality checks and final certification" },
];

const ProcessSection = () => {
  const ref = useStaggerReveal();

  return (
    <section className="section-padding bg-background relative section-glow" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-14" data-reveal>
          <p className="section-subtitle mb-2 md:mb-3">our Process</p>
          <h2 className="section-title">How We Move Your Project Forward</h2>
          <p className="text-muted-foreground mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            We follow a clear, science-backed 3-step framework to eliminate guesswork and drive consistent, measurable results.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-[75px] left-[90px] right-[90px] h-0.5 bg-border rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.3)]" />
          </div>

          <div className="grid grid-cols-6 gap-3 lg:gap-5">
            {flowSteps.map((step, i) => (
              <div key={step.num} className="group relative flex flex-col items-center cursor-pointer transition-all duration-500" data-reveal>
                <span className="text-[11px] font-bold text-muted-foreground/40 tracking-wide mb-5 transition-all duration-400 group-hover:text-primary group-hover:scale-110">
                  {step.num}
                </span>

                <div className="relative w-24 h-24 lg:w-[140px] lg:h-[140px] rounded-xl bg-background border border-border shadow-sm flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-[0_16px_40px_rgba(220,38,38,0.12)] overflow-hidden">
                  <div className="absolute inset-[2px] rounded-lg bg-background group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 transition-all duration-500" />
                  <step.icon className="relative z-10 w-8 h-8 lg:w-12 lg:h-12 text-foreground stroke-[1.5] transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                </div>

                <h3 className="mt-5 text-sm lg:text-[15px] font-semibold text-foreground text-center tracking-tight transition-colors duration-300 group-hover:text-primary font-heading">
                  {step.title}
                </h3>
                <p className="mt-1 text-[11px] lg:text-xs text-muted-foreground text-center font-medium max-w-[140px]">{step.desc}</p>

                {i < flowSteps.length - 1 && (
                  <svg className="absolute top-[75px] -right-2 z-10 w-4 h-4 text-border group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Flowchart */}
        <div className="md:hidden space-y-0">
          {flowSteps.map((step, i) => (
            <div key={step.num} data-reveal>
              <div className="group relative flex items-center gap-2.5 p-2.5 bg-background border border-border rounded-xl shadow-sm transition-all duration-400 hover:-translate-y-0.5 hover:shadow-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <span className="relative z-10 text-[10px] font-bold text-primary min-w-[18px] tracking-wide">{step.num}</span>
                <div className="relative z-10 w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center flex-shrink-0 transition-all duration-400 overflow-hidden group-hover:scale-105 group-hover:border-transparent">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <step.icon className="relative z-10 w-4.5 h-4.5 text-foreground stroke-[1.5] transition-all duration-400 group-hover:text-white group-hover:scale-110" />
                </div>
                <div className="relative z-10 flex-1 min-w-0">
                  <h3 className="text-xs font-semibold text-foreground tracking-tight transition-colors duration-300 group-hover:text-primary leading-tight font-heading">{step.title}</h3>
                  <p className="text-[10px] text-muted-foreground font-medium mt-0.5 leading-snug">{step.desc}</p>
                </div>
              </div>
              {i < flowSteps.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <div className="w-0.5 h-3 rounded-full bg-gradient-to-b from-primary/60 via-primary to-primary/60" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
