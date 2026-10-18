import { Reveal } from "@/components/Reveal";
import { DynamicIcon } from "@/lib/DynamicIcon";
import { whyChooseUsValues, whyChooseUsValuesSection } from "@/content/why-choose-us";

export function ValueCardsSection() {
  return (
    <section className="relative bg-secondary/40 py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            {whyChooseUsValuesSection.eyebrow}
          </span>
          <div className="mt-5 flex items-center justify-center gap-4">
            <span className="hidden h-px flex-1 bg-border sm:block" />
            <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-navy font-heading sm:text-3xl md:text-4xl">
              {whyChooseUsValuesSection.heading}{" "}
              <span className="text-primary">{whyChooseUsValuesSection.headingHighlight}</span>
            </h2>
            <span className="hidden h-px flex-1 bg-border sm:block" />
          </div>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {whyChooseUsValuesSection.subheading}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {whyChooseUsValues.map((value, i) => (
            <Reveal key={value.id} delay={i * 0.05} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-elegant">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />

                <span className="grid h-16 w-16 place-items-center rounded-full gradient-primary text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-105">
                  <DynamicIcon name={value.icon} className="h-7 w-7" />
                </span>

                <span className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                  {value.category}
                </span>
                <h3 className="mt-2 text-lg font-bold uppercase text-navy font-heading">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
