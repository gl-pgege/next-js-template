# Docker Setup Files

This directory contains example files for setting up Prisma schemas in Docker.

## Structure

```
docker-setup/
├── config/
│   └── env.ts           # Database configuration
├── lib/
│   ├── prisma.ts        # Database clients
│   └── databases.ts     # Export clients
├── prisma/
│   └── mall-investment/
│       └── schema.prisma # Mall investment database schema
├── setup.sh             # Setup script
└── README.md            # This file
```

## How It Works

The `Dockerfile` copies these files into the container and runs `setup.sh`, which:

1. Copies Prisma schemas to `prisma/`
2. Copies configuration files to `config/` and `lib/`
3. Updates `package.json` with database scripts
4. Generates Prisma client

## Customizing

### To Add a Different Schema

1. Create a new directory: `docker-setup/prisma/my-schema/`
2. Add your `schema.prisma` file
3. Update `docker-setup/config/env.ts` with your database URL
4. Update `docker-setup/lib/prisma.ts` to create your client
5. Update `docker-setup/lib/databases.ts` to export your client
6. Update `docker-setup/setup.sh` to reference your schema

### To Add Multiple Schemas

Simply add more directories under `docker-setup/prisma/` and update the setup files accordingly.

## Testing Locally

You can test the setup files locally:

```bash
# Copy setup files
cp -r docker-setup/prisma/* prisma/
cp docker-setup/config/env.ts config/env.ts
cp docker-setup/lib/prisma.ts lib/prisma.ts
cp docker-setup/lib/databases.ts lib/databases.ts

# Generate client
yarn db:generate

# Run dev server
yarn dev
```

## Example: Mall Investment Schema

The included mall investment schema demonstrates:
- Complex multi-entity relationships
- Multiple enums for status and type fields
- Financial data modeling
- Risk assessment and analytics
- Temporal data tracking
- Index optimization for queries

Modify these files to match your application's needs.

