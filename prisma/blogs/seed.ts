import { PrismaClient } from '../../lib/generated/prisma-blogs'

const prisma = new PrismaClient()

async function main() {
  const blogs = [
    {
      title: 'Getting Started with Next.js',
      slug: 'getting-started-with-nextjs',
      excerpt: 'Learn the basics of Next.js and build your first application.',
      content: `Next.js is a powerful React framework that enables you to build full-stack web applications. It provides features like server-side rendering, static site generation, and API routes out of the box.

In this guide, we'll explore the fundamentals of Next.js and walk through creating your first application. You'll learn about the App Router, React Server Components, and how to leverage Next.js features to build modern web applications.`,
      published: true,
      publishedAt: new Date('2024-01-15'),
    },
    {
      title: 'Understanding Prisma ORM',
      slug: 'understanding-prisma-orm',
      excerpt: 'A comprehensive guide to using Prisma as your database ORM.',
      content: `Prisma is a next-generation ORM that makes working with databases easy and type-safe. It provides a clean and intuitive API for querying your database, along with powerful migration tools.

With Prisma, you can define your database schema using a declarative syntax, generate type-safe database clients, and manage migrations with confidence. This post will cover everything you need to know to get started with Prisma.`,
      published: true,
      publishedAt: new Date('2024-02-01'),
    },
    {
      title: 'Building Modern UIs with Tailwind CSS',
      slug: 'building-modern-uis-with-tailwind',
      excerpt: 'Discover how to create beautiful, responsive designs with Tailwind CSS.',
      content: `Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. Instead of writing custom CSS, you compose your designs using pre-built utility classes.

This approach leads to faster development, smaller CSS bundles, and more maintainable code. In this article, we'll explore best practices for using Tailwind CSS in your projects.`,
      published: true,
      publishedAt: new Date('2024-02-20'),
    },
    {
      title: 'TypeScript Best Practices',
      slug: 'typescript-best-practices',
      excerpt: 'Level up your TypeScript skills with these essential best practices.',
      content: `TypeScript has become the de facto standard for building large-scale JavaScript applications. It provides static typing, better IDE support, and catches errors at compile time.

In this post, we'll cover best practices for writing clean, maintainable TypeScript code. From proper type definitions to advanced patterns, you'll learn how to make the most of TypeScript's powerful type system.`,
      published: true,
      publishedAt: new Date('2024-03-05'),
    },
    {
      title: 'Server Components vs Client Components',
      slug: 'server-vs-client-components',
      excerpt: 'Understanding when to use Server Components and Client Components in Next.js.',
      content: `React Server Components represent a paradigm shift in how we build React applications. They allow you to render components on the server, reducing the JavaScript bundle sent to the client.

But when should you use Server Components vs Client Components? This guide will help you understand the differences and make the right choice for your use case.`,
      published: true,
      publishedAt: new Date('2024-03-15'),
    },
    {
      title: 'Advanced Database Patterns with Prisma',
      slug: 'advanced-database-patterns-prisma',
      excerpt: 'Explore advanced patterns for working with Prisma in production applications.',
      content: `Once you've mastered the basics of Prisma, it's time to explore more advanced patterns. This includes handling complex queries, optimizing performance, and managing database connections in serverless environments.

We'll cover topics like connection pooling, query optimization, and how to structure your data access layer for maximum flexibility and maintainability.`,
      published: false,
      publishedAt: null,
    },
  ]

  console.log('Seeding database...')

  for (const blog of blogs) {
    await prisma.blog.upsert({
      where: { slug: blog.slug },
      update: blog,
      create: blog,
    })
    console.log(`Created/Updated blog: ${blog.title}`)
  }

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

