export interface HeroContent {
  badge: string;
  headline: string;
  headlineHighlight: string;
  subheadline: string;
  benefits: string[];
  ctaPrimary: string;
  ctaSecondary: string;
}

export const hero: HeroContent = {
  badge: "B2B Warehousing & 3PL Fulfillment",
  headline: "Warehouses designed to keep your ",
  headlineHighlight: "inventory safe and business moving.",
  subheadline:
    "CoreWarehousing runs the storage, inventory and fulfillment backbone behind ambitious B2B and D2C companies — reliably, and at any volume.",
  benefits: [
    "Pan-India warehousing footprint",
    "Real-time inventory visibility",
    "Seamless marketplace integrations",
    "Scalable capacity — no lock-in",
    "Dedicated B2B & 3PL specialists",
    "Same-day dispatch capability",
  ],
  ctaPrimary: "Get a Quote",
  ctaSecondary: "Explore Services",
};

export interface BrandStoryContent {
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  ctaPrimary: string;
  ctaSecondary: string;
}

export const brandStory: BrandStoryContent = {
  eyebrow: "Discover Our Story",
  headline: "Built by supply-chain operators, for growing brands.",
  paragraphs: [
    "We don't see warehousing just as a storage instead we see it as the backbone of every successful supply chain. Every pallet stored, every carton handled, and every shipment dispatched plays a vital role in keeping businesses moving forward.",
    "Core Warehousing was created to redefine how businesses experience warehousing. We believe storage is more than space. It's the foundation of an efficient supply chain. By combining trusted warehouse partnerships with standardized operations and smart inventory management, we help businesses grow with confidence.",
  ],
  ctaPrimary: "About Us",
  ctaSecondary: "Why Choose Us",
};

export interface ServicesOverviewContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
}

export const servicesOverview: ServicesOverviewContent = {
  eyebrow: "What we do",
  headline: "End-to-end logistics, under one roof.",
  subheadline: "Eight integrated services covering the full journey from inbound receipt to last-mile delivery.",
};

export interface PlatformsSectionContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
}

export const platformsSection: PlatformsSectionContent = {
  eyebrow: "Integrations",
  headline: "Plug into the platforms you already sell on.",
  subheadline: "Native marketplace integrations launching soon — seamless order flow and inventory sync, right out of the box.",
};

export interface TestimonialsSectionContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
}

export const testimonialsSection: TestimonialsSectionContent = {
  eyebrow: "Trusted by brands",
  headline: "Real results, coming soon.",
  subheadline:
    "We are collecting verified success stories from our partners. Check back shortly.",
};

export interface CTASectionContent {
  headline: string;
  subheadline: string;
  cta: string;
}

export const ctaSection: CTASectionContent = {
  headline: "Ready to simplify your warehousing?",
  subheadline: "Every business has unique storage and fulfillment needs. Tell us about yours and get a tailored solution.",
  cta: "Request Quote",
};

export interface QuickEnquiryContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  businessTypes: string[];
  buttonLabel: string;
  successMessage: string;
  errorApiMessage: string;
  errorNetworkMessage: string;
  submittingLabel: string;
  privacyNotice: string;
}

export const quickEnquiry: QuickEnquiryContent = {
  eyebrow: "Quick Enquiry",
  headline: "Get a callback or quick call us.",
  subheadline: "Tell us who you are — our team responds fast.",
  businessTypes: ["D2C / eCommerce Brand", "B2B Distributor", "Manufacturer", "Retailer", "3PL Partner", "Other"],
  buttonLabel: "Request Callback",
  successMessage: "Thank you! Your callback request has been submitted successfully. Our team will contact you shortly.",
  errorApiMessage: "Unable to submit your request. Please try again.",
  errorNetworkMessage: "Something went wrong. Please check your internet connection and try again.",
  submittingLabel: "Submitting...",
  privacyNotice: "By submitting, you agree to be contacted about your enquiry.",
};