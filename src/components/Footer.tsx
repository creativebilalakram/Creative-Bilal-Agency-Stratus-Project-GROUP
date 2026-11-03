import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import stratusLogo from "@/assets/stratus-logo.png";

const serviceLinks = [
  { label: "Feasibility Study", href: "/feasibility-study" },
  { label: "Design & Documentation", href: "/services/architecture-design" },
  { label: "Development Approvals (DA & CDC)", href: "/development-approvals-da-cdc" },
  { label: "Engineering & Compliance Setup", href: "/engineering-compliance-setup" },
  { label: "Construction & Project Management", href: "/construction-project-management" },
  { label: "Building Inspections", href: "/building-inspections" },
];

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Faqs", href: "/faqs" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const Footer = () => {
  return (
    <footer className="bg-navy pt-14 md:pt-20 pb-6 md:pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="col-span-2 md:col-span-1">
            <img src={stratusLogo} alt="Stratus Project Group" className="h-10 md:h-14 w-auto mb-4 md:mb-6" />
            <p className="text-navy-foreground/60 leading-relaxed text-xs md:text-sm max-w-xs">
              Our post-construction services gives you peace of mind knowing that we are still here for you even after.
            </p>
          </div>

          <div>
            <h3 className="text-navy-foreground font-bold text-sm md:text-base mb-4 md:mb-6 font-heading">Our Services</h3>
            <ul className="space-y-2 md:space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href as any} className="flex items-center gap-1.5 md:gap-2 text-navy-foreground/75 hover:text-primary transition-colors duration-300 text-[11px] md:text-sm">
                    <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-navy-foreground font-bold text-sm md:text-base mb-4 md:mb-6 font-heading">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href as any} className="flex items-center gap-1.5 md:gap-2 text-navy-foreground/75 hover:text-primary transition-colors duration-300 text-[11px] md:text-sm">
                    <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-navy-foreground/70 text-[10px] md:text-sm">Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
          <p className="text-navy-foreground/70 text-[10px] md:text-sm">
            Built by{" "}
            <a href="https://creativebilal.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium">
              Creative Bilal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
