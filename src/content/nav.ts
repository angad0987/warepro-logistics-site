export interface NavLink {
  to: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/why-choose-us", label: "Why Us" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export interface FooterColumn {
  title: string;
  links: { to: string; label: string }[];
}

export const footerCompanyLinks: FooterColumn = {
  title: "Company",
  links: [
    { to: "/about", label: "About Us" },
    { to: "/why-choose-us", label: "Why Choose Us" },
    { to: "/industries", label: "Industries" },
    { to: "/blog", label: "Blog" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ],
};

export const footerServicesLinks: FooterColumn = {
  title: "Services",
  links: [
    { to: "/services", label: "Warehousing" },
    { to: "/services", label: "Inventory Management" },
    { to: "/services", label: "B2B Fulfillment" },
    { to: "/services", label: "eCommerce Fulfillment" },
    { to: "/services", label: "Transportation" },
    { to: "/services", label: "Cross Docking" },
  ],
};

export const ctaLabel = "Get a Quote";

export const footerDescription = "Reliable, scalable, technology-driven logistics for growing brands.";

export const footerTagline = "Built for modern supply chains.";