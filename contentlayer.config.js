import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'

const computedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, '')
  }
}

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `articles/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the article',
      required: true
    },
    date: {
      type: 'date',
      description: 'The date of the article',
      required: true
    }
  },
  computedFields
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Article]
})
