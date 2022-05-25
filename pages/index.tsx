import Avatar from 'boring-avatars'
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { Card } from 'components/Card'
import { allArticles, Article } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'phosphor-react'
import { DiscordLogo, FacebookLogo, InstagramLogo } from 'phosphor-react'

export async function getStaticProps() {
  const articles = allArticles.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { articles } }
}

function ArticleCard(article: Article) {
  return (
    <Card>
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
    </Card>
  )
}

const Home: NextPage = ({ articles }: any) => {
  return (
    <Box>
      <Head>
        <title>CSESoc Learn</title>
        <meta
          name="description"
          content="Where your curiosity comes to wander"
        />
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
          Where your curiosity comes to wander
        </Text>
        <Text
          as="span"
          size="title-sm"
          css={{ color: '$slate12', paddingTop: '$1' }}>
          From articles on new technologies to sample projects, your learning
          outside the classroom starts here.
        </Text>
        <Link href="/articles">
          <Button size="default" css={{ marginTop: '$6', cursor: 'pointer' }}>
            Learn something new
            <ArrowRight weight="bold" />
          </Button>
        </Link>
        <Text size="headline" css={{ fontWeight: 600, paddingTop: '$8' }}>
          See what&apos;s new
        </Text>
        <Flex
          css={{
            px: '$6',
            paddingTop: '$8',
            gap: '$7'
          }}>
          {articles.map((article: Article, index: number) => (
            <ArticleCard key={index} {...article} />
          ))}
        </Flex>

        <Text size="headline" css={{ fontWeight: 600, paddingTop: '$8' }}>
          Join the CSESoc community
        </Text>
        <Text
          as="span"
          size="title-sm"
          css={{ color: '$slate12', paddingTop: '$1' }}>
          Make friends with like-minded students and stay up-to-date with events.
        </Text>
        <Flex
          css={{
            px: '$6',
            paddingTop: '$8',
            gap: '$7'
          }}>
          <Card css={{ backgroundColor: '$slate3' }}> {/* slateDark3 doesn't work */}
            <Text size="title-md" css={{ fontWeight: '600', padding: '$2' }}>
              Psst ... you might be our next creator.
            </Text>
            <Text css={{ padding: '$2' }} >
              Passionate about a technical topic and want to create content? Any skill levels welcome - learn more below!
            </Text>
            <Link href="/contribute">
              <Button size="default" css={{
                marginTop: '$6',
                cursor: 'pointer',
                backgroundColor: '$green6',
                '&:hover': { backgroundColor: '$green7'},
              }}>
                Contribute
                <ArrowRight weight="bold" />
              </Button>
            </Link>
          </Card>
          <Card>
            <Link href="https://cseso.cc/discord/">
              <Button size="default" css={{
                cursor: 'pointer',
                backgroundColor: '$indigo4',
                '&:hover': { backgroundColor: '$indigo5'}
              }}>
                <Flex css={{ py: '$3', pl: '$2', pr: '$1', color: '$indigo10' }}>
                  <DiscordLogo weight="fill" size={36} />
                </Flex>
                <Text size="title-md" css={{ fontWeight: '600' }}>
                  Discord
                </Text>
                <Flex css={{ flex: 1, padding: '$3', justifyContent: 'flex-end' }}>
                  <ArrowRight weight="bold" size={32} />
                </Flex>
              </Button>
            </Link>
            <Link href="https://www.facebook.com/csesoc/">
              <Button size="default" css={{
                marginTop: '$6',
                cursor: 'pointer',
                backgroundColor: '$blue4',
                '&:hover': { backgroundColor: '$blue5'}
              }}>
                <Flex css={{ py: '$3', pl: '$2', pr: '$1', color: '$blue10' }}>
                  <FacebookLogo weight="fill" size={36} />
                </Flex>
                <Text size="title-md" css={{ fontWeight: '600' }}>
                  Facebook
                </Text>
                <Flex css={{ flex: 1, padding: '$3', justifyContent: 'flex-end' }}>
                  <ArrowRight weight="bold" size={32} />
                </Flex>
              </Button>
            </Link>
            <Link href="https://www.instagram.com/csesoc_unsw/">
              <Button size="default" css={{
                marginTop: '$6',
                cursor: 'pointer',
                backgroundColor: '$pink4',
                '&:hover': { backgroundColor: '$pink5'}
              }}>
                <Flex css={{ py: '$3', pl: '$2', pr: '$1', color: '$pink10' }}>
                  <InstagramLogo weight="fill" size={36} />
                </Flex>
                <Text size="title-md" css={{ fontWeight: '600' }}>
                  Instagram
                </Text>
                <Flex css={{ flex: 1, padding: '$3', justifyContent: 'flex-end' }}>
                  <ArrowRight weight="bold" size={32} />
                </Flex>
              </Button>
            </Link>
          </Card>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Home
