import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'

const Home: NextPage = () => {
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
          <Button size="default" css={{ marginTop: '$6' }}>
            Learn something new
            <ArrowRight weight="bold" />
          </Button>
        </Link>
        <Text size="headline" css={{ fontWeight: 600, paddingTop: '$8' }}>
          See what&apos;s new
        </Text>
        <Text size="title-md" css={{ paddingTop: '$4', color: '$red11' }}>
          Left as a frontend exercise :) Hint: Import the posts and map them!
        </Text>
      </Flex>
    </Box>
  )
}

export default Home
