# Docker Example

This directory contains an **example** Dockerfile for using this template in a containerized environment.

**These files are NOT part of the main application** - they're here as a reference for deployment.

## Structure

```
docker-example/
├── Dockerfile           # Example Dockerfile
├── .dockerignore       # Docker ignore patterns
├── docker-setup/       # Setup files to copy into container
│   ├── config/
│   │   └── env.ts      # Database configuration
│   ├── lib/
│   │   ├── prisma.ts   # Database clients
│   │   └── databases.ts # Export clients
│   ├── prisma/
│   │   └── blogs/
│   │       └── schema.prisma # Example schema
│   └── setup.sh        # Setup script
└── README.md           # This file
```

## How to Use

### 1. Copy to Your Project

When you want to deploy, copy the Dockerfile to your own project:

```bash
# Copy the Dockerfile to your deployment repo
cp docker-example/Dockerfile /path/to/your/deployment/repo/

# Customize docker-setup/ files for your schemas
cp -r docker-example/docker-setup /path/to/your/deployment/repo/
```

### 2. Customize Setup Files

Edit `docker-setup/` files to match your needs:

**Add your schema:**
```bash
# Replace or add to docker-setup/prisma/
docker-setup/prisma/
├── blogs/schema.prisma     # Example included
├── users/schema.prisma     # Add your own
└── analytics/schema.prisma # Add your own
```

**Update configuration:**
```typescript
// docker-setup/config/env.ts
export const config = {
  database: {
    blogs: "postgresql://...",
    users: "postgresql://...",
    analytics: "postgresql://...",
  },
}
```

**Update clients:**
```typescript
// docker-setup/lib/prisma.ts
import { PrismaClient as BlogsClient } from './generated/prisma-blogs'
import { PrismaClient as UsersClient } from './generated/prisma-users'
import { config } from '@/config/env'

export const blogsDb = new BlogsClient({
  datasources: { db: { url: config.database.blogs } }
})

export const usersDb = new UsersClient({
  datasources: { db: { url: config.database.users } }
})
```

**Update exports:**
```typescript
// docker-setup/lib/databases.ts
export { blogsDb as blogs, usersDb as users } from './prisma'
```

**Update setup script:**
```bash
# docker-setup/setup.sh
# Update the generate commands to include all schemas
```

### 3. Build and Run

```bash
docker build -t my-app .
docker run -p 3000:3000 my-app
```

## What the Dockerfile Does

1. Clones this template repository
2. Installs dependencies
3. Copies `docker-setup/` files into the container
4. Runs `setup.sh` to configure schemas and clients
5. Generates Prisma clients
6. Builds the Next.js application
7. Starts the production server

## Example: Blog Schema

The included blog schema (`docker-setup/prisma/blogs/`) shows:
- How to structure a schema file
- Example models (User, Blog)
- How to configure the database client
- How to export for use in features

## Customizing for Production

When deploying to production:

1. **Update database URLs** in `docker-setup/config/env.ts`
2. **Add your schemas** to `docker-setup/prisma/`
3. **Update client configurations** in `docker-setup/lib/`
4. **Modify setup.sh** to reference your schemas
5. **Build and deploy** your Docker image

## Note

This is an **example** for reference. You can:
- Use it as-is for the blog example
- Customize it for your specific schemas
- Use it as a template for your own deployment process
- Ignore it entirely and deploy differently

The core Next.js template works independently of these Docker files.

