import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'

import { allArticles, Article } from 'contentlayer/generated'
import { Card } from 'components/Card'
import Image from 'next/image'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({ articles }) => {
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
        <Text
          size="headline"
          css={{ fontWeight: 600, paddingTop: '$8', paddingBottom: '$6' }}>
          See what&apos;s new
        </Text>
        <Flex
          as="section"
          css={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            overflowX: 'scroll'
          }}>
          {articles?.map((article) => (
            <Link href={`/articles/${article.slug}`} key={article.slug}>
              <Card
                css={{
                  overflow: 'hidden',
                  marginRight: '$8'
                }}>
                {article.coverPhoto ? (
                  <Box
                    css={{
                      position: 'relative',
                      width: '100%',
                      height: '50%',
                      marginBottom: '$3'
                    }}>
                    <Image
                      src={article.coverPhoto}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                ) : (
                  <Flex
                    justify="center"
                    align="center"
                    css={{
                      position: 'relative',
                      width: '100%',
                      height: '50%',
                      marginBottom: '$3',
                      backgroundColor: '$blue10'
                    }}>
                    <Text
                      size="title-sm"
                      css={{
                        color: '$slate1'
                      }}>
                      :D
                    </Text>
                  </Flex>
                )}
                <Box
                  css={{
                    padding: '$2'
                  }}>
                  <Text
                    as="h3"
                    size="label-md"
                    css={{
                      marginBottom: '$1',
                      color: '$slate10'
                    }}>
                    {new Date(article.date).toDateString()} •{' '}
                    {article.readingTime.text}
                  </Text>
                  <Text
                    as="h2"
                    size="title-lg"
                    css={{
                      fontWeight: 500
                    }}>
                    {article.title}
                  </Text>
                </Box>
              </Card>
            </Link>
          ))}
        </Flex>
        <Flex as="section" direction="column" align="center">
          <Text
            size="headline"
            css={{ fontWeight: 600, paddingTop: '$8', paddingBottom: '$6' }}>
            Join the CSESoc community
          </Text>
          <Text
            as="span"
            size="title-sm"
            css={{ color: '$slate12', paddingTop: '$1' }}>
            Make friends with like-minded students and stay up-to-date with
            events.
          </Text>
          <Flex
            css={{
              marginTop: '$4'
            }}>
            <Card></Card>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const articles: Article[] = allArticles.slice(0, 10)
  return {
    props: {
      articles
    }
  }
}

export default Home
