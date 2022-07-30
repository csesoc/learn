import Avatar from 'boring-avatars'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { allPuzzles, Puzzle } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Head from 'next/head'
import Image from 'next/image'
import { Box } from 'components/Box'
import Callout from 'components/Callout'
import FileName from 'components/Filename'
import Centerer from 'components/Centerer'
import MultiChoice from 'components/MultiChoice'
import Link from 'next/link'
import { ArrowDown } from 'phosphor-react'

const defaultComponents = {
  Image,
  Callout,
  FileName,
  Centerer,
  MultiChoice,
  Link,
  ArrowDown
}

// Add any components used in MDX files here.
// Components here load dynamically if they're used.
// See https://github.com/tsriram/with-mdx-bundler for details.
const components = { ...defaultComponents }

export async function getStaticPaths() {
  const paths = allPuzzles.map((a) => ({ params: { slug: a.slug } }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: Puzzle }) {
  const puzzle = allPuzzles.find((puzzle) => puzzle.slug === params.slug)
  return {
    props: {
      puzzle
    }
  }
}

function ArticleHeader({ puzzle }: { puzzle: Puzzle }) {
  return (
    <Flex
      css={{
        flexDirection: 'column',
        padding: '0 0 1.4rem',
        borderBottom: 'solid 0.5px'
      }}>
      <Text
        size="headline"
        css={{ color: '$slate12', fontWeight: '600', paddingTop: '$2' }}>
        {puzzle.title}
      </Text>
      <Text size="title-sm" css={{ color: '$slate12', paddingTop: '$1' }}>
        {puzzle.desc}
      </Text>
      <Flex
        css={{
          flexDirection: 'row',
          gap: '0.75rem',
          alignItems: 'center',
          paddingTop: '$5'
        }}></Flex>
    </Flex>
  )
}

const ArticleLayout = ({ puzzle }: { puzzle: Puzzle }) => {
  const MDXContent = useMDXComponent(puzzle.body.code)

  return (
    <Flex css={{ justifyContent: 'center', paddingTop: '$6' }}>
      <Head>
        <title>{puzzle.title}</title>
      </Head>
      <Box css={{ paddingTop: '$2' }}>
        <Text>
          <MDXContent components={components} />
        </Text>
      </Box>
    </Flex>
  )
}

export default ArticleLayout
