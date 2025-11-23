export type Blog = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  published: boolean
  publishedAt: Date | null
  createdAt: Date
  updatedAt: Date
}

export type BlogListProps = {
  blogs: Blog[]
}

export type BlogCardProps = {
  blog: Blog
}

