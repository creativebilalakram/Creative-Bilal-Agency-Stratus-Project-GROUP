import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { CheckCircle, ArrowRight, Clock, Phone, Mail } from "lucide-react";
import confetti from "canvas-confetti";
import stratusLogo from "@/assets/stratus-logo.png";
import SEO from "@/components/SEO";

const ThankYou = () => {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    const duration = 2500;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ["#DC2626", "#1e293b", "#f87171", "#fbbf24"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ["#DC2626", "#1e293b", "#f87171", "#fbbf24"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO title="Thank You" description="Your request has been received. We'll get back to you within 24 hours." noindex />
      {/* Small logo at top */}
      <div className="pt-6 md:pt-8 flex justify-center">
        <Link to="/">
          <img src={stratusLogo} alt="Stratus Project Group" className="h-8 md:h-10 w-auto" />
        </Link>
      </div>

      <main className="flex-1 flex items-center justify-center py-12 md:py-20 px-4">
        <div className="max-w-lg w-full text-center">
          {/* Animated check */}
          <div className="relative mx-auto w-24 h-24 md:w-28 md:h-28 mb-8">
            <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping" style={{ animationDuration: "2s" }} />
            <div className="absolute inset-0 rounded-full bg-primary/5" />
            <div className="relative w-full h-full rounded-full bg-primary/10 flex items-center justify-center animate-scale-in">
              <CheckCircle className="w-12 h-12 md:w-14 md:h-14 text-primary" strokeWidth={1.5} />
            </div>
          </div>

          <h1 className="section-title text-3xl md:text-5xl mb-4 animate-fade-in">
            Thank You!
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "both" }}>
            We've received your request and will get back to you within{" "}
            <span className="text-foreground font-semibold">24 hours</span> with a detailed quote and available booking times.
          </p>

          {/* What happens next */}
          <div
            className="card-premium p-6 md:p-8 mb-8 text-left animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <h3 className="font-bold text-sm md:text-base mb-4 text-foreground">What happens next?</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "You'll receive a confirmation email shortly." },
                { icon: Clock, text: "Our team reviews your project details within 24hrs." },
                { icon: Phone, text: "We'll reach out to discuss your requirements." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm pt-1.5">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in"
            style={{ animationDelay: "0.45s", animationFillMode: "both" }}
          >
            <Link to="/" className="btn-primary">
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="btn-outline">
              Browse Services
            </Link>
          </div>

          <p
            className="mt-10 text-xs text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            Stratus Project Group - From Vision to Completion
          </p>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
