export const config = {
  app: {
    nodeEnv: "development" as const,
    isDevelopment: true,
    isProduction: false,
  },
  database: {
    mallInvestment: "postgresql://postgres:_Z%5BarMlF2%2Aay_UMD6bW4Uoq0Yj%24%5D@fluid-ui-sample-mall-db.cg5rull0xshp.us-east-1.rds.amazonaws.com:5432/postgres",
  },
} as const

