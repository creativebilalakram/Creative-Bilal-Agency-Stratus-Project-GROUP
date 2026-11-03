import { useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SkeletonImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  skeletonClassName?: string;
}

const SkeletonImage = ({ className, skeletonClassName, alt, onLoad, ...props }: SkeletonImageProps) => {
  const [loaded, setLoaded] = useState(false);

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
