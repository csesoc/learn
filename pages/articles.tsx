import Avatar from 'boring-avatars'
import { Box } from 'components/Box'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { Tag } from 'components/Tag'
import { Button } from 'components/Button'
import ArticleCard from 'components/ArticleCard'
import { allArticles, Article } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { styled } from '../stitches.config'
import { MagnifyingGlass } from 'phosphor-react'

export async function getStaticProps() {
  const articles = allArticles.sort((a, b) => {
    return compareDesc(new Date(b.date), new Date(a.date))
  })
  const tagLists = allArticles.map((article) =>
    article.tags ? article.tags : []
  )
  const flattenedTags = tagLists.flat(1)
  const allTags = [...['All Topics'], ...new Set(flattenedTags)]
  return { props: { articles, allTags } }
}

function ArticleRow(article: Article) {
  return (
    <Flex direction="row" css={{ py: '$4' }}>
      <Flex direction="column" justify="between" css={{ flex: 3 }}>
        <Flex
          css={{
            flexDirection: 'row',
            paddingTop: '$2',
            gap: '$2'
          }}>
          <Text size="label-md" css={{ color: '$slate11' }}>
            {format(parseISO(article.date), 'LLL d, yyy')} ⸱{' '}
            {article.readingTime.text}
          </Text>
          {article.tags &&
            article.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </Flex>

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
      <Flex
        css={{
          flex: 1,
          justifyContent: 'flex-end',
          overflow: 'hidden'
        }}>
        <Image
          src={
            article.coverPhoto
              ? article.coverPhoto
              : '/images/defaultCoverPhoto.png'
          }
          style={{ borderRadius: '20px' }}
          width="300px"
          height="150px"
          objectFit="cover"
          alt={article.title}
        />
      </Flex>
    </Flex>
  )
}

const SearchBar = styled('input', {
  all: 'unset',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  fontSize: 16,
  lineHeight: 1
})

// I'm tired, I didn't type this properly ok
const Articles: NextPage = ({ articles, allTags }: any) => {
  const [currentTag, setCurrentTag] = useState('All Topics')
  const [currentSearch, setCurrentSearch] = useState('')
  const [filteredArticles, setFilteredArticles] = useState(articles)

  const updateTag = (tag: string) => {
    setCurrentTag(tag)
    updateArticles(tag, currentSearch)
  }

  const updateSearch = (search: string) => {
    setCurrentSearch(search)
    updateArticles(currentTag, search)
  }

  const updateArticles = (tag: string, search: string) => {
    if (tag === 'All Topics') {
      setFilteredArticles(
        articles.filter((article: Article) =>
          article.title.toLowerCase().includes(search)
        )
      )
    } else {
      setFilteredArticles(
        articles.filter(
          (article: Article) =>
            article.title.toLowerCase().includes(search) &&
            article.tags &&
            article.tags.includes(tag)
        )
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
        justify="center"
        align="center"
        css={{
          flexDirection: 'column',
          width: '100%'
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
          size="headline"
          css={{ fontWeight: 600, paddingTop: '$8', paddingBottom: '$3' }}>
          Featured Content
        </Text>

        <Flex
          as="section"
          css={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '75%',
            overflowX: 'scroll',
            flexWrap: 'nowrap',
            gap: '$4'
          }}>
          {/* TODO: display featured content here, not first 3 articles */}
          {articles.slice(0, 3).map((article: Article, index: number) => (
            <Box>
              <ArticleCard key={index} article={article} />
            </Box>
          ))}
        </Flex>

        {/* <Flex css={{ width: '75%', flexWrap: 'wrap' }}>
          <Text
            size="title-lg"
            css={{
              backgroundColor: '$blue4',
              fontWeight: '600',
              borderRadius: '$full',
              padding: '$4',
              marginTop: '$7',
              width: '100%'
            }}>
            All Content
          </Text>
        </Flex> */}

        <Text
          size="headline"
          css={{ fontWeight: 600, paddingTop: '$8', paddingBottom: '$3' }}>
          All Content
        </Text>

        <Flex
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr 4fr',
            width: '75%'
          }}>
          <Flex css={{ paddingTop: '$4', flexDirection: 'column', gap: '$2' }}>
            {allTags.map((tag: string, index: number) => (
              <Button
                key={index}
                size="default"
                css={
                  tag === currentTag
                    ? { cursor: 'pointer', backgroundColor: '$blue4' }
                    : { cursor: 'pointer', backgroundColor: '$whiteA1' }
                }
                value={tag}
                name={tag}
                onClick={(e) => updateTag(tag)}>
                {tag}
              </Button>
            ))}
          </Flex>
          <Flex
            css={{
              flexDirection: 'column',
              width: '100%',
              paddingLeft: '$8',
              paddingTop: '$4',
              gap: '$4'
            }}>
            <Flex
              css={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
                padding: '0 15px',
                height: 40,
                width: '100%',
                maxWidth: '300px',
                gap: '$2',
                backgroundColor: '$slate4'
              }}>
              <Flex css={{ color: 'grey' }}>
                <MagnifyingGlass size={20} />
              </Flex>
              <SearchBar
                type="text"
                onChange={(e) => updateSearch(e.target.value)}
                placeholder="Search by title..."
              />
            </Flex>
            {filteredArticles.map((article: Article, index: number) => (
              <ArticleRow key={index} {...article} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Articles
