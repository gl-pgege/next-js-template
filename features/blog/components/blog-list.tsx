import { BlogCard } from "./blog-card"
import type { BlogListProps } from "../types/blog.types"

export function BlogList({ blogs }: BlogListProps) {
  if (blogs.length === 0) {
    return (
      <div className="text-center">
        <p className="text-zinc-600 dark:text-zinc-400">No blog posts found.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

