import Link from 'next/link'
import { GithubLogo } from 'phosphor-react'
import { Flex } from './Flex'
import { IconButton } from './IconButton'
import Logo from './Logo'
import SearchButton from './SearchButton'
import { Text } from './Text'

const GITHUB_URL = 'https://github.com/csesoc/learning-platform'

export default function Navbar() {
  return (
    <Flex
      as="header"
      css={{
        py: '$4',
        px: '$6',
        alignItems: 'center',
        zIndex: '1'
      }}>
      <Flex css={{ flex: 1, justifyContent: 'flex-start' }}>
        <Link href="/">
          <button
            aria-label="Return to home page"
            style={{
              border: 0,
              backgroundColor: 'transparent',
              cursor: 'pointer'
            }}>
            <Logo />
          </button>
        </Link>
      </Flex>
      <Flex
        css={{
          flex: 1,
          gap: '2.25rem',
          justifyContent: 'center'
        }}>
        <Link href="/articles">
          <Text
            as="a"
            size="label-lg"
            css={{ color: '$slate12', cursor: 'pointer' }}>
            Collection
          </Text>
        </Link>
        <Link href="/creators">
          <Text
            as="a"
            size="label-lg"
            css={{
              color: '$slate12',
              cursor: 'pointer'
            }}>
            Creators
          </Text>
        </Link>
        <Link href="/puzzles">
          <Text
            as="a"
            size="label-lg"
            css={{
              color: '$slate12',
              cursor: 'pointer'
            }}>
            Puzzles
          </Text>
        </Link>
        <Text
          as="a"
          size="label-lg"
          css={{
            color: '$slate11',
            userSelect: 'none',
            cursor: 'not-allowed'
          }}>
          About
        </Text>
      </Flex>
      <Flex
        css={{
          flex: 1,
          gap: '$3',
          justifyContent: 'flex-end'
        }}>
        {/* <SearchButton /> */}
        <IconButton aria-label="GitHub repository for CSESoc Learn">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            <GithubLogo weight="fill" />
          </a>
        </IconButton>
      </Flex>
    </Flex>
  )
}
