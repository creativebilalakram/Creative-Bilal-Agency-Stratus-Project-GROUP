import { LucideIcon } from "lucide-react";

export interface ServiceHeroSlide {
  image: string;
  alt: string;
}

export interface ServiceBulletPoint {
  text: string;
}

export interface ServiceBulletCategory {
  title: string;
  points: ServiceBulletPoint[];
}

export interface ServiceValueCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  num: string;
  title: string;
  description: string;
}

export interface ServiceContactCTA {
  title: string;
  highlight?: string;
  subtitle?: string;
  buttonText: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  subtitle: string;
  seoTitle?: string;
  seoDescription?: string;
  heroSlides: ServiceHeroSlide[];
  description: string;
  bulletPoints: ServiceBulletPoint[];
  bulletCategories?: ServiceBulletCategory[];
  valueCardsSubtitle: string;
  valueCardsTitle: string;
  valueCardsDescription: string;
  valueCards: ServiceValueCard[];
  processSubtitle: string;
  processTitle: string;
  processDescription: string;
  processSteps: ServiceProcessStep[];
  contactCTA: ServiceContactCTA;
}
