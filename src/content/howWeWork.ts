export const howWeWorkPage = {
  hero: {
    eyebrow: "How we work",
    headline: "A Clear Process. Complete Visibility.",
    steps: [
      { label: "Client", icon: "Users" as const },
      { label: "Inventory", icon: "Boxes" as const },
      { label: "Dispatch", icon: "Truck" as const },
    ],
    cta: "Get a Storage Quote",
    importantHeading: "Important to know",
    importantBody:
      "We do not provide a customer portal or real-time inventory tracking. We share <strong>regular MIS reports</strong> with accurate inventory, stock movement and order updates to keep you informed.",
  },
  journey: {
    headline: "Your Inventory Journey with",
    headlineHighlight: "CW",
    steps: [
      {
        num: "01",
        title: "Understand Requirements",
        desc: "We understand your business, products and warehousing needs.",
      },
      {
        num: "02",
        title: "SKU Setup",
        desc: "We create and configure your SKUs in our system for accurate tracking.",
      },
      {
        num: "03",
        title: "Receiving",
        desc: "Your inventory arrives and is checked, counted and recorded.",
      },
      {
        num: "04",
        title: "Putaway Storage",
        desc: "Inventory is stored in the right location for safety and easy access.",
      },
      {
        num: "05",
        title: "Order Process",
        desc: "Orders are received and prepared for picking as per priority.",
      },
      {
        num: "06",
        title: "Dispatch",
        desc: "Orders are packed, verified and shipped on time to your customers.",
      },
    ],
  },
  orderFlow: {
    eyebrow: "What happens behind every order?",
    headline: "A systematic flow that ensures every order moves right.",
    subheadline: "Every order follows a disciplined process with multiple quality checks.",
    steps: [
      { title: "Pick", desc: "Items are picked from the right location." },
      { title: "Verify", desc: "Each item is verified for accuracy and quality." },
      { title: "Pack", desc: "Orders are packed securely to prevent any damage." },
      { title: "Dispatch", desc: "Shipments are handed over to trusted shipping partners." },
    ],
  },
  mis: {
    eyebrow: "You stay informed",
    headline: "Clear. Consistent. Reliable. MIS reports you can count on.",
    paragraph:
      "We do not offer real-time tracking or a customer portal. Instead, we provide regular MIS reports with accurate inventory, stock movement and order updates.",
    features: [
      { label: "Regular MIS Reports", desc: "Inventory, stock summary, inward/outward and aging." },
      { label: "Scheduled Sharing", desc: "Reports shared on an agreed frequency." },
      { label: "One Point of Contact", desc: "Dedicated support for any queries or updates." },
    ],
    callout: "No real-time tracking. No customer portal. Just accurate data, shared consistently.",
  },
  dedicatedManager: {
    eyebrow: "Dedicated Key Accounts Manager",
    headline: "A dedicated partner. Always by your side.",
    checklist: [
      "One dedicated Key Accounts Manager assigned to your business.",
      "Round-the-clock support for all your queries and operational needs.",
      "Special focus for startups and new businesses to help you grow.",
    ],
    badge: "24/7",
  },
  controlPoints: {
    headline: "Control points built",
    headlineHighlight: "into the process",
    columns: [
      {
        title: "Receiving",
        items: [
          "Shipment check",
          "Quantity verification",
          "Quality inspection",
          "Inventory recorded",
        ],
      },
      {
        title: "Storage",
        items: ["Optimal location", "Safe handling", "Stock organization", "System updated"],
      },
      {
        title: "Picking",
        items: ["Accurate pick", "Location verified", "Item condition check", "Pick confirmation"],
      },
      {
        title: "Outbound",
        items: [
          "Pack verification",
          "Label & documentation",
          "Handover to carrier",
          "Tracking updated",
        ],
      },
    ],
  },
  whyTrust: {
    headline: "Why businesses trust",
    headlineHighlight: "CW",
    reasons: [
      {
        title: "Process",
        desc: "Structured workflows and standard operating procedures ensure accuracy, safety and consistency.",
        icon: "ShieldCheck" as const,
      },
      {
        title: "Visibility",
        desc: "Regular MIS reports and transparent communication so you always know where things stand.",
        icon: "Eye" as const,
      },
      {
        title: "Scale",
        desc: "Flexible space and resources that grow with your business needs.",
        icon: "TrendingUp" as const,
      },
    ],
  },
  cta: {
    headline: "Ready to simplify your warehousing?",
    subheadline:
      "Let's understand your requirements and design a reliable warehousing solution for your business.",
    button: "Get a Storage Quote",
    phone: "Let's Talk",
    phoneNumber: "+91 8427304006",
  },
};
