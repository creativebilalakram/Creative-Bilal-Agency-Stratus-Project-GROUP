const items = [
  "LOCAL HOME BUILDERS",
  "PRIVATE DEVELOPERS",
  "FIRST-TIME INVESTORS",
  "BOUTIQUE CONSTRUCTION FIRMS",
  "ARCHITECTURAL STUDIOS",
  "ENGINEERING CONSULTANTS",
];

const TrustBar = () => {
  return (
    <div className="w-full bg-secondary">
      <div
        className="border-t border-b border-border"
        style={{
          marginLeft: "max(0px, calc((100vw - 1280px) / 2))",
          borderLeft: "1px solid hsl(var(--border))",
        }}
      >
        <div className="flex items-center" style={{ gap: "clamp(20px, 5vw, 36px)", padding: "clamp(16px, 4vw, 26px) 0" }}>
          <div
            className="flex-shrink-0 font-bold uppercase whitespace-nowrap text-primary"
            style={{ fontSize: "clamp(10px, 2.5vw, 14px)", letterSpacing: "clamp(0.8px, 0.25vw, 1.4px)", paddingLeft: "clamp(16px, 3vw, 32px)" }}
          >
            Trusted by
          </div>

          <div className="flex-1 overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full pointer-events-none z-10" style={{ width: "clamp(40px, 10vw, 90px)", background: "linear-gradient(to right, hsl(var(--secondary)), transparent)" }} />
            <div className="absolute top-0 right-0 h-full pointer-events-none z-10" style={{ width: "clamp(40px, 10vw, 90px)", background: "linear-gradient(to left, hsl(var(--secondary)), transparent)" }} />

            <div className="inline-flex whitespace-nowrap animate-marquee" style={{ gap: "clamp(14px, 3vw, 28px)", animationDuration: "38s" }}>
              {[...items, ...items].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center uppercase font-semibold border border-border bg-background rounded-xl transition-colors hover:border-foreground/30 hover:bg-secondary"
                  style={{ padding: "clamp(9px, 2vw, 13px) clamp(18px, 4vw, 32px)", fontSize: "clamp(10px, 2.2vw, 13px)", letterSpacing: "0.4px", color: "hsl(var(--foreground))" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
