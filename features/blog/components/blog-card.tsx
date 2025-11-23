import { format } from "date-fns"
import type { BlogCardProps } from "../types/blog.types"

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="group rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
      <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
        {blog.publishedAt && (
          <time dateTime={blog.publishedAt.toISOString()}>
            {format(blog.publishedAt, "MMMM d, yyyy")}
          </time>
        )}
      </div>
      <h2 className="mt-3 text-2xl font-semibold text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-50 dark:group-hover:text-zinc-300">
        {blog.title}
      </h2>
      {blog.excerpt && (
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">{blog.excerpt}</p>
      )}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
          Read more →
        </span>
      </div>
    </article>
  )
}

