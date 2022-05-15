import Avatar from 'boring-avatars'
import { Box } from 'components/Box'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { allArticles, Article } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps() {
  const articles = allArticles.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { articles } }
}

function ArticleRow(article: Article) {
  return (
    <Flex css={{ flexDirection: 'column' }}>
      <Text size="label-md" css={{ color: '$slate11' }}>
        {format(parseISO(article.date), 'LLL d, yyy')} ⸱{' '}
        {article.readingTime.text}
      </Text>
      <Text
        size="title-md"
        css={{ color: '$slate12', fontWeight: '600', paddingTop: '$2' }}>
        <Link href={`/articles/${article.slug}`}>{article.title}</Link>
      </Text>
      <Text size="label-lg" css={{ color: '$slate12', paddingTop: '$1' }}>
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
        <Text size="label-md" css={{ color: '$slate12' }}>
          {article.author}
        </Text>
      </Flex>
    </Flex>
  )
}

// I'm tired, I didn't type this properly ok
const Articles: NextPage = ({ articles }: any) => {
  return (
    <Box>
      <Head>
        <title>Articles - CSESoc Learn</title>
        <meta name="description" content="Learn something new." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        as="main"
        css={{
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Text
          as="h1"
          size="display"
          css={{ color: '$slate12', fontWeight: '600', paddingTop: '$6' }}>
          Articles
        </Text>
        <Text
          as="span"
          size="title-sm"
          css={{ color: '$slate12', paddingTop: '$1' }}>
          Learn something new with our articles.
        </Text>

        <Flex
          css={{
            flexDirection: 'column',
            width: '100%',
            px: '$6',
            paddingTop: '$8',
            gap: '$7'
          }}>
          {articles.map((article: Article, index: number) => (
            <ArticleRow key={index} {...article} />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Articles
