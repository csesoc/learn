#!/usr/bin/env bash
next build
node scripts/storkConfigBuilder.mjs
curl -O https://files.stork-search.net/releases/v1.5.0/stork-amazon-linux
chmod +x stork-amazon-linux
./stork-amazon-linux build --input stork-config.toml --output public/stork-index.st
