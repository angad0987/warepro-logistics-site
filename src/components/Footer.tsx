import { Link } from "@tanstack/react-router";
import { PackageCheck, Mail, Phone, MapPin, Globe, Send, Share2, Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="gradient-dark text-white/80 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground">
              <PackageCheck className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold text-white">WarePro<span className="text-primary-glow">.</span></span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Smart warehousing, inventory, and distribution solutions trusted by ambitious supply chains.
          </p>
          <div className="mt-6 flex gap-3">
            {[Globe, Send, Share2, Camera].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>General Warehousing</li>
            <li>Cold Storage</li>
            <li>Transportation</li>
            <li>E-commerce Fulfillment</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" />2100 Logistics Park Blvd, Dallas, TX</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary-glow shrink-0" />+1 (555) 010-2200</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary-glow shrink-0" />hello@warepro.co</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/55">
          <p>© {new Date().getFullYear()} WarePro Logistics. All rights reserved.</p>
          <p>Built for modern supply chains.</p>
        </div>
      </div>
    </footer>
  );
}
