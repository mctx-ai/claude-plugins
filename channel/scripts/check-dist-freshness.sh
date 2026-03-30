#!/usr/bin/env bash
set -euo pipefail

# CI STALENESS CHECK: Verify that dist/index.js is up-to-date with source
# This script rebuilds the distribution and checks if there are any uncommitted diffs.
# If dist is stale (has differences after rebuild), exit with error.

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
channel_dir="$(dirname "$script_dir")"

echo "Rebuilding dist/index.js..."
npm run build --prefix "$channel_dir"

echo "Checking for uncommitted changes in dist/index.js..."
if ! git diff --exit-code "$channel_dir/dist/index.js" > /dev/null 2>&1; then
  echo "dist/index.js is stale — rebuild and commit"
  exit 1
fi

echo "dist/index.js is fresh and up-to-date."
