import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

interface Props {
  label: string;
  title: string;
}

const ServiceHero = ({ label, title }: Props) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const children = el.querySelectorAll("[data-animate]");
    children.forEach((child, i) => {
      setTimeout(() => {
        (child as HTMLElement).style.opacity = "1";
        (child as HTMLElement).style.transform = "translateY(0)";
      }, 300 + i * 200);
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[35vh] md:h-[45vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Construction site background"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/85" />
      </div>
      <div className="relative z-10 text-center container-custom px-5">
        <p
          data-animate
          className="text-primary font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] text-[9px] md:text-xs mb-2 md:mb-4 opacity-0 translate-y-6 transition-all duration-700 ease-out"
        >
          {label}
        </p>
        <h1
          data-animate
          className="text-2xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight font-heading opacity-0 translate-y-6 transition-all duration-700 ease-out"
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default ServiceHero;
