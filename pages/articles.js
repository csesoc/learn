import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allArticles } from 'contentlayer/generated'
import { Button } from '../components/Button'
import Logo from '../components/Logo'
import { VersionBadge } from '../components/VersionBadge'

export async function getStaticProps () {
  const posts = allArticles.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

function PostCard (post) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <h2 className="text-lg">
        <Link href={`/articles/${post.slug}`}>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
      <p className="block text-sm text-slate-600">{post.desc}</p>
      <div className="flex flex-row items-center justify-center gap-2 pt-2 text-sm text-slate-700">
        <p>{post.author}</p>
        <p>{post.readingTime.text}</p>
        <p>{post.wordCount} words</p>
      </div>
      <Button size="default">Test</Button>
      <Button size="large">Big Discord Energy</Button>
      <Logo />
    </div>
  )
}

export default function Home ({ posts }) {
  return (
    <div className="max-w-2xl py-16 mx-auto text-center">
      <Head>
        <title>Contentlayer Blog Example</title>
      </Head>
      <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
