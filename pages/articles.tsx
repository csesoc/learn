import Avatar from 'boring-avatars'
import { Box } from 'components/Box'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { Card } from 'components/Card'
import { Tag } from 'components/Tag'
import { allArticles, Article } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { styled } from 'stitches.config'
import { useState } from 'react'

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  // all: 'unset',
  // backgroundColor: 'black',
  width: 25,
  height: 25,
  borderRadius: '100%',
  boxShadow: `0 2px 10px black`,
  '&:hover': { backgroundColor: `black` },
  '&:focus': { boxShadow: `0 0 0 2px black` }
})

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  // width: '100%',
  // height: '100%',
  // position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 11,
    height: 11,
    borderRadius: '50%',
    backgroundColor: `black`
  }
})

// Exports
export const RadioGroup = RadioGroupPrimitive.Root
export const RadioGroupRadio = StyledRadio
export const RadioGroupIndicator = StyledIndicator

const Label = styled('label', {
  color: 'black',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
  paddingLeft: 15
})

export async function getStaticProps() {
  const articles = allArticles.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  var tagLists = allArticles.map((article) =>
    article.tags == undefined ? [] : article.tags
  )
  var flattenedTags = tagLists.flat(1)
  const allTags = [...new Set(flattenedTags)]
  return { props: { articles, allTags } }
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
        {article.tags != undefined &&
          article.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </Flex>
    </Flex>
  )
}

function ArticleCard(article: Article) {
  return (
    <Link href={`/articles/${article.slug}`}>
      <Card
        css={{
          overflow: 'hidden',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '$slate3'
          }
        }}>
        <Box css={{ margin: '-$6 -$5 $5 -$5' }}>
          <Image src="/csesoccard2.png" width="700" height="300" />
        </Box>
        <Text size="label-md" css={{ color: '$slate11' }}>
          {format(parseISO(article.date), 'LLL d, yyy')} ⸱{' '}
          {article.readingTime.text}
        </Text>
        <Text
          size="title-md"
          css={{ color: '$slate12', fontWeight: '600', paddingTop: '$2' }}>
          {article.title}
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
        <Flex css={{ paddingTop: '$3', gap: '0.75rem' }}>
          {article.tags != undefined &&
            article.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </Flex>
      </Card>
    </Link>
  )
}

// I'm tired, I didn't type this properly ok
const Articles: NextPage = ({ articles, allTags }: any) => {
  const [filteredArticles, setFilteredArticles] = useState(articles)
  const filterArticles = (value: string) => {
    if (value == 'All topics') {
      setFilteredArticles(articles)
    } else {
      setFilteredArticles(
        articles.filter((article) => article.tags.includes(value))
      )
    }
  }

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
          Collection
        </Text>
        <Text
          as="span"
          size="title-sm"
          css={{ color: '$slate12', paddingTop: '$1' }}>
          Learn something new with our collection of articles and videos!
        </Text>

        <Text
          size="title-lg"
          css={{
            backgroundColor: '$blue4',
            fontWeight: '600',
            borderRadius: '$full',
            padding: '$3',
            margin: '$4',
            width: '75%'
          }}>
          Featured Content
        </Text>

        <Flex
          css={{
            px: '$6',
            gap: '$7',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
          {/* TODO: display featured content here, not everything */}
          {articles.map((article: Article, index: number) => (
            <ArticleCard key={index} {...article} />
          ))}
        </Flex>

        <Flex>
          <RadioGroup
            defaultValue="All topics"
            aria-label="Select topic"
            onValueChange={filterArticles}>
            <Flex css={{ margin: '10px 0', alignItems: 'center' }}>
              <RadioGroupRadio value="All topics" id="All topics">
                <RadioGroupIndicator />
              </RadioGroupRadio>
              <Label htmlFor="All topics">All topics</Label>
            </Flex>
            {allTags.map((tag: string, index: number) => (
              <Flex
                key={index}
                css={{ margin: '10px 0', alignItems: 'center' }}>
                <RadioGroupRadio value={tag} id={tag}>
                  <RadioGroupIndicator />
                </RadioGroupRadio>
                <Label htmlFor={tag}>{tag}</Label>
              </Flex>
            ))}
          </RadioGroup>
        </Flex>

        <Flex
          css={{
            flexDirection: 'column',
            width: '100%',
            px: '$6',
            paddingTop: '$8',
            gap: '$7'
          }}>
          {filteredArticles.map((article: Article, index: number) => (
            <ArticleRow key={index} {...article} />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Articles
