import { useState, useCallback, useEffect, useRef } from "react";
import { Plus, Home, Clock, ChevronRight, ChevronLeft } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import SkeletonImage from "@/components/SkeletonImage";

import kirkham1 from "@/assets/casestudy/kirkham-1.webp";
import kirkham2 from "@/assets/casestudy/kirkham-2.webp";
import kirkham3 from "@/assets/casestudy/kirkham-3.webp";
import chester1 from "@/assets/casestudy/chester-1.webp";
import chester2 from "@/assets/casestudy/chester-2.webp";
import chester3 from "@/assets/casestudy/chester-3.webp";

const projects = [
  {
    title: "47 Kirkham Road, Auburn",
    bullets: [
      "$3.2M Profit | +138% ROI (14 Months)",
      "High-Density Townhouse Development",
      "Full End-to-End Coordination (Design → Completion)",
    ],
    stats: [
      { icon: Plus, value: "$3.2M", rest: "Profit", extra: "(+138% ROI)", label: "Result Achieved" },
      { icon: Home, value: "Townhouse", rest: "Development", extra: "", label: "Project Type" },
      { icon: Clock, value: "14", rest: "Months", extra: "", label: "Completed Timeline" },
    ],
    images: [kirkham1, kirkham2, kirkham3],
  },
  {
    title: "19 Burton Avenue, Chester Hill",
    bullets: [
      "$356K Profit (12 Months)",
      "End-to-End Delivery (Design → Approvals → Build)",
      "Zero Delay Variations (Clean documentation from day 1)",
    ],
    stats: [
      { icon: Plus, value: "$356,000", rest: "Profit", extra: "", label: "Result Achieved" },
      { icon: Home, value: "Duplex", rest: "Development", extra: "", label: "Project Type" },
      { icon: Clock, value: "12", rest: "Months", extra: "", label: "Completed Timeline" },
    ],
    images: [chester1, chester2, chester3],
  },
];

const AUTO_SLIDE_INTERVAL = 5000;

