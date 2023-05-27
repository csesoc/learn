import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import rehypePrismPlus from 'rehype-prism-plus'

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

export const ArticleType = defineDocumentType(() => ({
  name: 'ArticleType',
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
    },
    tags: {
      type: 'list',
      of: {
        type: 'string'
      },
      description: 'List of tags applied to the article',
      required: false
    }
  },
  computedFields
}))

export const CourseRevisionOffering = defineDocumentType(() => ({
  name: 'CourseRevisionOffering',
  filePathPattern: `course-revision/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description:
        'The title of the exercise set e.g. COMP1511 22T3 Revision Session',
      required: true
    },
    desc: {
      type: 'string',
      description:
        'A brief 1-2 sentence description of what this course revision contains',
      required: true
    },
    course: {
      type: 'string',
      description:
        'The course that the revision set relates to (COMP1511, COMP2521, ...)',
      required: true
    },
    offering: {
      type: 'string',
      description:
        'The offering of the course that the revision set is intended for (22T3, 23T1, ...)',
      required: true
    }
  },
  computedFields
}))

export const CourseRevisionExercise = defineDocumentType(() => ({
  name: 'CourseRevisionExercise',
  filePathPattern: `course-revision/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the exercise',
      required: true
    },
    desc: {
      type: 'string',
      description: 'One sentence that summarises the exercise objective.',
      required: true
    },
    class: {
      type: 'string',
      description:
        'The class the exercise relates to (COMP1511, COMP2521, etc)',
      required: true
    },
    difficulty: {
      type: 'number',
      description: 'The difficulty of the exercise (1=Easy, 2=Medium, 3=Hard)',
      required: true
    }
  },
  computedFields
}))

export const WorkshopsOffering = defineDocumentType(() => ({
  name: 'WorkshopsOffering',
  filePathPattern: `workshops/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description:
        'The title of the exercise set e.g. COMP2521 Fundamentals Workshop',
      required: true
    },
    desc: {
      type: 'string',
      description:
        'A brief 1-2 sentence description of what this workshop contains',
      required: true
    },
    course: {
      type: 'string',
      description:
        'The course that the revision set relates to (COMP1511, COMP2521, ...)',
      required: true
    },
    offering: {
      type: 'string',
      description:
        'The offering of the course that the revision set is intended for (22T3, 23T1, ...)',
      required: true
    }
  },
  computedFields
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [
    ArticleType,
    CourseRevisionOffering,
    CourseRevisionExercise,
    WorkshopsOffering
  ],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypeHighlight,
      rehypePrismPlus,
      rehypeAutolinkHeadings,
      rehypeSlug
    ]
  }
})
