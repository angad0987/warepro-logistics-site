import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { BlogContentBlock, BlogPost } from "@/data/blogPosts";
import { blogArticlePage, blogPage } from "@/content/blog";
import { formatBlogDate } from "@/lib/blog";

function renderBlock(block: BlogContentBlock) {
  switch (block.type) {
    case "heading": {
      const className =
        block.level === 3
          ? "mt-8 text-xl font-bold text-navy font-heading md:text-2xl"
          : "mt-12 text-2xl font-bold text-navy font-heading md:text-3xl";
      return block.level === 3 ? (
        <h3 className={className}>{block.text}</h3>
      ) : (
        <h2 className={className}>{block.text}</h2>
      );
    }
    case "list":
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <aside className="mt-8 rounded-2xl border border-primary/25 bg-primary/5 p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-navy">{block.title}</p>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">{block.text}</p>
        </aside>
      );
    default:
      return (
        <p className="mt-5 text-base leading-[1.8] text-muted-foreground md:text-lg">
          {block.text}
        </p>
      );
  }
}

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article>
      <header className="relative pt-28 pb-32 md:pt-40 md:pb-40 gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_50%_20%,oklch(0.85_0.18_92_/_0.35),transparent_55%)]" />
        <div className="container-x relative">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            {blogArticlePage.backToBlog}
          </Link>

          <div className="mt-8 max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {blogPage.eyebrow}
            </span>
            <span className="mt-5 inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {post.category}
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight font-heading md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/70">
              <span>{formatBlogDate(post.publishedAt)}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container-x relative -mt-20 md:-mt-28">
        <img
          src={post.image}
          alt={post.imageAlt}
          width={post.imageWidth}
          height={post.imageHeight}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="aspect-[16/9] w-full rounded-3xl border border-border bg-card object-cover shadow-elegant"
        />
      </div>

      <div className="py-16 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            {post.content.map((block, index) => (
              <div key={index}>{renderBlock(block)}</div>
            ))}

            <div className="mt-14 rounded-3xl border border-primary/25 bg-primary/5 p-8 text-center md:p-10">
              <h2 className="text-xl font-bold text-navy font-heading md:text-2xl">
                {blogArticlePage.ctaTitle}
              </h2>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {blogArticlePage.ctaLabel}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
