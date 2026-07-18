import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { navLinks, ctaLabel } from "@/content/nav";
import logoImg from "@/assets/logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-card-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-14 w-14 place-items-center rounded-full overflow-hidden">
            <img src={logoImg} alt="CoreWarehousing" className="h-14 w-14 object-cover" />
          </span>
          <span className={`font-heading text-xl font-bold tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            Core<span>Warehousing</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-all ${
                scrolled ? "text-foreground/80 hover:font-bold hover:underline" : "text-white/85 hover:font-bold hover:underline"
              }`}
              activeProps={{ className: scrolled ? "font-bold underline" : "text-white font-bold underline" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
          >
            {ctaLabel}
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className={`lg:hidden grid h-10 w-10 place-items-center rounded-lg border ${
            scrolled ? "border-border text-foreground" : "border-white/30 text-white"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container-x py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-foreground hover:font-bold hover:underline text-base font-medium"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                {ctaLabel}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}