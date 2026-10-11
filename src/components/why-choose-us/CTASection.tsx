import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { whyChooseUsCta } from "@/content/why-choose-us";

export function CTASection() {
  return (
    <section className="bg-white pb-24 md:pb-32">
      <div className="container-x">
        <Reveal className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            {whyChooseUsCta.eyebrow}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-navy font-heading leading-[1.12] text-balance md:text-4xl">
            {whyChooseUsCta.heading}
          </h2>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full gradient-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-elegant transition-transform duration-300 hover:scale-[1.03] md:text-base"
            >
              {whyChooseUsCta.button}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
