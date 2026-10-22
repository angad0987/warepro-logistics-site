import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { BlogCategoryFilter } from "@/components/blog/BlogCategoryFilter";
import { BlogEmptyState } from "@/components/blog/BlogEmptyState";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogHero } from "@/components/blog/BlogHero";
import { blogPage } from "@/content/blog";
import { blogCategories, blogPosts } from "@/data/blogPosts";
import { filterBlogPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(blogPage.allCategoriesLabel);

  const posts = useMemo(() => filterBlogPosts(blogPosts, { query, category }), [query, category]);

  return (
    <>
      <BlogHero query={query} onQueryChange={setQuery} />

      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <BlogCategoryFilter
              categories={blogCategories}
              activeCategory={category}
              onChange={setCategory}
              label={blogPage.filterLabel}
            />
            <p aria-live="polite" className="text-sm text-muted-foreground">
              {posts.length} {blogPage.resultCountLabel}
            </p>
          </div>

          <div className="mt-10">
            {posts.length === 0 ? (
              <BlogEmptyState
                title={blogPage.emptyHeadline}
                description={blogPage.emptyMessage}
                action={
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {blogPage.emptyCta}
                  </button>
                }
              />
            ) : (
              <BlogGrid posts={posts} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
