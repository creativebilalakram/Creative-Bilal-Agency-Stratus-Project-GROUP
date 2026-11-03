import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";
import SEO from "@/components/SEO";
import ServiceHero from "./ServiceHero";
import ServiceSidebar from "./ServiceSidebar";
import ServiceContentSection from "./ServiceContentSection";
import ServiceValueCards from "./ServiceValueCards";
import ServiceProcessSection from "./ServiceProcessSection";
import { ServicePageData } from "@/types/servicePageTypes";
import { useEffect } from "react";

interface Props {
  data: ServicePageData;
}

const ServicePageTemplate = ({ data }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-secondary">
      <SEO
        title={data.seoTitle || `${data.title} - Sydney Development Services`}
        description={data.seoDescription || data.description.slice(0, 155)}
        canonical={`/${data.slug}`}
      />
      <Header />

      <ServiceHero label="Our Services" title={data.title} />

      {/* Main Content: Sidebar + Content */}
      <section className="py-10 md:py-16 lg:py-20 bg-secondary">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            {/* Left - Sidebar (hidden on mobile) */}
            <div className="hidden lg:block lg:w-[280px] xl:w-[300px] flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <ServiceSidebar currentSlug={data.slug} />
              </div>
            </div>

            {/* Right - Content with Carousel */}
            <div className="flex-1 min-w-0">
              <ServiceContentSection
                images={data.heroSlides}
                description={data.description}
                bulletPoints={data.bulletPoints}
                bulletCategories={data.bulletCategories}
                valueCardsSubtitle={data.valueCardsSubtitle}
                valueCardsTitle={data.valueCardsTitle}
                valueCardsDescription={data.valueCardsDescription}
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceValueCards cards={data.valueCards} />

      <ServiceProcessSection
        subtitle={data.processSubtitle}
        title={data.processTitle}
        description={data.processDescription}
        steps={data.processSteps}
      />

      <CtaBanner
        variant="dark"
        sectionBg="white"
        title={data.contactCTA.title}
        description={data.contactCTA.subtitle || "Let's assess your site's potential before you commit - so you invest in the right project, not the wrong one."}
      />

      <ContactSection formPosition="left" />
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
