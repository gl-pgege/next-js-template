export const config = {
  app: {
    nodeEnv: "development" as const,
    isDevelopment: true,
    isProduction: false,
  },
  database: {
    // Add your database URLs here
    // Example: blogs: "postgresql://postgres:postgres@localhost:5432/blogs_db?schema=public",
  },
} as const

