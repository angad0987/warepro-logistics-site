import { BlogCard } from "@/components/blog/BlogCard";
import { Reveal } from "@/components/Reveal";
import type { BlogPost } from "@/data/blogPosts";

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <Reveal key={post.slug} delay={Math.min(index, 5) * 0.05} className="h-full">
          <BlogCard post={post} />
        </Reveal>
      ))}
    </div>
  );
}
