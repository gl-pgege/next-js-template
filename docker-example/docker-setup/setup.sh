#!/bin/bash
set -e

echo "Setting up mall-investment schema..."

# Copy Prisma schema
cp -r /docker-setup/prisma/* ./prisma/

# Copy configuration
cp /docker-setup/config/env.ts ./config/env.ts
cp /docker-setup/lib/prisma.ts ./lib/prisma.ts
cp /docker-setup/lib/databases.ts ./lib/databases.ts

# Update package.json with scripts
echo "Updating package.json scripts..."
npx json -I -f package.json \
  -e 'this.scripts["postinstall"]="yarn db:generate"' \
  -e 'this.scripts["db:generate"]="prisma generate --schema=./prisma/mall-investment/schema.prisma"' \
  -e 'this.scripts["db:push"]="prisma db push --schema=./prisma/mall-investment/schema.prisma"' \
  -e 'this.scripts["db:migrate"]="prisma migrate dev --schema=./prisma/mall-investment/schema.prisma"' \
  -e 'this.scripts["db:studio"]="prisma studio --schema=./prisma/mall-investment/schema.prisma"'

echo "Setup complete!"

