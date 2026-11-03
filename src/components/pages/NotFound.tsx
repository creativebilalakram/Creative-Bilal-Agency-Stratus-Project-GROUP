import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Home, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." noindex />
      <Header />

      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-navy">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 text-center px-6 py-20">
          {/* Large 404 */}
          <div className="relative mb-6">
            <span className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-black font-heading text-white/[0.03] leading-none select-none block">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-8xl font-black font-heading text-white tracking-tight">
                4<span className="text-primary">0</span>4
              </span>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/" className="btn-primary text-sm group">
              <Home className="w-4 h-4" />
              Back to Home
              <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
            <Link to="/services" className="btn-outline-white text-sm group">
              <Search className="w-4 h-4" />
              Browse Services
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-14 pt-8 border-t border-white/10 max-w-lg mx-auto">
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4 font-semibold">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about-us" },
                { label: "FAQs", href: "/faqs" },
                { label: "Contact Us", href: "/contact-us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href as any}
                  className="text-sm text-white/50 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                >
                  {link.label}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
