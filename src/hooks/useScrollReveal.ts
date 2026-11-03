import { useEffect, useRef } from "react";

export const useScrollReveal = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          el.classList.add("reveal-up");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    el.style.opacity = "0";
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
};
