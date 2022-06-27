import Avatar from 'boring-avatars'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
// import { allArticles, Article } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
// import { useMDXComponent } from 'next-contentlayer/hooks'
import Head from 'next/head'
import Image from 'next/image'
import { Box } from 'components/Box'
import Callout from 'components/Callout'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { getPostBySlug, getAllPosts } from 'lib/api'
import markdownToHtml from 'lib/markdownToHtml'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'
import FileName from 'components/FileName'

const defaultComponents = { Image, Callout, FileName }
// Add any components used in MDX files here.
// Components here load dynamically if they're used.
// See https://github.com/tsriram/with-mdx-bundler for details.
const components = { ...defaultComponents }

export async function getStaticPaths() {
  const paths = getAllPosts(['slug'])

  return {
    paths: paths.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {

  const article = getPostBySlug(params.slug, [
    'slug',
    'title',
    'desc',
    'author',
    'content',
    'contentString'
  ])
  const content = await markdownToHtml(article.content || '')
  const contentString = await serialize(article.contentString, {
    scope: {},
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeCodeTitles, rehypeHighlight],
      format: 'mdx'
    },
    parseFrontmatter: false,
  })
  return {
    props: {
      article: {
        ...article,
        content,
        contentString
      },
    },
  }
}

function ArticleHeader({ article }: any) {
  return (
    <Flex css={{ flexDirection: 'column' }}>
      <Text size="label-md" css={{ color: '$slate11' }}>
        {article.date}
      </Text>
      <Text
        size="headline"
        css={{ color: '$slate12', fontWeight: '600', paddingTop: '$2' }}>
        {article.title}
      </Text>
      <Text size="title-sm" css={{ color: '$slate12', paddingTop: '$1' }}>
        {article.desc}
      </Text>
      <Flex
        css={{
          flexDirection: 'row',
          gap: '0.75rem',
          alignItems: 'center',
          paddingTop: '$5'
        }}>
        <Avatar
          size={28}
          name={article.author}
          variant="beam"
          colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
        />
        <Text
          size="label-md"
          css={{ color: '$slate12', display: 'flex', gap: '$2' }}>
          {article.author}
          <Text css={{ color: '$slate11' }}> ⸱ </Text>
        </Text>
      </Flex>
    </Flex>
  )
}

type Author = {
  name: string
  picture: string
}

type PostType = {
  slug: string
  title: string
  date: string
  desc: string
  author: Author
  content: string
  contentString: any
}
type Props = {
  article: PostType
}

const ArticleLayout = ({ article }: Props) => {

  return (
    <Flex css={{ justifyContent: 'center', paddingTop: '$6' }}>
      <Head>
        <title>{article.title}</title>
      </Head>
      <Box
        as="article"
        css={{
          width: '75%'
        }}>
        <ArticleHeader article={article} />
        <Box css={{ paddingTop: '$5' }}>
          <Text>
            {/* <MDXRemote {...article} components={components} /> */}
            <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
            <MDXRemote {...article.contentString} components={components} />
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}

export default ArticleLayout
