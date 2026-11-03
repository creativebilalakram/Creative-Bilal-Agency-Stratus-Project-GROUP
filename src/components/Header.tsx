import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import stratusLogo from "@/assets/stratus-logo.png";

const services = [
  { label: "Feasibility Study", href: "/feasibility-study" },
  { label: "Design & Documentation", href: "/services/architecture-design" },
  { label: "Development Approvals (DA & CDC)", href: "/development-approvals-da-cdc" },
  { label: "Engineering & Compliance Setup", href: "/engineering-compliance-setup" },
  { label: "Construction & Project Management", href: "/construction-project-management" },
  { label: "Building Inspections", href: "/building-inspections" },
];

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const showBg = scrolled || mobileOpen;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container-custom">
        <div
          className={`transition-all duration-500 ease-out ${
            showBg
              ? "mt-3 rounded-xl bg-navy/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] border border-white/0"
              : "mt-0 rounded-none bg-transparent border border-transparent"
          }`}
        >
          <div className={`flex items-center justify-between transition-all duration-500 ${showBg ? 'h-11 md:h-16 px-4' : 'h-14 md:h-20 px-0'}`}>
            <Link to="/" className="flex items-center">
              <img src={stratusLogo} alt="Stratus Project Group" className={`transition-all duration-500 w-auto ${showBg ? 'h-7 md:h-9' : 'h-8 md:h-12'}`} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-white/90 font-semibold text-sm hover:text-primary transition-colors duration-300">Home</Link>
              <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link to="/services" className="flex items-center gap-1 text-white/90 font-semibold text-sm hover:text-primary transition-colors duration-300">
                  Our Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </Link>
                {/* Invisible bridge + dropdown */}
                <div className={`absolute top-full left-0 w-72 pt-3 transition-all duration-300 origin-top ${servicesOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'}`}>
                  <div className="bg-navy-light/95 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10 py-2">
                    {services.map((s) => (
                      <Link key={s.href} to={s.href as any} className="block px-5 py-2.5 text-sm text-white/80 hover:text-primary hover:bg-white/5 transition-colors duration-200" onClick={() => setServicesOpen(false)}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link to="/about-us" className="text-white/90 font-semibold text-sm hover:text-primary transition-colors duration-300">About Us</Link>
              <Link to="/faqs" className="text-white/90 font-semibold text-sm hover:text-primary transition-colors duration-300">Faqs</Link>
              <Link to="/contact-us" className="text-white/90 font-semibold text-sm hover:text-primary transition-colors duration-300">Contact Us</Link>
            </nav>

            <div className="hidden lg:block">
              <Link to="/contact-us" className="btn-primary text-sm px-6 py-3">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button className="lg:hidden text-white w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors duration-200" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation menu" aria-expanded={mobileOpen}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="border-t border-white/10 py-5 flex flex-col gap-3 px-4">
              <Link to="/" className="text-white font-semibold text-sm" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link to="/services" className="text-white/80 font-semibold text-sm" onClick={() => setMobileOpen(false)}>Our Services</Link>
              <Link to="/about-us" className="text-white/80 font-semibold text-sm" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link to="/faqs" className="text-white/80 font-semibold text-sm" onClick={() => setMobileOpen(false)}>Faqs</Link>
              <Link to="/contact-us" className="text-white/80 font-semibold text-sm" onClick={() => setMobileOpen(false)}>Contact Us</Link>
              <Link to="/contact-us" className="btn-primary w-full text-xs justify-center mt-2 py-2.5" onClick={() => setMobileOpen(false)}>
                Book Free Consultation <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
