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
import ArticleCard from 'components/ArticleCard'
import { styled } from '@stitches/react'

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
            <Link
              passHref
              href={`/articles/${article.slug}`}
              key={article.slug}>
              <ArticleCard article={article} />
            </Link>
          ))}
        </Flex>
        <Flex
          as="section"
          direction="column"
          align="center"
          css={{ width: '100%' }}>
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
            justify="between"
            align="center"
            css={{
              width: '75%',
              marginTop: '$4'
            }}>
            <Card
              css={{
                overflow: 'hidden',
                backgroundColor: '$slate12'
              }}>
              <Box
                css={{
                  position: 'relative',
                  width: '100%',
                  height: '40%',
                  marginBottom: '$3'
                }}>
                <Image
                  src="/images/lofi.jpg"
                  alt="lofi image"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box
                css={{
                  paddingInline: '$4'
                }}>
                <Text
                  size="title-lg"
                  css={{
                    fontWeight: 600,
                    color: '$slate1'
                  }}>
                  Psst ... you might be our next creator.
                </Text>
                <Text
                  css={{
                    fontWeight: 400,
                    color: '$slate1'
                  }}>
                  Passionate about a technical topic and want to create content?
                  Any skill levels welcome - learn more below!
                </Text>
                <Link href="/contact">
                  <Button
                    size="default"
                    css={{
                      marginTop: '$6',
                      backgroundColor: '$grass6',
                      '&:hover': {
                        backgroundColor: '$grass5'
                      }
                    }}>
                    Contact us
                    <ArrowRight weight="bold" />
                  </Button>
                </Link>
              </Box>
            </Card>
            <Flex
              direction="column"
              justify="between"
              align="center"
              css={{ height: '15rem' }}>
              <SocialButton type="discord">
                <Image
                  src="/icons/discord.svg"
                  width={30}
                  height={30}
                  alt="discord logo"
                />
                <Text>Discord</Text>
              </SocialButton>
              <SocialButton type="facebook">
                <Image
                  src="/icons/facebook.svg"
                  width={30}
                  height={30}
                  alt="facebook logo"
                />
                <Text>Facebook</Text>
              </SocialButton>
              <SocialButton type="instagram">
                <Image
                  src="/icons/instagram.svg"
                  width={30}
                  height={30}
                  alt="instagram logo"
                />
                <Text>Instagram</Text>
              </SocialButton>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

const SocialButton = styled('button', {
  fontSize: '$label-lg',
  fontWeight: '500',
  fontFamily: '$sans',
  letterSpacing: '-0.011rem',
  lineHeight: '22px',
  color: '$blue12',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '$2',
  transition: '$button',
  border: 'none',
  padding: '$4',
  borderRadius: '5rem',
  minWidth: '20rem',
  variants: {
    type: {
      discord: {
        backgroundColor: '$violet6',
        '&:hover': {
          backgroundColor: '$violet5'
        }
      },
      facebook: {
        backgroundColor: '$indigo6',
        '&:hover': {
          backgroundColor: '$indigo5'
        }
      },
      instagram: {
        backgroundColor: '$pink6',
        '&:hover': {
          backgroundColor: '$pink5'
        }
      }
    }
  }
})

export async function getStaticProps() {
  const articles: Article[] = allArticles.slice(0, 10)
  return {
    props: {
      articles
    }
  }
}

export default Home
