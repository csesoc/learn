import { Box } from 'components/Box'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { Button } from 'components/Button'
import ArticleCard from 'components/ArticleCard'
import { ArticleType, allArticleTypes, allCourseRevisionOfferings, allWorkshopsOfferings } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { styled } from '../stitches.config'
import { MagnifyingGlass } from 'phosphor-react'
import { ArticleRow } from '../components/ArticleRow'
import { ArticlesCarousel } from 'components/ArticlesCarousel'
import CourseRevisionContainerHomePage from 'components/course-revision/CourseRevisionContainerHomePage'
import WorkshopsContainerHomePage from 'components/workshops/WorkshopsContainerHomePage'

export async function getStaticProps() {
  const articles = allArticleTypes.sort((a, b) => {
    return compareDesc(new Date(b.date), new Date(a.date))
  })
  const tagLists = allArticleTypes.map((article) =>
    article.tags ? article.tags : []
  )
  const flattenedTags = tagLists.flat(1)
  const allTags = [...['All Topics'], ...new Set(flattenedTags)]
  return { props: { articles, allTags, courseOfferingContent: allCourseRevisionOfferings, workshopOfferingContent: allWorkshopsOfferings } }
}

const SearchBar = styled('input', {
  all: 'unset',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  fontSize: 16,
  lineHeight: 1
})

const TagsContainer = styled('div', {
  paddingTop: '$4',
  flexDirection: 'column',
  gap: '$2',
  "@media (max-width: 768px)": { display: "none" }
})

// I'm tired, I didn't type this properly ok
const Articles: NextPage = ({ articles, allTags, courseOfferingContent, workshopOfferingContent }: any) => {
  const [currentTag, setCurrentTag] = useState('All Topics')
  const [currentSearch, setCurrentSearch] = useState('')
  const [filteredArticles, setFilteredArticles] = useState(articles)

  const featuredArticleTitles = [
    'COMP2521 Revision Theory Questions',
    'ReactJS Project Tutorial: Introduction',
    'Backend Project Tutorial 1 - Creating a simple Express.js backend'
  ]

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
        articles.filter((article: ArticleType) =>
          article.title.toLowerCase().includes(search)
        )
      )
    } else {
      setFilteredArticles(
        articles.filter(
          (article: ArticleType) =>
            article.title.toLowerCase().includes(search) &&
            article.tags &&
            article.tags.includes(tag)
        )
      )
    }
  }

  return (
    <Box css={{
      padding: "0 1rem",
    }}>
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
          Learn something new with our collection of articles and tutorials
        </Text>

        <Flex
          as="main"
          css={{
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 1rem',
          }}>
          <Text
            size="headline"
            css={{ fontWeight: 600, paddingTop: '$8', paddingBottom: '$4' }}>
            Course Revision
          </Text>
          <Text
            as="span"
            size="title-sm"
            css={{ color: '$slate12', paddingTop: '$1', textAlign: "center", width: "70%" }}>
            Revise for your upcoming final exams with practice problems written by our Education Team. Solutions provided.
          </Text>
          <CourseRevisionContainerHomePage allCourseRevisionOfferings={courseOfferingContent} />
        </Flex>

        <Flex
          as="main"
          css={{
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 1rem',
          }}>
          <Text
            size="headline"
            css={{ fontWeight: 600, paddingTop: '$8', paddingBottom: '$4' }}>
            Workshops
          </Text>
          <Text
            as="span"
            size="title-sm"
            css={{ color: '$slate12', paddingTop: '$1', textAlign: "center", width: "70%" }}>
            Explore the many workshops our Education Team has curated to become big brain.
          </Text>
          <WorkshopsContainerHomePage allWorkshopsOffering={workshopOfferingContent} />
        </Flex>

        <Text
          size="headline"
          css={{ fontWeight: 600, paddingTop: '$8', paddingBottom: '$3' }}>
          Featured Content
        </Text>

        <Box css={{ width: "100%" }}>
          <ArticlesCarousel articles={articles
            .filter((article) => featuredArticleTitles.includes(article.title))} />
        </Box>

        <Text
          size="headline"
          css={{ fontWeight: 600, paddingTop: '$8', paddingBottom: '$3' }}>
          All Content
        </Text>

        <Flex
          css={{
            width: '100%',
          }}>
          <TagsContainer>
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
          </TagsContainer>
          <Flex
            css={{
              flexDirection: 'column',
              width: '100%',
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
            {filteredArticles.map((article: ArticleType, index: number) => (
              <ArticleRow key={index} {...article} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box >
  )
}

export default Articles
