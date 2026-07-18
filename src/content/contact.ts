export interface ContactPageContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  formTitle: string;
  formDescription: string;
  successTitle: string;
  successMessage: string;
  successRetry: string;
  submitLabel: string;
  privacyNote: string;
}

export const contactPage: ContactPageContent = {
  eyebrow: "Get in touch",
  headline: "Let's build a smarter supply chain — together.",
  subheadline: "Share your requirements and our team will respond within a few business hours with a tailored proposal.",
  formTitle: "Request a detailed quote",
  formDescription: "A short form built to qualify your B2B / 3PL requirement — the more you share, the sharper our proposal.",
  successTitle: "Thanks — we received your request!",
  successMessage: "Your email client should have opened with the details. We'll respond within a few business hours.",
  successRetry: "Submit another request",
  submitLabel: "Send Request",
  privacyNote: "Submitting opens your email client with the request pre-filled to ",
};

export const businessTypes: string[] = [
  "D2C / eCommerce Brand",
  "B2B Distributor / Wholesaler",
  "Manufacturer",
  "Retailer",
  "3PL Partner",
  "Other",
];

export const volumeOptions: string[] = [
  "Less than 500 orders / month",
  "500 – 2,000 orders / month",
  "2,000 – 10,000 orders / month",
  "10,000 – 50,000 orders / month",
  "50,000+ orders / month",
  "Not sure — need consultation",
];

export interface ContactFormLabels {
  name: string;
  namePlaceholder: string;
  company: string;
  companyPlaceholder: string;
  businessType: string;
  businessTypePlaceholder: string;
  volume: string;
  volumePlaceholder: string;
  warehouseNeeds: string;
  warehouseNeedsPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export const formLabels: ContactFormLabels = {
  name: "Name",
  namePlaceholder: "Your full name",
  company: "Company Name",
  companyPlaceholder: "Your company",
  businessType: "Business Type",
  businessTypePlaceholder: "Select business type",
  volume: "Monthly Order / Inventory Volume",
  volumePlaceholder: "Select volume range",
  warehouseNeeds: "Warehouse Needs",
  warehouseNeedsPlaceholder: "Select requirement",
  phone: "Contact Number",
  phonePlaceholder: "+91 98765 43210",
  email: "Email",
  emailPlaceholder: "you@company.com",
  messageLabel: "Anything else? (optional)",
  messagePlaceholder: "Tell us about your SKUs, geographies, timelines or special requirements...",
};

export interface ContactInfoCards {
  headOffice: string;
  phone: string;
  email: string;
  businessHours: string;
  businessHoursDetail: string;
  whatsappHeadline: string;
  whatsappSubtext: string;
}

export const contactInfoCards: ContactInfoCards = {
  headOffice: "Head Office",
  phone: "Phone",
  email: "Email",
  businessHours: "Business Hours",
  businessHoursDetail: "Mon – Sat: 9:00 AM – 7:00 PM\nSun: Closed (24/7 Ops on request)",
  whatsappHeadline: "Chat on WhatsApp",
  whatsappSubtext: "Fast replies during business hours",
};

export const warehouseNeeds: string[] = [
  "Shared warehousing",
  "Dedicated warehousing",
  "eCommerce fulfillment",
  "B2B / bulk fulfillment",
  "Cross-docking",
  "Reverse logistics",
  "Packaging & kitting",
  "Multiple / not sure yet",
];