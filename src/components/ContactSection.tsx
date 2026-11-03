import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import contactBg from "@/assets/contact-bg.png";

interface ContactSectionProps {
  formPosition?: "left" | "right";
}

const ContactSection = ({ formPosition = "right" }: ContactSectionProps) => {
  const ref = useStaggerReveal();
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState(null);
  const formWrapRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const el = formWrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShowForm(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!showForm) return;
    const src = "https://site.vexmanagement.com.au/js/form_embed.js";
    if (document.querySelector(`script[src="${src}"]`)) return;
    const sc = document.createElement("script");
    sc.src = src;
    sc.async = true;
    document.body.appendChild(sc);
  }, [showForm]);

  useEffect(() => {
    fetch("/lottie/Customer-Support.json")
      .then((res) => res.json())
      .then((data) => {
        setAnimationData(data);
        setTimeout(() => {
          lottieRef.current?.setSpeed(0.5);
        }, 100);
      });
  }, []);

  const isFormLeft = formPosition === "left";
  const formOrder = isFormLeft ? "order-1 lg:order-1" : "order-1 lg:order-2";
  const infoOrder = isFormLeft ? "order-2 lg:order-2" : "order-2 lg:order-1";
  const gridCols = isFormLeft ? "lg:grid-cols-[1fr_400px]" : "lg:grid-cols-[400px_1fr]";

  return (
    <section
      id="contact"
      className="pt-14 md:pt-20 lg:pt-28 pb-0 relative overflow-hidden"
      ref={ref}
    >
      <img
        src={contactBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="container-custom relative z-10">
        <div
          className={`grid ${gridCols} gap-0 items-stretch rounded-xl overflow-hidden`}
          style={{ boxShadow: "0 25px 80px -20px rgba(0, 0, 0, 0.15), 0 10px 30px -10px rgba(0, 0, 0, 0.1)" }}
          data-reveal
        >
          {/* Form */}
          <div className={`bg-background p-6 md:p-8 lg:p-12 flex flex-col ${formOrder}`}>
            <p className="section-subtitle mb-1.5 md:mb-2">Contact us</p>
            <h2 className="section-title text-xl md:text-2xl lg:text-4xl mb-4 md:mb-6">Get in touch with us</h2>

            <div className="flex-1" ref={formWrapRef} style={{ minHeight: 400 }}>
              {showForm ? (
              <iframe
                src="https://site.vexmanagement.com.au/widget/form/UiXzPTpRf35g783Xj3lX"
                style={{ width: "100%", height: "100%", minHeight: 400, border: "none", borderRadius: 8 }}
                id="inline-UiXzPTpRf35g783Xj3lX"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Stratus website Form"
                data-height="400"
                data-layout-iframe-id="inline-UiXzPTpRf35g783Xj3lX"
                data-form-id="UiXzPTpRf35g783Xj3lX"
                title="Stratus website Form"
              />
              ) : (
                <div className="w-full h-[400px] rounded-lg bg-muted animate-pulse" aria-hidden="true" />
              )}
            </div>

            <div className="mt-3 text-center">
              <p className="text-[11px] md:text-sm text-primary font-medium">
                ✓ Free Consultation • 24hr Response • Sydney Based
              </p>
            </div>
          </div>

          {/* Contact info */}
          <div className={`bg-navy text-navy-foreground p-6 md:p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden ${infoOrder}`}>
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />

            <div className="relative z-10">
              <h3 className="text-[10px] md:text-sm font-semibold text-navy-foreground/50 uppercase tracking-widest mb-6 md:mb-8">
                Contact Info
              </h3>

              <div className="space-y-5 md:space-y-7">
                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/25 transition-colors duration-300">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-foreground mb-0.5 text-xs md:text-sm">Email</h4>
                    <a href="mailto:Sajidur@Stratusprojectgroup.com.au" className="text-navy-foreground/60 text-xs md:text-sm hover:text-primary transition-colors duration-300 break-all">
                      Sajidur@Stratusprojectgroup.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/25 transition-colors duration-300">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-foreground mb-0.5 text-xs md:text-sm">Phone</h4>
                    <a href="tel:+610422207176" className="text-navy-foreground/60 text-xs md:text-sm hover:text-primary transition-colors duration-300">
                      +61 0422 207 176
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/25 transition-colors duration-300">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-foreground mb-0.5 text-xs md:text-sm">Address</h4>
                    <p className="text-navy-foreground/60 text-xs md:text-sm">9 Epic Pl, Villawood NSW 2163</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-6 -mb-8 md:-mb-12 -mx-8 md:-mx-12 flex justify-center items-end relative z-10">
              {animationData && (
                <Lottie
                  lottieRef={lottieRef}
                  animationData={animationData}
                  loop
                  autoplay
                  className="w-[180px] md:w-[220px] lg:w-[280px]"
                  style={{ marginBottom: -5 }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 md:mt-10 h-28 md:h-36 w-full grayscale hover:grayscale-0 transition-all duration-500">
        <iframe
          src="https://maps.google.com/maps?q=9%20Epic%20Pl%2C%20Villawood%20NSW%202163%2C%20Australia&z=16&hl=en&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Stratus Project Group location — 9 Epic Pl, Villawood NSW 2163"
        />
      </div>
    </section>
  );
};

export default ContactSection;
