import { allArticles } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const defaultComponents = { Image }
// Add any components used in MDX files here.
// Components here load dynamically if they're used.
// See https://github.com/tsriram/with-mdx-bundler for details.
const components = { ...defaultComponents }

export async function getStaticPaths () {
  const paths = allArticles.map((a) => ({ params: { slug: a.slug } }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const post = allArticles.find((post) => post.slug === params.slug)
  return {
    props: {
      post
    }
  }
}

const PostLayout = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/">
            <a className="text-center text-sm font-bold uppercase text-blue-700">
              Home
            </a>
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          <div className="flex flex-row gap-2 justify-center">
            <time dateTime={post.date} className="text-sm text-slate-600">
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
            <p className="text-sm text-slate-600">|</p>
            <p className="text-sm text-slate-600">{post.readingTime.text}</p>
          </div>
        </div>
        <MDXContent components={components} />
      </article>
    </>
  )
}

export default PostLayout
