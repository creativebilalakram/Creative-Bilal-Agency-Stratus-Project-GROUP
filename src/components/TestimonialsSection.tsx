import { useStaggerReveal } from "@/hooks/useStaggerReveal";

const testimonials = [
  { initials: "MT", name: "Michael T.", role: "Private Developer", location: "Chester Hill", text: "Stratus handled everything from design to approvals. The process was clear, predictable, and well-managed from day one." },
  { initials: "SL", name: "Sarah L.", role: "Project Manager", location: "Auburn", text: "They coordinated the consultants and builder seamlessly. Zero unnecessary delays. Honestly couldn't ask for better project management." },
  { initials: "JK", name: "James K.", role: "Small-Scale Developer", location: "Bankstown", text: "If you're a first-time developer, these are the guys you want on your side. Straightforward, no games, just results." },
  { initials: "DP", name: "Daniel P.", role: "Builder", location: "Villawood", text: "The documentation was spot-on from day one. Council approvals came back faster than expected. Highly professional team." },
  { initials: "RM", name: "Rebecca M.", role: "Property Investor", location: "Liverpool", text: "What impressed me most was how they stayed involved even during construction. True accountability from start to finish." },
  { initials: "AH", name: "Andrew H.", role: "Developer", location: "Parramatta", text: "They clearly know the Sydney council process inside out. Fast approvals, detailed plans, zero miscommunication." },
  { initials: "LC", name: "Lisa C.", role: "First-Time Developer", location: "Fairfield", text: "Professional from first contact to finish. They managed our DA submission perfectly-council had no issues at all." },
  { initials: "PW", name: "Paul W.", role: "Construction Manager", location: "Penrith", text: "We had a tight deadline and couldn't afford setbacks. Stratus delivered exactly what they promised-on time, every time." },
  { initials: "NK", name: "Nathan K.", role: "Private Developer", location: "Campbelltown", text: "Excellent coordination between all consultants. Engineering reports, BASIX, NatHERS-everything was integrated perfectly." },
  { initials: "EG", name: "Emma G.", role: "Boutique Builder", location: "Blacktown", text: "Best decision we made was hiring Stratus. They removed all the confusion and kept our project moving forward smoothly." },
];

const TestimonialsSection = () => {
  const ref = useStaggerReveal();

  return (
    <section className="section-padding bg-background relative overflow-hidden section-glow" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--navy) / 0.03) 0%, transparent 50%)",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="text-center mb-8 md:mb-14" data-reveal>
          <p className="section-subtitle mb-2 md:mb-3">Testimonials</p>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-muted-foreground mt-3 md:mt-4 text-sm md:text-lg leading-relaxed max-w-xl mx-auto">
            See what our clients say about their experience with us.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative z-10 max-w-[1440px] mx-auto overflow-hidden" data-reveal>
        <div
          className="absolute top-0 bottom-0 left-0 z-20 pointer-events-none"
          style={{ width: "clamp(40px, 10vw, 100px)", background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 z-20 pointer-events-none"
          style={{ width: "clamp(40px, 10vw, 100px)", background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
        />

        <div
          className="flex w-fit hover:[animation-play-state:paused]"
          style={{ gap: "14px", padding: "8px 0", animation: "scrollTestimonials 50s linear infinite" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="group flex-shrink-0 flex flex-col card-premium relative overflow-hidden"
              style={{ padding: "clamp(16px, 3vw, 28px)", width: "clamp(240px, 45vw, 360px)", minHeight: "clamp(200px, 38vw, 280px)" }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/70 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
              <div className="absolute font-bold leading-none text-primary/[0.07] text-4xl md:text-5xl top-2 right-4">"</div>
              <div className="flex gap-0.5 mb-2 md:mb-3">
                {[...Array(5)].map((_, si) => (
                  <span key={si} className="text-primary text-sm md:text-lg transition-all duration-300 group-hover:-translate-y-0.5">★</span>
                ))}
              </div>
              <p className="text-muted-foreground text-[12px] md:text-[14.5px] leading-[1.6] md:leading-[1.7] flex-grow mb-3 md:mb-5">{t.text}</p>
              <div className="flex items-center mt-auto gap-2.5 md:gap-3 pt-3 md:pt-4 border-t border-border">
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-full text-white font-bold w-8 h-8 md:w-11 md:h-11 text-xs md:text-base transition-all duration-400 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.8))", boxShadow: "0 4px 12px hsl(var(--primary) / 0.25)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-foreground text-xs md:text-[15px] tracking-tight mb-0.5">{t.name}</p>
                  <p className="text-muted-foreground text-[10px] md:text-xs font-medium">{t.role}</p>
                  <p className="text-primary text-[9px] md:text-[11px] font-semibold mt-0.5">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
