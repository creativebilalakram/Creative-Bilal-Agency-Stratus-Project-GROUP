import { MapPin, FileCheck, Users, Settings, Building2, Shield } from "lucide-react";

const items = [
  { icon: MapPin, text: "Based in Sydney, NSW" },
  { icon: FileCheck, text: "800+ Documentation Packages Delivered" },
  { icon: Users, text: "Builder & Developer Led Team" },
  { icon: Settings, text: "End-to-End Development Coordination" },
  { icon: Building2, text: "Local Home Builders & Private Developers" },
  { icon: Shield, text: "Compliance & Certification Specialists" },
];

const TrustCarousel = () => {
  return (
    <div className="w-full bg-gradient-to-br from-secondary via-background to-secondary py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto overflow-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-[clamp(60px,12vw,180px)] bg-gradient-to-r from-secondary via-secondary/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-[clamp(60px,12vw,180px)] bg-gradient-to-l from-secondary via-secondary/80 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-fit py-3" style={{ animationDuration: "50s" }}>
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 mx-3.5 px-6 md:px-8 py-4 md:py-5 bg-background rounded-xl border border-border/80 whitespace-nowrap transition-all duration-400 cursor-default hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06),0_12px_32px_rgba(220,38,38,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-primary/70 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/85 group-hover:scale-[1.08]">
                <item.icon className="w-[18px] h-[18px] md:w-5 md:h-5 text-white" />
              </div>
              <span className="text-foreground font-semibold text-[13px] md:text-[15px] tracking-[-0.2px]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustCarousel;
