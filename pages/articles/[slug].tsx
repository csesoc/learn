import Avatar from 'boring-avatars'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { allArticles, Article } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Head from 'next/head'
import Image from 'next/image'
import { Box } from 'components/Box'
import Callout from 'components/Callout'
import FileName from 'components/Filename'

const defaultComponents = { Image, Callout, FileName}
// Add any components used in MDX files here.
// Components here load dynamically if they're used.
// See https://github.com/tsriram/with-mdx-bundler for details.
const components = { ...defaultComponents }

export async function getStaticPaths() {
  const paths = allArticles.map((a) => ({ params: { slug: a.slug } }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: Article }) {
  const article = allArticles.find((article) => article.slug === params.slug)
  return {
    props: {
      article
    }
  }
}

function ArticleHeader({ article }: { article: Article }) {
  return (
    <Flex css={{ flexDirection: 'column' }}>
      <Text size="label-md" css={{ color: '$slate11' }}>
        {format(parseISO(article.date), 'LLL d, yyy')}
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
          <Text css={{ color: '$slate11' }}>{article.readingTime.text}</Text>
        </Text>
      </Flex>
    </Flex>
  )
}

const ArticleLayout = ({ article }: { article: Article }) => {
  const MDXContent = useMDXComponent(article.body.code)

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
            <MDXContent components={components} />
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}

export default ArticleLayout
