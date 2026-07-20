// Central, strict type system for the Pristine Maid Co. site.
// Every icon reference is narrowed to `IconName` so a typo in /data is a
// compile error, never a silent runtime fallback.

export type IconName =
  | "ShieldCheck"
  | "BadgeDollarSign"
  | "Home"
  | "Star"
  | "Layers"
  | "Leaf"
  | "Building2"
  | "Flame"
  | "Refrigerator"
  | "Sun"
  | "TreePine"
  | "Ruler"
  | "Package"
  | "Shirt"
  | "Warehouse"
  | "PawPrint"
  | "Award"
  | "Clock"
  | "RotateCcw"
  | "BadgeCheck"
  | "Instagram"
  | "Facebook";

export type Tone = "brand" | "amber" | "green";

export interface BrandMetadata {
  name: string;
  tagline: string;
  licenseKey: string;
  insuranceCoverage: string;
  city: string;
  state: string;
}

export interface ContactCoordinates {
  phone: string;
  email: string;
  dispatchAddress: string;
  hours: string;
}

export interface ServiceArea {
  zipCode: string;
  neighborhood: string;
}

export type CleanFrequency = "one-time" | "weekly" | "bi-weekly" | "monthly";

export interface FrequencyOption {
  id: CleanFrequency;
  label: string;
  discount: number;
  description: string;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  icon: IconName;
  description: string;
}

export interface BaseRate {
  bedrooms: number;
  bathrooms: number;
  price: number;
}

export interface BookingRates {
  baseRates: BaseRate[];
  frequencies: FrequencyOption[];
  addOns: AddOn[];
}

export interface StaffMember {
  id: string;
  name: string;
  title: string;
  profilePhoto: string;
  rating: number;
  reviews: number;
  specialty: string;
  petFriendly: boolean;
  yearsExperience: number;
  bio: string;
}

export interface PromoState {
  enabled: boolean;
  discountPercent: number;
  promoCode: string;
  targetLink: string;
  bannerText: string;
}

export interface ServiceChecklistItem {
  task: string;
  included: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: IconName;
  checklist: ServiceChecklistItem[];
  startingPrice: number;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  highlight: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CredibilityStat {
  value: string;
  label: string;
  icon: IconName;
  tone: Tone;
}

export interface GuaranteePillar {
  id: string;
  icon: IconName;
  title: string;
  description: string;
}

export interface TeamBadge {
  id: string;
  icon: IconName;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  icon: IconName;
  label: string;
  href: string;
}

export interface CleaningConfig {
  brand: BrandMetadata;
  contact: ContactCoordinates;
  serviceAreas: ServiceArea[];
  bookingRates: BookingRates;
  staffDirectory: StaffMember[];
  promo: PromoState;
  services: ServiceCategory[];
  testimonials: Testimonial[];
  faq: FAQItem[];
  credibilityStats: CredibilityStat[];
  guaranteeePillars: GuaranteePillar[];
  teamBadges: TeamBadge[];
  footerLinks: FooterLink[];
  socials: SocialLink[];
}
