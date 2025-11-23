export const config = {
  app: {
    nodeEnv: "development" as const,
    isDevelopment: true,
    isProduction: false,
  },
  database: {
    blogs: "postgresql://postgres:postgres@localhost:5433/nextjs_dev?schema=public",
  },
} as const

