const dotenv = require('dotenv')
const algoliasearch = require('algoliasearch/lite')
const path = require('path')
const fs = require('fs')

try {
  dotenv.config()

  if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
    throw new Error('NEXT_PUBLIC_ALGOLIA_APP_ID is not defined')
  }

  if (!process.env.ALGOLIA_SEARCH_ADMIN_KEY) {
    throw new Error('ALGOLIA_SEARCH_ADMIN_KEY is not defined')
  }
} catch (error) {
  console.error(error)
  process.exit(1)
}

console.log('It works!')

const CONTENT_PATH = path.join(
  process.cwd(),
  '.contentlayer/generated/ArticleType'
)

const source = fs.readFileSync(path.join(CONTENT_PATH, '_index.json'), 'utf8')

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.ALGOLIA_SEARCH_ADMIN_KEY
)

const index = client.initIndex('articles')

const records = JSON.parse(source).map((article) => ({
  objectID: article._id,
  title: article.title,
  description: article.desc,
  author: article.author,
  tags: article.tags,
  slug: article.slug
}))

index
  .saveObjects(records)
  .then(({ objectIDs }) => {
    console.log(objectIDs)
  })
  .catch((error) => {
    console.error(error)
  })
