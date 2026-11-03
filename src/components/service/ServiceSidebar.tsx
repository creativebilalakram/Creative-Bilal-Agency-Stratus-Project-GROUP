import { Link } from "@tanstack/react-router";
import { CircleArrowRight, HelpCircle, Phone } from "lucide-react";

const allServices = [
  { label: "Feasibility Study", href: "/feasibility-study" },
  { label: "Design & Documentation", href: "/services/architecture-design" },
  { label: "Development Approvals (DA & CDC)", href: "/development-approvals-da-cdc" },
  { label: "Engineering & Compliance Coordination", href: "/engineering-compliance-setup" },
  { label: "Construction & Project Management", href: "/construction-project-management" },
  { label: "Building Inspections", href: "/building-inspections" },
];

interface Props {
  currentSlug: string;
}

const ServiceSidebar = ({ currentSlug }: Props) => {
  return (
    <aside className="w-full lg:w-auto">
      {/* Service Navigation */}
      <div className="bg-background rounded-xl overflow-hidden mb-6 shadow-sm border border-border/40">
        <div className="px-6 pt-6 pb-4">
          <h3 className="font-bold text-xl md:text-2xl font-heading text-foreground">Our Services</h3>
        </div>
        <ul className="pb-2">
          {allServices.map((service) => {
            const isActive = service.href.includes(currentSlug);
            return (
              <li key={service.href}>
                <Link
                  to={service.href as any}
                  className={`flex items-center gap-3.5 px-6 py-4 text-sm transition-all duration-300 border-b border-border/30 last:border-b-0 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <CircleArrowRight className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-primary" : "text-primary/60"}`} />
                  <span className="leading-snug">{service.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Need Help Card - Dark Navy with decorative circles */}
      <div className="bg-navy rounded-xl p-6 md:p-7 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-yellow-400/20" />
        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-yellow-400/15" />
        <div className="absolute top-0 right-0 w-16 h-16 rounded-full border border-yellow-400/10" />

        <div className="relative z-10">
          <h3 className="font-bold text-lg md:text-xl mb-3 font-heading">Need Help?</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            Book your free 15-minute consultation and discuss your project directly with our experts.
          </p>
          <div className="space-y-3">
            <Link
              to="/faqs"
              className="flex items-center gap-3 bg-white hover:bg-white/90 rounded-lg px-4 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-4 h-4 text-white" />
              </div>
              See FAQ's
            </Link>
            <a
              href="tel:+610422207176"
              className="flex items-center gap-3 bg-white hover:bg-white/90 rounded-lg px-4 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-white" />
              </div>
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ServiceSidebar;
