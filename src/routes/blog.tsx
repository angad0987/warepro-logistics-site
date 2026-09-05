import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { blogPage } from "@/content/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Resources | CoreWarehousing" },
      {
        name: "description",
        content:
          "Insights on warehousing, 3PL fulfillment, inventory management and modern supply chain — from the CoreWarehousing team.",
      },
      { property: "og:title", content: "Blog & Resources | CoreWarehousing" },
      { property: "og:description", content: "Practical logistics content for growing brands." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

// Placeholder posts — replace when real content is ready
const posts: { title: string; excerpt: string; date: string; tag: string }[] = [];

function Blog() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_50%_30%,oklch(0.85_0.18_92_/_0.4),transparent_50%)]" />
        <div className="container-x relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {blogPage.eyebrow}
            </span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight font-heading">
              {blogPage.headline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed">
              {blogPage.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          {posts.length === 0 ? (
            <Reveal>
              <div className="rounded-3xl border border-dashed border-border bg-card p-12 md:p-16 text-center shadow-card-soft">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-glow">
                  <Calendar className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-2xl md:text-3xl font-bold text-navy font-heading">
                  {blogPage.emptyHeadline}
                </h2>
                <p className="mt-3 max-w-xl mx-auto text-muted-foreground">
                  {blogPage.emptyMessage}
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant"
                >
                  {blogPage.emptyCta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {posts.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.05}>
                  <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-card-soft hover:shadow-elegant transition-shadow">
                    <div className="text-xs font-semibold text-primary">{p.tag}</div>
                    <h3 className="mt-3 text-lg font-bold text-navy font-heading">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                    <div className="mt-4 text-xs text-muted-foreground">{p.date}</div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
