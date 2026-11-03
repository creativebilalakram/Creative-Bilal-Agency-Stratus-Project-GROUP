import { useState, useCallback, useEffect } from "react";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SkeletonImage from "@/components/SkeletonImage";
import blueprintBg from "@/assets/blueprint-bg.png";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project5 from "@/assets/project-5.webp";
import project6 from "@/assets/project-6.png";
import project7 from "@/assets/project-7.png";
import project8 from "@/assets/project-8.png";
import project9 from "@/assets/project-9.jpg";
import project10 from "@/assets/project-10.jpg";
import project11 from "@/assets/project-11.jpg";
import project12 from "@/assets/project-12.webp";
import project14 from "@/assets/project-14.jpg";

const projects = [
  { src: project1, alt: "Contemporary kitchen interior" },
  { src: project2, alt: "Modern duplex exterior" },
  { src: project3, alt: "Aerial view of development site" },
  { src: project5, alt: "Modern kitchen with timber accents" },
  { src: project7, alt: "City skyline high-rise towers" },
  { src: project8, alt: "Modern tower at sunset" },
  { src: project6, alt: "Open living area with high ceilings" },
  { src: project9, alt: "Commercial project exterior" },
  { src: project10, alt: "Architectural project facade" },
  { src: project11, alt: "Project development overview" },
  { src: project12, alt: "Residential project detail" },
  { src: project14, alt: "Modern townhouse development" },
];

const ProjectsSection = () => {
  const ref = useStaggerReveal();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex(prev => prev === null ? null : (prev + 1) % projects.length);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex(prev => prev === null ? null : (prev - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <>
      <section className="section-padding bg-secondary relative" ref={ref}>
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `url(${blueprintBg})`,
            backgroundSize: "600px",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        <div className="container-custom relative z-10">
          <div className="text-center mb-12" data-reveal>
            <p className="section-subtitle mb-3">our Projects</p>
            <h2 className="section-title">Explore our diverse range of projects</h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed max-w-xl mx-auto">
              A few examples of developments we've guided from design to delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
                onClick={() => openLightbox(i)}
                data-reveal
              >
                <SkeletonImage
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  skeletonClassName="w-full h-full absolute inset-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute inset-0 border border-border/30 rounded-xl group-hover:border-primary/30 transition-colors duration-400" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={closeLightbox}
        >
          <button aria-label="Close gallery" onClick={closeLightbox} className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200">
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-wide">
            {lightboxIndex + 1} / {projects.length}
          </div>
          <button aria-label="Previous image" onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110">
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>
          <button aria-label="Next image" onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110">
            <ChevronRight className="w-7 h-7 text-white" />
          </button>
          <div className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={projects[lightboxIndex]!.src} alt={projects[lightboxIndex]!.alt} className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" style={{ animation: "lightboxFadeIn 0.25s ease-out" }} />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto px-4 py-2">
            {projects.map((p, i) => (
              <button key={i} aria-label={`View image ${i + 1}`} onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }} className="flex-shrink-0 w-14 h-10 md:w-16 md:h-12 rounded-lg overflow-hidden transition-all duration-200" style={{ border: i === lightboxIndex ? "2px solid hsl(var(--primary))" : "2px solid transparent", opacity: i === lightboxIndex ? 1 : 0.5 }}>
                <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
