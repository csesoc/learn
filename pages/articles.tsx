import { Box } from 'components/Box'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { Button } from 'components/Button'
import ArticleCard from 'components/ArticleCard'
import { allArticles, Article } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { styled } from '../stitches.config'
import { MagnifyingGlass } from 'phosphor-react'
import { ArticleRow } from '../components/ArticleRow'

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
            <ArticleCard key={index} article={article} />
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
