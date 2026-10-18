export interface TestimonialItem {
  label: string;
  quote: string;
  name?: string;
  role?: string;
  company?: string;
  avatar?: string;
  rating?: number;
  isVerified: boolean;
}

/**
 * Illustrative examples. No fabricated client names, companies, metrics or
 * ratings. Flip `isVerified` to true and fill in name/role/company once a
 * genuine, approved testimonial is available.
 */
export const testimonials: TestimonialItem[] = [
  {
    label: "01 — Reliability",
    quote:
      "Consistent warehouse operations and responsive coordination can make a significant difference to growing businesses.",
    isVerified: false,
  },
  {
    label: "02 — Flexibility",
    quote:
      "Flexible storage solutions make it easier to adapt as inventory volumes and business requirements change.",
    isVerified: false,
  },
  {
    label: "03 — Visibility",
    quote:
      "Clear inventory and dispatch processes give businesses greater confidence in their day-to-day operations.",
    isVerified: false,
  },
  {
    label: "04 — Operations",
    quote:
      "A dependable warehouse partner helps businesses focus on growth while keeping daily logistics organized.",
    isVerified: false,
  },
];
