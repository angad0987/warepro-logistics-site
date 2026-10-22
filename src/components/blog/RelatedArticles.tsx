import { BlogCard } from "@/components/blog/BlogCard";
import { Reveal } from "@/components/Reveal";
import { blogArticlePage } from "@/content/blog";
import type { BlogPost } from "@/data/blogPosts";
import { getRelatedPosts } from "@/lib/blog";

export function RelatedArticles({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post, 3);

  if (related.length === 0) return null;

  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="container-x">
        <h2 className="text-2xl font-bold text-navy font-heading md:text-3xl">
          {blogArticlePage.relatedTitle}
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((relatedPost, index) => (
            <Reveal key={relatedPost.slug} delay={Math.min(index, 5) * 0.05} className="h-full">
              <BlogCard post={relatedPost} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
