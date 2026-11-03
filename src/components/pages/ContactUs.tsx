import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SEO from "@/components/SEO";
import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import heroBg from "@/assets/hero-bg.jpg";

const ContactUsPage = () => {
  const introRef = useScrollReveal();
  const formRef = useScrollReveal();
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const src = "https://site.vexmanagement.com.au/js/form_embed.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const sc = document.createElement("script");
      sc.src = src;
      sc.async = true;
      document.body.appendChild(sc);
    }
  }, []);

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

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us - Book a Free Consultation"
        description="Get in touch with Stratus Project Group for a free design consultation. Based in Sydney - we respond within 24 hours. Call, email, or fill out our form."
        canonical="/contact-us"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Construction site background"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/85" />
        </div>
        <div className="relative z-10 text-center container-custom">
          <p className="text-primary font-bold uppercase tracking-[0.25em] text-[10px] md:text-xs mb-3 md:mb-4">
            Contact Us
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight font-heading">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding" ref={introRef}>
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="section-subtitle mb-2 md:mb-3">Contact Us</p>
          <h2 className="section-title mb-4 md:mb-6">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-muted-foreground text-xs md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Have a project in mind? Book your free design consultation - we'll help you move from vision to completion, stress-free.
          </p>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section className="pb-[var(--section-spacing)]" ref={formRef}>
        <div className="container-custom">
          <div
            className="grid lg:grid-cols-[380px_1fr] gap-0 items-stretch rounded-xl overflow-hidden"
            style={{
              boxShadow:
                "0 25px 80px -20px rgba(0, 0, 0, 0.15), 0 10px 30px -10px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Form - FIRST on mobile, LEFT on desktop */}
            <div className="bg-background p-5 md:p-8 lg:p-12 flex flex-col order-1 lg:order-2">
              <p className="section-subtitle mb-1 md:mb-2">Fill Form</p>
              <h2 className="section-title text-lg md:text-2xl lg:text-3xl mb-2 md:mb-3">
                Get in touch with us
              </h2>
              <p className="text-muted-foreground text-[11px] md:text-sm mb-4 md:mb-6">
                Tell us a little about your project and we'll be in touch within 24 hours.
              </p>

              <div className="flex-1">
                <iframe
                  src="https://site.vexmanagement.com.au/widget/form/UiXzPTpRf35g783Xj3lX"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: 420,
                    border: "none",
                    borderRadius: 8,
                  }}
                  id="inline-contact-page-form"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Stratus website Form"
                  data-height="420"
                  data-layout-iframe-id="inline-contact-page-form"
                  data-form-id="UiXzPTpRf35g783Xj3lX"
                  title="Stratus Contact Form"
                />
              </div>

              <div className="mt-3 text-center">
                <p className="text-[10px] md:text-sm text-primary font-medium">
                  ✓ Free Consultation • 24hr Response • Sydney Based
                </p>
              </div>
            </div>

            {/* Contact Info - SECOND on mobile, RIGHT on desktop */}
            <div className="bg-navy text-navy-foreground p-5 md:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden order-2 lg:order-1">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />

              <div className="relative z-10">
                <div className="space-y-5 md:space-y-7">
                  <div className="flex items-start gap-3 md:gap-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/25 transition-colors duration-300">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-foreground mb-0.5 text-xs md:text-sm">
                        Email
                      </h4>
                      <a
                        href="mailto:Sajidur@Stratusprojectgroup.com.au"
                        className="text-navy-foreground/60 text-[11px] md:text-sm hover:text-primary transition-colors duration-300 break-all"
                      >
                        Sajidur@Stratusprojectgroup.com.au
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/25 transition-colors duration-300">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-foreground mb-0.5 text-xs md:text-sm">
                        Phone
                      </h4>
                      <a
                        href="tel:+610422207176"
                        className="text-navy-foreground/60 text-[11px] md:text-sm hover:text-primary transition-colors duration-300"
                      >
                        +61 0422 207 176
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/25 transition-colors duration-300">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-foreground mb-0.5 text-xs md:text-sm">
                        Address
                      </h4>
                      <p className="text-navy-foreground/60 text-[11px] md:text-sm">
                        9 Epic Pl, Villawood NSW 2163
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lottie animation */}
              <div className="mt-6 md:mt-8 flex justify-center items-end relative z-10">
                {animationData && (
                  <Lottie
                    lottieRef={lottieRef}
                    animationData={animationData}
                    loop
                    autoplay
                    className="w-[140px] md:w-[180px] lg:w-[220px]"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-[var(--section-spacing)]">
        <div className="container-custom">
          <div className="rounded-xl overflow-hidden" style={{ boxShadow: "var(--card-shadow)" }}>
            <iframe
              src="https://maps.google.com/maps?q=9%20Epic%20Pl%2C%20Villawood%20NSW%202163%2C%20Australia&z=16&hl=en&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stratus Project Group location — 9 Epic Pl, Villawood NSW 2163"
              className="grayscale hover:grayscale-0 transition-all duration-500 w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA - Reused from homepage */}
      <CtaBanner variant="dark" />

      {/* Footer - Reused from homepage */}
      <Footer />
    </div>
  );
};

export default ContactUsPage;
