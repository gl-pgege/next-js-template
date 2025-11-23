import { PrismaClient as MallInvestmentClient } from './generated/prisma-mall-investment'
import { config } from '@/config/env'

export const mallInvestmentDb = new MallInvestmentClient({
  datasources: {
    db: { url: config.database.mallInvestment },
  },
})