const CaseStudySection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const ref = useStaggerReveal();
  const project = projects[activeProject]!;

  // React-managed reveal for the interactive content area - the shared
  // stagger hook's class manipulation conflicts with React re-renders here.
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setContentVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const nextImage = useCallback(() => {
    setActiveImage((prev) => (prev + 1) % project.images.length);
    setProgressKey((k) => k + 1);
  }, [project.images.length]);

  const prevImage = useCallback(() => {
    setActiveImage((prev) => (prev - 1 + project.images.length) % project.images.length);
    setProgressKey((k) => k + 1);
  }, [project.images.length]);

  useEffect(() => {
    const timer = setInterval(nextImage, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextImage]);

  const goToImage = (i: number) => {
    setActiveImage(i);
    setProgressKey((k) => k + 1);
  };

  const switchProject = (i: number) => {
    if (i === activeProject) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveProject(i);
      setActiveImage(0);
      setProgressKey((k) => k + 1);
      setIsTransitioning(false);
    }, 450);
  };

  const nextProject = () => switchProject((activeProject + 1) % projects.length);
  const prevProject = () => switchProject((activeProject - 1 + projects.length) % projects.length);

  return (
    <section id="casestudy" className="py-14 md:py-20 lg:py-28 bg-navy" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8 md:mb-14" data-reveal>
          <p className="section-subtitle mb-2 md:mb-3">Case Study</p>
          <h2 className="section-title text-navy-foreground">
            Project Spotlight: Real Results, Not Promises
          </h2>
          <p className="text-navy-foreground/60 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            We don't talk in theory. We deliver outcomes. Here's one recent project where strategic design and coordinated execution led directly to measurable profit.
          </p>
        </div>

        {/* Main content area */}
        <div
          ref={contentRef}
          className={`transition-all duration-[600ms] ease-out ${
            contentVisible && !isTransitioning
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-[0.99] translate-y-3"
          }`}
        >
          {/* Two-column layout */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-0 items-stretch">

            {/* LEFT: Image Carousel */}
            <div
              className="relative overflow-hidden rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
              style={{
                background: "rgba(15, 23, 42, 0.5)",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <div className="relative w-full" style={{ paddingBottom: "70%" }}>
                {project.images.map((img, i) => (
                  <div
                    key={`${activeProject}-${i}`}
                    className="absolute inset-0"
                    style={{
                      opacity: i === activeImage ? 1 : 0,
                      transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                      pointerEvents: i === activeImage ? "auto" : "none",
                    }}
                  >
                    <SkeletonImage
                      src={img}
                      alt={`${project.title} - Image ${i + 1}`}
                      className="w-full h-full object-cover"
                      skeletonClassName="w-full h-full absolute inset-0"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(to bottom, transparent 0%, rgba(10,14,26,0.15) 60%, rgba(10,14,26,0.55) 100%)",
                      }}
                    />
                  </div>
                ))}

                <div
                  className="absolute top-3 right-3 md:top-5 md:right-5 z-10 text-navy-foreground font-bold text-[10px] md:text-xs"
                  style={{
                    background: "rgba(15, 23, 42, 0.85)",
                    backdropFilter: "blur(12px)",
                    padding: "5px 10px",
                    borderRadius: "8px",
                    border: "1px solid rgba(239, 63, 63, 0.3)",
                  }}
                >
                  <span className="text-primary">{activeImage + 1}</span>
                  <span className="text-navy-foreground/40 mx-1">/</span>
                  {project.images.length}
                </div>

                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 z-10 w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(15, 23, 42, 0.7)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4 text-navy-foreground" />
                </button>

                <div className="absolute bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToImage(i)}
                      aria-label={`Go to image ${i + 1}`}
                      className="relative overflow-hidden"
                      style={{
                        width: "clamp(28px, 6vw, 52px)",
                        height: "3px",
                        background: "rgba(255, 255, 255, 0.25)",
                        borderRadius: "2px",
                        cursor: "pointer",
                      }}
                    >
                      {i === activeImage && (
                        <div
                          key={progressKey}
                          className="absolute top-0 left-0 h-full rounded-sm"
                          style={{
                            background: "#EF3F3F",
                            boxShadow: "0 0 10px rgba(239, 63, 63, 0.7)",
                            animation: `progress-fill ${AUTO_SLIDE_INTERVAL}ms linear forwards`,
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-10 w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(15, 23, 42, 0.7)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-navy-foreground" />
                </button>
              </div>
            </div>

            {/* RIGHT: Content */}
            <div
              className="flex flex-col justify-center rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none p-5 md:p-8 lg:p-10"
              style={{
                background: "rgba(14, 20, 29, 0.6)",
                borderTop: "none",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                borderLeft: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <p className="section-subtitle mb-1.5 md:mb-2">Project Spotlight</p>
              <h3 className="text-xl md:text-3xl lg:text-4xl font-black text-navy-foreground mb-4 md:mb-5 leading-tight tracking-tight">
                {project.title}
              </h3>

              <div
                className="rounded-lg p-3 md:p-5 space-y-2.5 md:space-y-3 mb-4 md:mb-6"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {project.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 md:gap-3">
                    <span
                      className="w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(239, 63, 63, 0.15)",
                        border: "1px solid rgba(239, 63, 63, 0.35)",
                      }}
                    >
                      <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary" />
                    </span>
                    <span className="text-navy-foreground/80 font-medium text-xs md:text-[15px] leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>

              <div className="hidden lg:flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => switchProject(i)}
                      className="transition-all duration-300 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-lg"
                      style={{
                        background: i === activeProject ? "rgba(239, 63, 63, 0.15)" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${i === activeProject ? "rgba(239, 63, 63, 0.4)" : "rgba(255,255,255,0.06)"}`,
                        color: i === activeProject ? "#EF3F3F" : "rgba(255,255,255,0.4)",
                      }}
                    >
                      Project {i + 1}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevProject}
                    aria-label="Previous project"
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-navy-foreground/60" />
                  </button>
                  <button
                    onClick={nextProject}
                    aria-label="Next project"
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-navy-foreground/60" />
                  </button>
                </div>
              </div>

              <div className="lg:hidden flex items-center gap-2 mt-1">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => switchProject(i)}
                    className="flex-1 transition-all duration-300 text-[10px] font-bold uppercase tracking-wider py-2 rounded-lg text-center"
                    style={{
                      background: i === activeProject ? "rgba(239, 63, 63, 0.15)" : "rgba(255,255,255,0.03)",
                      border: `1px solid ${i === activeProject ? "rgba(239, 63, 63, 0.4)" : "rgba(255,255,255,0.06)"}`,
                      color: i === activeProject ? "#EF3F3F" : "rgba(255,255,255,0.4)",
                    }}
                  >
                    Project {i + 1}
                  </button>
                ))}
                <button
                  onClick={nextProject}
                    aria-label="Next project"
                  className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <ChevronRight className="w-3 h-3 text-navy-foreground/60" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div
            className="mt-4 md:mt-6 rounded-xl"
            style={{
              background: "rgba(14, 20, 29, 0.8)",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "clamp(14px, 4vw, 36px)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {project.stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 md:gap-4 rounded-lg transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "12px 14px",
                  }}
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "rgba(220,45,45,0.1)",
                      border: "1px solid rgba(220,45,45,0.28)",
                    }}
                  >
                    <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" strokeWidth={1.7} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-navy-foreground font-bold text-sm md:text-lg leading-tight mb-0.5">
                      <span className="text-primary">{stat.value}</span>{" "}
                      {stat.rest} {stat.extra}
                    </p>
                    <p
                      className="font-medium uppercase tracking-wider"
                      style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: "10px",
                        letterSpacing: "0.8px",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
