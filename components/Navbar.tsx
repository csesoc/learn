import Link from 'next/link'
import { GithubLogo, MagnifyingGlass } from 'phosphor-react'
import { IconButton } from './IconButton'
import SearchButton from './SearchButton'
import Logo from './Logo'
import { Flex } from './Flex'

const GITHUB_URL = 'https://github.com/csesoc/learning-platform'

export default function Navbar() {
  return (
    <Flex
      as="header"
      css={{
        py: '$4',
        px: '$4',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: '1'
      }}>
      <Link href="/">
        <button aria-label="Return to home page">
          <Logo />
        </button>
      </Link>
      <Link href="/articles">Articles</Link>
      <Flex>
        <SearchButton />
        <IconButton aria-label="GitHub repository for CSESoc Learn">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            <GithubLogo weight="fill" />
          </a>
        </IconButton>
      </Flex>
    </Flex>
  )
}

//   <Link href="/">
//   <a>
//     <Logo />
//   </a>
// </Link>
//             <Link href="">Articles</Link>

//                     <a href={GITHUB_URL} target="_blank" rel="noreferrer">
//                                   <SearchButton />
//                                   </a>
//       <IconButton>
//         <GithubLogo weight="fill" />
//       </IconButton>
//     </a>
