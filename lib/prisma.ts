import { PrismaClient as BlogsClient } from './generated/prisma-blogs'
import { config } from '@/config/env'

export const blogsDb = new BlogsClient({
  datasources: {
    db: { url: config.database.blogs },
  },
})

