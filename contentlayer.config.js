import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'

const computedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
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
    desc: {
      type: 'string',
      description: 'One sentence that summarises the article objective.',
      required: true
    },
    author: {
      type: 'string',
      description: 'The author of the article',
      required: true
    },
    date: {
      type: 'date',
      description: 'The date of the article',
      required: true
    },
    coverPhoto: {
      type: 'string',
      description:
        'A cover photo that appears at the top of the article and in meta images',
      required: false
    }
  },
  computedFields
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypeHighlight,
      rehypeAutolinkHeadings,
      rehypeSlug,
      rehypePrism
    ]
  }
})
