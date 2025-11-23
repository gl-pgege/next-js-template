import { getPublishedBlogs } from "@/features/blog/api/get-blogs"
import { BlogHeader } from "@/features/blog/components/blog-header"
import { BlogList } from "@/features/blog/components/blog-list"

export default async function Home() {
  const blogs = await getPublishedBlogs()

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <BlogHeader />
        <BlogList blogs={blogs} />
      </main>
    </div>
  )
}
