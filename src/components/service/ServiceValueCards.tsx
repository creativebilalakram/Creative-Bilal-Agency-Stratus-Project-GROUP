import { ServiceValueCard } from "@/types/servicePageTypes";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import SkeletonImage from "@/components/SkeletonImage";

interface Props {
  cards: ServiceValueCard[];
}

const ServiceValueCards = ({ cards }: Props) => {
  const ref = useStaggerReveal();

  return (
    <section
      className="relative section-padding overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0">
        <SkeletonImage
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          skeletonClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl p-5 md:p-8 text-left shadow-lg transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl"
              data-reveal
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-5 transition-all duration-400 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 group-hover:scale-105">
                <card.icon className="w-5 h-5 md:w-7 md:h-7 text-primary transition-all duration-400 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-sm md:text-lg mb-1.5 md:mb-3 font-heading text-foreground transition-colors duration-300 group-hover:text-primary">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceValueCards;
