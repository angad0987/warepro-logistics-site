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
  headline: "Careers at CW",
  subheadline:
    "Join us in building smarter solutions for warehousing, fulfillment, and distribution.",
  heroCta: "View Open Positions",
  whyTitle: "Why Join CW?",
  why: [
    {
      icon: "GraduationCap",
      title: "Growth & Learning",
      desc: "Learn, experiment, and grow while working on real-world problems.",
    },
    {
      icon: "Target",
      title: "Meaningful Ownership",
      desc: "Take ownership of your work and contribute directly to the growth of CW.",
    },
    {
      icon: "Boxes",
      title: "Build Real Solutions",
      desc: "Work on technology and solutions that improve real-world warehousing and fulfillment operations.",
    },
  ],
  positionsTitle: "Open Positions",
  positionsIntro:
    "Explore our current opportunities and find a role where you can make an impact.",
  emptyTitle: "No Open Positions Currently",
  emptyMessage:
    "We don't have any open positions at the moment, but we're always interested in meeting talented people. Submit your profile below and we'll reach out when a suitable opportunity becomes available.",
  generalTitle: "Don't See a Suitable Role?",
  generalText:
    "We're always interested in connecting with talented people. Submit your details and resume, and we'll contact you when a suitable opportunity becomes available.",
  generalCta: "Submit Your Application",
  finalTitle: "Ready to Join CW?",
  finalText: "Take the next step and explore opportunities with our team.",
  finalCta: "Apply Now",
};
