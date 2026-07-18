import { Link } from "@tanstack/react-router";
import { PackageCheck, Mail, Phone, MapPin, Globe, Send, Share2, Camera } from "lucide-react";

import { BRAND } from "@/lib/brand";
import { footerCompanyLinks, footerServicesLinks, footerDescription, footerTagline } from "@/content/nav";

export function Footer() {
  return (
    <footer className="gradient-dark text-white/80 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground">
              <PackageCheck className="h-5 w-5" />
            </span>
            <span className="font-heading text-lg font-bold text-white">Core<span className="text-primary">Warehousing</span></span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            {BRAND.tagline}. {footerDescription}
          </p>
          <div className="mt-6 flex gap-3">
            {[Globe, Send, Share2, Camera].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4">{footerCompanyLinks.title}</h4>
          <ul className="space-y-2 text-sm">
            {footerCompanyLinks.links.map((l) => (
              <li key={l.to + l.label}><Link to={l.to} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4">{footerServicesLinks.title}</h4>
          <ul className="space-y-2 text-sm">
            {footerServicesLinks.links.map((l) => (
              <li key={l.to + l.label}><Link to={l.to} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />{BRAND.address}</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary shrink-0" /><a href={BRAND.phoneHref} className="hover:text-white">{BRAND.phone}</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary shrink-0" /><a href={`mailto:${BRAND.email}`} className="hover:text-white">{BRAND.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/55">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>{footerTagline}</p>
        </div>
      </div>
    </footer>
  );
}