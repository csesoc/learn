import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { Card } from 'components/Card'
import { styled } from '../stitches.config'
import { allArticles, Article } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  CaretLeft,
  CaretRight,
  DiscordLogo,
  FacebookLogo,
  InstagramLogo
} from 'phosphor-react'
import ArticleCard from 'components/ArticleCard'

import {
  Carousel,
  CarouselSlideList,
  CarouselSlide,
  CarouselNext,
  CarouselPrevious
} from 'components/Carousel'

const CarouselArrowButton = styled('button', {
  unset: 'all',
  outline: 0,
  margin: 0,
  border: 0,
  padding: 0,

  display: 'flex',
  position: 'relative',
  zIndex: 1,
  ai: 'center',
  jc: 'center',
  bc: '$panel',
  br: '$round',
  width: '$7',
  height: '$7',
  color: '$hiContrast',

  boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px',
  willChange: 'transform, box-shadow, opacity',
  transition: 'all 100ms',

  '@hover': {
    '&:hover': {
      boxShadow:
        '$colors$blackA10 0px 3px 16px -5px, $colors$blackA5 0px 1px 3px',
      transform: 'translateY(-1px)',

      // Fix a bug when hovering at button edges would cause the button to jitter because of transform
      '&::before': {
        content: '',
        inset: -2,
        br: '$round',
        position: 'absolute'
      }
    }
  },
  '&:focus': {
    boxShadow: `
      $colors$blackA10 0px 3px 16px -5px,
      $colors$blackA5 0px 1px 3px,
      $colors$blue8 0 0 0 2px
    `,
    transform: 'translateY(-1px)'
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px'
  },
  '&:active:not(:focus)': {
    boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px'
  },
  '&:active': {
    transform: 'none',
    transition: 'opacity 100ms'
  },
  '&:disabled': {
    opacity: 0
  },
  '@media (hover: none) and (pointer: coarse)': {
    display: 'none'
  }
})

export async function getStaticProps() {
  const articles = allArticles.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { articles } }
}

function ArticleSlide(article: Article) {
  return (
    <CarouselSlide>
      <ArticleCard article={article} />
    </CarouselSlide>
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
        <Text size="headline" css={{ fontWeight: 600, py: '$8' }}>
          See what&apos;s new
        </Text>

        <Box css={{ position: 'relative' }}>
          <Carousel>
            <CarouselSlideList
              css={{
                display: 'grid',
                gridAutoFlow: 'column',
                gridAutoColumns: 'min-content',
                ox: 'auto',
                oy: 'hidden',
                py: '$1',
                WebkitOverflowScrolling: 'touch',

                // Gap between slides
                $$gap: '$space$6',

                // calculate the left padding to apply to the scrolling list
                // so that the carousel starts aligned with the container component
                // the "1145" and "$5" values comes from the <Container /> component
                '$$scroll-padding':
                  'max($$gap, calc((100% - 1145px) / 2 + $$gap))',
                pl: '$$scroll-padding',

                // hide scrollbar
                MsOverflowStyle: 'none',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none'
                },

                // Can't have nice grid gap because Safari butchers scroll padding with it
                '& > *': {
                  pr: '$$gap'
                }
              }}>
              {articles.map((article: Article, index: number) => (
                <ArticleSlide key={index} {...article} />
              ))}
            </CarouselSlideList>

            <Box
              css={{
                position: 'absolute',
                top: 'calc(50% - $7)',
                left: '15px'
              }}>
              <CarouselPrevious
                aria-label="Show previous demo"
                tabIndex={-1}
                as={CarouselArrowButton}>
                <CaretLeft />
              </CarouselPrevious>
            </Box>
            <Box
              css={{
                position: 'absolute',
                top: 'calc(50% - $7)',
                right: '15px'
              }}>
              <CarouselNext
                aria-label="Show next demo"
                tabIndex={-1}
                as={CarouselArrowButton}>
                <CaretRight />
              </CarouselNext>
            </Box>
          </Carousel>
        </Box>

        <Text size="headline" css={{ fontWeight: 600, paddingTop: '$8' }}>
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
            px: '$6',
            paddingTop: '$8',
            gap: '$7',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
          <Card css={{ backgroundColor: '$slate12', overflow: 'hidden' }}>
            <Box css={{ margin: '-$6 -$5 $5 -$5' }}>
              <Image
                src="/images/contribute.png"
                width="702"
                height="226"
                objectFit="cover"
              />
            </Box>
            <Text
              size="title-lg"
              css={{ fontWeight: '600', padding: '$2', color: '$slate1' }}>
              Psst... you might be our next creator.
            </Text>
            <Text css={{ padding: '$2', color: '$slate1' }}>
              Passionate about a technical topic and want to create content? Any
              skill levels welcome - learn more below!
            </Text>
            <Link href="/creators">
              <Button
                size="default"
                css={{
                  width: 'fit-content',
                  marginTop: '$4',
                  cursor: 'pointer',
                  backgroundColor: '$green6',
                  '&:hover': { backgroundColor: '$green7' }
                }}>
                Contribute
                <ArrowRight weight="bold" />
              </Button>
            </Link>
          </Card>
          <Flex
            direction="column"
            justify="between"
            align="center"
            css={{ height: '25rem' }}>
            {/* TODO: avoid copypaste for social media buttons */}
            <a href="https://cseso.cc/discord/" target="blank">
              <Button
                size="default"
                css={{
                  width: '22rem',
                  cursor: 'pointer',
                  backgroundColor: '$indigo4',
                  '&:hover': { backgroundColor: '$indigo5' }
                }}>
                <Flex
                  css={{ py: '$3', pl: '$2', pr: '$1', color: '$indigo10' }}>
                  <DiscordLogo weight="fill" size={36} />
                </Flex>
                <Text size="title-md" css={{ fontWeight: '600' }}>
                  Discord
                </Text>
                <Flex
                  css={{ flex: 1, padding: '$3', justifyContent: 'flex-end' }}>
                  <ArrowRight weight="bold" size={32} />
                </Flex>
              </Button>
            </a>
            <a href="https://www.facebook.com/csesoc/" target="blank">
              <Button
                size="default"
                css={{
                  width: '22rem',
                  marginTop: '$6',
                  cursor: 'pointer',
                  backgroundColor: '$blue4',
                  '&:hover': { backgroundColor: '$blue5' }
                }}>
                <Flex css={{ py: '$3', pl: '$2', pr: '$1', color: '$blue10' }}>
                  <FacebookLogo weight="fill" size={36} />
                </Flex>
                <Text size="title-md" css={{ fontWeight: '600' }}>
                  Facebook
                </Text>
                <Flex
                  css={{ flex: 1, padding: '$3', justifyContent: 'flex-end' }}>
                  <ArrowRight weight="bold" size={32} />
                </Flex>
              </Button>
            </a>
            <a href="https://www.instagram.com/csesoc_unsw/" target="blank">
              <Button
                size="default"
                css={{
                  width: '22rem',
                  marginTop: '$6',
                  cursor: 'pointer',
                  backgroundColor: '$pink4',
                  '&:hover': { backgroundColor: '$pink5' }
                }}>
                <Flex css={{ py: '$3', pl: '$2', pr: '$1', color: '$pink10' }}>
                  <InstagramLogo weight="fill" size={36} />
                </Flex>
                <Text size="title-md" css={{ fontWeight: '600' }}>
                  Instagram
                </Text>
                <Flex
                  css={{ flex: 1, padding: '$3', justifyContent: 'flex-end' }}>
                  <ArrowRight weight="bold" size={32} />
                </Flex>
              </Button>
            </a>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Home
