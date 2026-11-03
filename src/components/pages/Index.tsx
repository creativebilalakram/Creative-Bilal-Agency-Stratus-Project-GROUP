import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustCarousel from "@/components/TrustCarousel";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyStratusSection from "@/components/WhyStratusSection";
import CaseStudySection from "@/components/CaseStudySection";
import CtaBanner from "@/components/CtaBanner";
import ProcessSection from "@/components/ProcessSection";
import TrustBar from "@/components/TrustBar";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Stratus Project Group | Strategic Design & Construction Coordination Sydney"
        description="End-to-end development services in Sydney - feasibility studies, design documentation, DA/CDC approvals, engineering compliance, and construction coordination for residential projects."
        canonical="/"
      />
      <Header />
      <HeroSection />
      <TrustCarousel />
      <ServicesSection />
      <AboutSection />
      <WhyStratusSection />
      <CaseStudySection />
      <CtaBanner sectionBg="white" />
      <ProcessSection />
      <TrustBar />
      <TestimonialsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
