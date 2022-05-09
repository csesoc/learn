// Adopted from with-mdx-remote example
// https://github.com/vercel/next.js/blob/canary/examples/with-mdx-remote/utils/mdxUtils.js

import fs from "fs";
import path from "path";

// Returns the path to a specific file.
export const POSTS_PATH = path.join(process.cwd(), "posts");

// Returns the list of all MDX files inside the POSTS_PATH directory.
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
