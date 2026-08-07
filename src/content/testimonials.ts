export interface TrustPillar {
  icon: string;
  title: string;
  detail: string;
}

/** Verifiable service commitments — no invented client quotes. */
export const trustPillars: TrustPillar[] = [
  {
    icon: "ShieldCheck",
    title: "Written SLAs on every account",
    detail:
      "Order cut-offs, dispatch windows and accuracy targets are agreed in writing before go-live, and reviewed with you every month.",
  },
  {
    icon: "ClipboardList",
    title: "Cycle-counted inventory",
    detail:
      "Scheduled cycle counts and reconciliation reports keep stock records aligned with what is physically on the racks.",
  },
  {
    icon: "Clock",
    title: "Same-day dispatch on in-cut-off orders",
    detail:
      "Orders received before the agreed cut-off are picked, packed and handed to the carrier the same working day.",
  },
  {
    icon: "PackageCheck",
    title: "Marketplace-compliant packing",
    detail:
      "Labelling, packaging and documentation prepared to Amazon, Flipkart, Meesho and D2C courier requirements.",
  },
];
