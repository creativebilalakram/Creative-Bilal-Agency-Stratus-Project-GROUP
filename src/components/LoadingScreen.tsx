import { useState, useEffect } from "react";
import stratusLogo from "@/assets/stratus-logo.png";

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1800);
    const removeTimer = setTimeout(() => setVisible(false), 2400);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s ease-out",
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      <img
        src={stratusLogo}
        alt="Stratus"
        className="w-24 h-24 md:w-28 md:h-28 object-contain mb-8"
        style={{
          animation: "loader-pulse 2s ease-in-out infinite",
        }}
      />
      <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-primary"
          style={{
            animation: "loader-bar 1.6s ease-out forwards",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
