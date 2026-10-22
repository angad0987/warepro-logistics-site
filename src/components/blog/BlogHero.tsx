import { motion } from "framer-motion";

import { BlogSearch } from "@/components/blog/BlogSearch";
import { blogPage } from "@/content/blog";

interface BlogHeroProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export function BlogHero({ query, onQueryChange }: BlogHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 gradient-dark text-white overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10"
        >
          <BlogSearch value={query} onChange={onQueryChange} />
        </motion.div>
      </div>
    </section>
  );
}
