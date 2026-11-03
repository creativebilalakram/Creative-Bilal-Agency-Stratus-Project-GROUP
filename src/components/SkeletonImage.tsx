import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SkeletonImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  skeletonClassName?: string;
}

const SkeletonImage = ({ className, skeletonClassName, alt, onLoad, ...props }: SkeletonImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Image may finish loading before hydration, so onLoad never fires.
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const done = () => setLoaded(true);
    if (img.complete && img.naturalWidth > 0) {
      done();
      return;
    }
    img.addEventListener("load", done);
    img.addEventListener("error", done);
    return () => {
      img.removeEventListener("load", done);
      img.removeEventListener("error", done);
    };
  }, [props.src]);


  return (
    <div className={cn("relative overflow-hidden", skeletonClassName)}>
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-muted animate-pulse">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, transparent 0%, hsl(var(--muted-foreground) / 0.06) 50%, transparent 100%)",
              animation: "skeleton-shimmer 1.8s ease-in-out infinite",
            }}
          />
        </div>
      )}
      <img
        ref={imgRef}
        className={cn(
          "transition-opacity duration-700 ease-out",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        alt={alt}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        {...props}
      />
    </div>
  );
};

export default SkeletonImage;
