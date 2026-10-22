import { createFileRoute, Link } from "@tanstack/react-router";
import { FileQuestion } from "lucide-react";

import { BlogArticle } from "@/components/blog/BlogArticle";
import { BlogEmptyState } from "@/components/blog/BlogEmptyState";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { blogArticlePage } from "@/content/blog";
import { getBlogPostBySlug } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => getBlogPostBySlug(params.slug),
  head: ({ loaderData }) => {
    const post = loaderData;
    if (!post) {
      return {
        meta: [
          { title: "Article not found | CoreWarehousing" },
          { name: "description", content: blogArticlePage.notFoundMessage },
          { name: "robots", content: "noindex" },
        ],
        links: [{ rel: "canonical", href: "/blog" }],
      };
    }

    return {
      meta: [
        { title: `${post.title} | CoreWarehousing` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: `${post.title} | CoreWarehousing` },
        { property: "og:description", content: post.excerpt },
        { property: "og:url", content: `/blog/${post.slug}` },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const post = Route.useLoaderData();

  if (!post) {
    return (
      <section className="pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="container-x">
          <BlogEmptyState
            title={blogArticlePage.notFoundTitle}
            description={blogArticlePage.notFoundMessage}
            headingLevel={1}
            icon={<FileQuestion aria-hidden="true" className="h-6 w-6" />}
            action={
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {blogArticlePage.notFoundCta}
              </Link>
            }
          />
        </div>
      </section>
    );
  }

  return (
    <>
      <BlogArticle post={post} />
      <RelatedArticles post={post} />
    </>
  );
}
