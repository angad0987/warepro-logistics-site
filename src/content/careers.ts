/**
 * Careers content. Update job openings here — the UI reads from this file.
 * Add the real Google Form link to GOOGLE_FORM_URL when it is ready.
 */

export const GOOGLE_FORM_URL = ""; // e.g. "https://docs.google.com/forms/d/e/<form-id>/viewform"

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

/** Empty array renders the "No Open Positions Currently" state. */
export const jobOpenings: JobOpening[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    department: "Technology",
    location: "India",
    type: "Full-time",
    description:
      "Build and improve technology solutions that power modern warehousing and fulfillment operations.",
  },
  {
    id: "operations-executive",
    title: "Operations Executive",
    department: "Operations",
    location: "Bhiwandi, Maharashtra",
    type: "Full-time",
    description:
      "Run day-to-day inbound, storage and dispatch activity at the facility and keep SLAs on track.",
  },
  {
    id: "business-development",
    title: "Business Development Manager",
    department: "Business Development",
    location: "India",
    type: "Full-time",
    description:
      "Work with B2B and 3PL prospects, understand their supply chain needs and build long-term accounts.",
  },
];

export const careersPage = {
  eyebrow: "Careers",
  headline: "Work at CoreWarehousing",
  subheadline:
    "Join us in building smarter solutions for warehousing, fulfillment and distribution across India.",
  heroCta: "View Open Positions",
  heroSecondaryCta: "Apply Now",

  whyTitle: "Why Work at CW?",
  whyIntro:
    "We are building the operating layer for modern warehousing in India — and we do it with a small team that owns real outcomes.",
  why: [
    {
      icon: "Sparkles",
      title: "Innovate With Us",
      desc: "Be part of a team that rethinks how goods are stored, picked and delivered — with technology at the centre of every decision.",
    },
    {
      icon: "Target",
      title: "Own Your Work",
      desc: "Small teams, real ownership. You'll see the impact of your work on live operations within weeks, not quarters.",
    },
    {
      icon: "GraduationCap",
      title: "Grow With the Story",
      desc: "As CW scales into new facilities and categories, your role grows with it. We back people who want to learn fast.",
    },
  ],

  positionsTitle: "Open Positions",
  positionsIntro:
    "Explore our current opportunities and find a role where you can make an impact.",
  emptyTitle: "No Open Positions Currently",
  emptyMessage:
    "We don't have any open positions at the moment, but we're always interested in meeting talented people. Submit your profile below and we'll reach out when a suitable opportunity becomes available.",

  perksTitle: "Employee Benefits & Perks",
  perksIntro: "What you can expect when you join the CW team.",
  perks: [
    {
      icon: "GraduationCap",
      title: "Professional Development",
      desc: "Hands-on learning, mentorship and exposure to end-to-end supply chain operations.",
    },
    {
      icon: "Users",
      title: "Flexible Work Environment",
      desc: "A collaborative, low-bureaucracy culture that trusts you to deliver outcomes.",
    },
    {
      icon: "HeartPulse",
      title: "Health & Wellness",
      desc: "Support for your wellbeing so you can do your best work, sustainably.",
    },
    {
      icon: "DollarSign",
      title: "Competitive Compensation",
      desc: "Fair pay benchmarked to the market, with performance recognised as we grow.",
    },
  ],

  finalTitle: "Ready to Join CW?",
  finalText: "Send us your profile — we review every application that reaches us.",
  finalCta: "Apply Now",
};
