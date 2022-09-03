import { styled } from '@stitches/react'
import Link from 'next/link'
import { relative } from 'path'
import { GithubLogo } from 'phosphor-react'
import { useState } from 'react'
import { Flex } from './Flex'
import { IconButton } from './IconButton'
import Logo from './Logo'
import NavMenu from './NavMenu'
import SearchButton from './SearchButton'
import { Text } from './Text'

const GITHUB_URL = 'https://github.com/csesoc/learning-platform'
const navItems = [
  {
    'path': 'articles',
    'title': 'Collection',
  },
  {
    'path': 'creators',
    'title': 'Contribute',
  },
  {
    'path': '2521-revision-practical',
    'title': 'COMP2521',
  },

]

const NavContainer = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  position: "absolute",
  left: 0,
  transform: "translateX(100vw)",
  variants: {
    isOpen: {
      true: {
        transform: "translateX(30vw)",
      }
    }
  },
  "@media screen and (min-width: 768px)": {
    flexFlow: "row nowrap",
    gap: '2.25rem',
    justifyContent: 'center',
    position: "relative",
    transform: "none",
  }
})

const Layer = styled('div', {
        display: "block",
        content: "",
        backgroundColor: 'black',
        width: "100%",
        height: '3px',
        variants: {
            isOpen: {
                true: {
                    backgroundColor: "CornflowerBlue"
                }
            }
        }
            
})

const TopBun = styled(Layer, {
    
})

const Filling = styled(Layer, {

})

const BottomBun = styled(Layer, {

})

const Burger = styled('div', {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "space-between",
    width: "22px",
    height: '16px',
    cursor: "pointer",
    "@media screen and (min-width: 768px)": {
        display: "none",
    }
})

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      as="header"
      css={{
        py: '$4',
        px: '$6',
        alignItems: 'center',
        zIndex: '1',
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
      <NavContainer isOpen={isOpen}>
        {navItems.map((navItem, idx) => (
        <Link key={idx} href={`/${navItem.path}`}>
          <Text
            as="a"
            size="label-lg"
            css={{ color: '$slate12', cursor: 'pointer' }}
            onClick={() => {setIsOpen(false); console.log('hi')}}>
            {navItem.title}
            
          </Text>
        </Link>

        )
        )}
        {/* <Text
          as="a"
          size="label-lg"
          css={{
            color: '$slate11',
            userSelect: 'none',
            cursor: 'not-allowed'
          }}>
          About
        </Text> */}
      </NavContainer>
              <Burger onClick={() => setIsOpen((val) => !val)}>
            <TopBun isOpen={isOpen}></TopBun>
            <Filling isOpen={isOpen}></Filling>
            <BottomBun isOpen={isOpen}></BottomBun>
        </Burger>
      {/* <Flex
        css={{
          flex: 1,
          gap: '$3',
          justifyContent: 'flex-end'
        }}>
        <SearchButton />
        <IconButton aria-label="GitHub repository for CSESoc Learn">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            <GithubLogo weight="fill" />
          </a>
        </IconButton>
      </Flex> */}
    </Flex>
  )
}
