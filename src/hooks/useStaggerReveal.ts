import { useEffect, useRef } from "react";

export const useStaggerReveal = (staggerDelay = 80) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll("[data-reveal]");
    children.forEach((child) => {
      (child as HTMLElement).style.opacity = "0";
      (child as HTMLElement).style.transform = "translateY(20px)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => {
              child.classList.add("reveal-up");
            }, i * staggerDelay);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerDelay]);

  return ref;
};
