import { ServiceProcessStep } from "@/types/servicePageTypes";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";

interface Props {
  subtitle: string;
  title: string;
  description: string;
  steps: ServiceProcessStep[];
}

const ServiceProcessSection = ({ subtitle, title, description, steps }: Props) => {
  const ref = useStaggerReveal();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-14" data-reveal>
          <p className="section-subtitle mb-2 md:mb-3">{subtitle}</p>
          <h2 className="section-title">{title}</h2>
          <p className="text-muted-foreground mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group" data-reveal>
              <div className="card-premium p-6 lg:p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl lg:text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors duration-500 font-heading">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-bold text-base lg:text-lg mb-2 font-heading group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-primary/40 rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <div key={i} data-reveal>
              <div className="group flex items-start gap-3 p-3.5 card-premium">
                <span className="text-xl font-black text-primary/30 font-heading min-w-[28px]">{step.num}</span>
                <div>
                  <h3 className="font-bold text-xs mb-1 font-heading">{step.title}</h3>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">{step.description}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <div className="w-0.5 h-3 bg-gradient-to-b from-primary/40 to-primary/10 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessSection;
