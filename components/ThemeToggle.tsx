// From https://github.com/radix-ui/website/blob/main/components/ThemeToggle.tsx
// TODO: Fix so that first load adds class names correctly

import React from 'react'
import { darkTheme } from 'stitches.config'
import { IconButton } from './IconButton'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'phosphor-react'

export const ThemeToggle = (props) => {
  const { theme, setTheme } = useTheme()

  return (
    <IconButton
      onClick={() => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'

        // When switching themes, you might see demo iframes lagging behind the primitives homepage for a few frames.
        // This is because `setTheme` hook depends on React component lifecycle to update things. We are toggling
        // styles manually so that the iframes and the parent page theme change is perfectly synced.
        document
          .querySelectorAll('[data-demo-iframe]')
          .forEach((iframe: HTMLIFrameElement) => {
            if (iframe.contentDocument?.documentElement) {
              iframe.contentDocument.documentElement.classList.toggle(
                darkTheme.className
              )
              iframe.contentDocument.documentElement.classList.toggle(
                'light-theme'
              )
              iframe.contentDocument.documentElement.style.setProperty(
                'color-scheme',
                newTheme
              )
            }
          })
        document.documentElement.classList.toggle(darkTheme.className)
        document.documentElement.classList.toggle('light-theme')
        document.documentElement.style.setProperty('color-scheme', newTheme)

        // Finally, we still need to let `next-themes` know of the theme change so that it saves it to local storage.
        setTheme(newTheme)
      }}
      {...props}
      aria-label="Toggle between light and dark mode">
      {theme == 'light' ? <Moon weight="fill" /> : <Sun weight="fill" />}
    </IconButton>
  )
}
