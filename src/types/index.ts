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

export interface BedroomOption {
  count: number;
  label: string;
}

export interface BathroomOption {
  count: number;
  label: string;
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
  icon: string;
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
  icon: string;
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
  icon: string;
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
}
