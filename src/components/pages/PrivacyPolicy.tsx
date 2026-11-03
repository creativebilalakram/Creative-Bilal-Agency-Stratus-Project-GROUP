import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import heroBg from "@/assets/hero-bg.jpg";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy"
        description="Read the Stratus Project Group privacy policy - how we collect, use, and protect your personal information."
        canonical="/privacy-policy"
      />
      <Header />

      {/* Hero - consistent with other internal pages */}
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
          <p className="section-subtitle mb-3 md:mb-4">Legal</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight font-heading">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-2">
            Privacy Policy - Stratus Project Group
          </h2>
          <p className="text-muted-foreground text-sm mb-10">Last Updated: November 2025</p>

          <p className="text-muted-foreground leading-relaxed mb-10">
            At Stratus Project Group, we value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data when you visit our website or interact with our services.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg md:text-xl font-bold font-heading text-foreground mb-3">1. Information We Collect</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">We may collect personal and non-personal information, including:</p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 pl-2">
                <li>Name, email address, and contact number (when you submit an enquiry or book a consultation).</li>
                <li>Project-related details you share with us through forms or direct communication.</li>
                <li>Technical data such as IP address, browser type, and device information for analytics and site performance improvement.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold font-heading text-foreground mb-3">2. How We Use Your Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">We use the information collected to:</p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 pl-2">
                <li>Respond to your enquiries and provide consultation or service details.</li>
                <li>Improve our website's performance, design, and user experience.</li>
                <li>Send updates, offers, or important notices (only when you've opted in).</li>
                <li>Comply with legal, regulatory, or professional obligations.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3 font-semibold">We never sell, rent, or trade your personal data with any third party.</p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold font-heading text-foreground mb-3">3. Data Security</h3>
              <p className="text-muted-foreground leading-relaxed mb-2 font-semibold">Your privacy is our priority.</p>
              <p className="text-muted-foreground leading-relaxed">We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. While no system is 100% secure, we continuously monitor and update our protection methods.</p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold font-heading text-foreground mb-3">4. Cookies & Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">Our website uses cookies and analytical tools (like Google Analytics) to understand visitor behavior and improve our services. You can disable cookies in your browser settings, though some parts of the site may not function properly afterward.</p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold font-heading text-foreground mb-3">5. Third-Party Links</h3>
              <p className="text-muted-foreground leading-relaxed">Our website may include links to external websites (e.g., consultants, partners, or reference sites). We are not responsible for the content or privacy practices of those websites.</p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold font-heading text-foreground mb-3">6. Your Rights</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 pl-2">
                <li>Request access to your personal information.</li>
                <li>Ask for corrections or updates to your details.</li>
                <li>Withdraw consent to marketing communications at any time.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:Sajidur@Stratusprojectgroup.com.au" className="text-primary hover:underline font-semibold">
                  Sajidur@Stratusprojectgroup.com.au
                </a>.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold font-heading text-foreground mb-3">7. Updates to This Policy</h3>
              <p className="text-muted-foreground leading-relaxed">We may update this Privacy Policy periodically to reflect changes in our practices or for legal compliance. All updates will be published on this page with a revised "Last Updated" date.</p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold font-heading text-foreground mb-3">8. Contact Us</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">If you have any questions about our Privacy Policy or data protection practices, please reach out to us:</p>
              <ul className="text-muted-foreground leading-relaxed space-y-2 pl-2">
                <li>📍 Address: 9 Epic Pl, Villawood NSW 2163</li>
                <li>📧 Email: <a href="mailto:Sajidur@Stratusprojectgroup.com.au" className="text-primary hover:underline font-semibold">Sajidur@Stratusprojectgroup.com.au</a></li>
                <li>📞 Call Us: via the "Call Now" button on our website</li>
              </ul>
            </div>

            <p className="text-foreground font-semibold font-heading text-center pt-6 border-t border-border">
              Stratus Project Group - From Vision to Completion, With Trust & Transparency.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
