#!/bin/bash
echo "=== FORCING BUILD FROM WEBSITE DIRECTORY ONLY ==="
cd website || exit 1
echo "=== CURRENT DIRECTORY $(pwd) ==="
ls -la

# Remove any existing dist folder to ensure a clean build
echo "=== REMOVING EXISTING DIST FOLDER IF PRESENT ==="
rm -rf dist

echo "=== INSTALLING DEPENDENCIES ==="
npm install --no-fund --no-audit
# Alternative: pnpm install --no-frozen-lockfile

echo "=== BUILDING WEBSITE ==="
npm run build
# Alternative: pnpm build

echo "=== BUILD COMPLETED ==="
echo "=== CONTENTS OF DIST FOLDER ==="
ls -la dist