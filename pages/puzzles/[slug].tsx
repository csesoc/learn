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

const PuzzleLayout = ({ puzzle }: { puzzle: Puzzle }) => {
  const MDXContent = useMDXComponent(puzzle.body.code)

  return (
    <Flex
      css={{
        justifyContent: 'center',
        padding: '$6',
        flexDirection: 'column'
      }}>
      <Head>
        <title>{puzzle.title}</title>
      </Head>
      <Text
        size="headline"
        css={{
          color: '$slate12',
          fontWeight: '600',
          paddingTop: '$2',
          alignSelf: 'center'
        }}>
        {puzzle.title}
      </Text>
      <Box css={{ paddingTop: '$2' }}>
        <Text>
          <MDXContent components={components} />
        </Text>
      </Box>
    </Flex>
  )
}

export default PuzzleLayout
