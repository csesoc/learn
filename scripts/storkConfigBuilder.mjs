// Builds Stork configuration file dynamically.

import toml from '@iarna/toml'
import fs from 'fs'
import { globby } from 'globby'
import matter from 'gray-matter'

const CONTENT_PATH = 'data'
const URL_PREFIX = '/'
const CONFIG_NAME = 'stork-config'

let contentPaths = await globby([`./${CONTENT_PATH}/**/*.mdx`])

const contentTitles = contentPaths.map((path) => {
  const source = fs.readFileSync(path)
  // Parse MDX frontmatter
  const { content, data } = matter(source)
  return data.title
})

// Strip base directory from paths
contentPaths = contentPaths.map((p) => p.split('/')[2] + '/' + p.split('/')[3])

const contentURLs = contentPaths.map((p) => {
  const path = p.split('.')[0]

  return path
})

const indexData = contentPaths.map((filePath, i) => ({
  path: filePath,
  url: contentURLs[i],
  title: contentTitles[i],
  filetype: 'Markdown'
}))

const storkConfig = {
  input: {
    base_directory: CONTENT_PATH,
    url_prefix: URL_PREFIX,
    // Frontmatter will be parsed otherwise
    frontmatter_handling: 'Omit',
    files: indexData
  }
}

const tomlConfig = toml.stringify(storkConfig)

try {
  fs.writeFileSync(`./${CONFIG_NAME}.toml`, tomlConfig)
  console.log(
    '\x1b[32mSuccess: \x1b[0mStork configuration file built successfully! '
  )
} catch (err) {
  console.error(err)
}
