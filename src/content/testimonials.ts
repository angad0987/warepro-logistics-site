export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

/** Placeholder state — no fabricated client quotes or fake reviews. */
export const testimonials: TestimonialItem[] = [
  {
    name: "Coming Soon",
    role: "Verified Client Reviews",
    quote:
      "Client testimonials are being collected and verified. Once approved, they will appear here.",
  },
  {
    name: "Coming Soon",
    role: "Verified Client Reviews",
    quote:
      "We are gathering real success stories from our partners. Check back shortly for updates.",
  },
  {
    name: "Coming Soon",
    role: "Verified Client Reviews",
    quote:
      "No testimonials to display yet. This section will be updated with genuine client feedback soon.",
  },
];
