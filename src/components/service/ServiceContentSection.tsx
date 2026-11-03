import { useState, useEffect, useCallback } from "react";
import { Check } from "lucide-react";
import { ServiceBulletPoint, ServiceBulletCategory, ServiceHeroSlide } from "@/types/servicePageTypes";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import SkeletonImage from "@/components/SkeletonImage";

interface Props {
  images: ServiceHeroSlide[];
  description: string;
  bulletPoints: ServiceBulletPoint[];
  bulletCategories?: ServiceBulletCategory[] | undefined;
  valueCardsSubtitle?: string;
  valueCardsTitle?: string;
  valueCardsDescription?: string;
}

const ServiceContentSection = ({ images, description, bulletPoints, bulletCategories, valueCardsSubtitle, valueCardsTitle, valueCardsDescription }: Props) => {
  const ref = useStaggerReveal();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next, images.length]);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {/* Image Carousel */}
      <div className="relative rounded-lg md:rounded-xl overflow-hidden mb-5 md:mb-8 h-[220px] md:h-[400px] lg:h-[450px]" data-reveal>
        {images.map((slide, i) => (
          <SkeletonImage
            key={i}
            src={slide.image}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            skeletonClassName="absolute inset-0 w-full h-full"
          />
        ))}

        {images.length > 1 && (
          <div className="absolute bottom-2.5 right-2.5 md:bottom-3 md:right-3 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current ? "w-5 md:w-6 bg-primary" : "w-2 md:w-2.5 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <p className="text-muted-foreground text-xs md:text-base leading-relaxed mb-5 md:mb-8" data-reveal>
        {description}
      </p>

      {/* Categorized bullets */}
      {bulletCategories && bulletCategories.length > 0 ? (
        <div className="mb-8 md:mb-14 space-y-5 md:space-y-8" data-reveal>
          <h3 className="font-bold text-sm md:text-lg font-heading text-foreground">What We Manage:</h3>
          {bulletCategories.map((cat, ci) => (
            <div key={ci}>
              <h4 className="font-bold text-xs md:text-base font-heading text-foreground mb-2 md:mb-3">{cat.title}:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-4">
                {cat.points.map((point, pi) => (
                  <div key={pi} className="flex items-start gap-2 md:gap-2.5">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                    </div>
                    <span className="text-xs md:text-sm text-foreground leading-relaxed">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : bulletPoints.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-4 mb-8 md:mb-14" data-reveal>
          {bulletPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-2 md:gap-2.5">
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
              </div>
              <span className="text-xs md:text-sm text-foreground leading-relaxed">{point.text}</span>
            </div>
          ))}
        </div>
      ) : null}

      {/* What We Deliver - inline heading */}
      {valueCardsTitle && (
        <div className="mb-0" data-reveal>
          <h3 className="font-bold text-base md:text-xl lg:text-2xl font-heading text-foreground mb-2 md:mb-4">
            {valueCardsSubtitle && <>{valueCardsSubtitle} - </>}{valueCardsTitle}
          </h3>
          {valueCardsDescription && (
            <p className="text-muted-foreground text-xs md:text-base leading-relaxed">
              {valueCardsDescription}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceContentSection;
