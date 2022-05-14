import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { GithubLogo, MagnifyingGlass, Moon } from 'phosphor-react'
import { IconButton } from './IconButton'
import Logo from './Logo'
import { ThemeToggle } from './ThemeToggle'
const GITHUB_URL = 'https://github.com/csesoc/learning-platform'

export default function Navbar() {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex flex-row items-center justify-between w-screen gap-4 px-24">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className="flex flex-row gap-6">
          <NavigationMenu.Item>
            <Link href="/articles">Articles</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="/creators">Creators</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="/about">About</Link>
          </NavigationMenu.Item>
        </div>
        <div className="flex flex-row gap-4">
          <NavigationMenu.Item>
            <IconButton>
              <MagnifyingGlass weight="bold" />
            </IconButton>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <ThemeToggle />
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              <IconButton>
                <GithubLogo weight="fill" />
              </IconButton>
            </a>
          </NavigationMenu.Item>
        </div>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
