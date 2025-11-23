import { blogs } from "@/lib/databases"
import type { Blog } from "../types/blog.types"

export async function getPublishedBlogs(): Promise<Blog[]> {
  const blogPosts = await blogs.blog.findMany({
    where: {
      published: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
  })

  return blogPosts
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const blog = await blogs.blog.findUnique({
    where: {
      slug,
    },
  })

  return blog
}

export async function getAllBlogs(): Promise<Blog[]> {
  const blogPosts = await blogs.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  return blogPosts
}

