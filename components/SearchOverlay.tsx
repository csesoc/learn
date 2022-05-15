// TODO: Refactor CSS styling using Stitches as per mockups

import * as Portal from '@radix-ui/react-portal'
import { useEffect, useState } from 'react'
import { styled } from 'stitches.config'

const StorkWrapper = styled('div', {
  fontFamily: '$sans',
  boxSizing: 'border-box',
  fontSize: '$body',
  '&.stork-input': {
    width: '100%',
    height: '2.4rem',
    padding: '0.4rem 0.8rem',
    border: '1px'
  }
})

export default function SearchOverlay() {
  const [loaded, setLoaded] = useState(false)

  // Inject Stork into the document body.
  useEffect(() => {
    if (!loaded) {
      const stork = document.createElement('Script')
      stork.src = 'https://files.stork-search.net/releases/v1.4.2/stork.js'
      stork.strategy = 'beforeInteractive'
      stork.addEventListener('load', () => setLoaded(true))
      document.body.appendChild(stork)
    } else {
      stork.register('search', '/stork-index.st')
    }
  }, [loaded])

  return (
    <Portal.Root className="flex justify-center w-screen h-screen backdrop-blur-md">
      <div className="w-3/4 pt-24 stork-wrapper md:w-1/2">
        <input
          data-stork="search"
          className="stork-input"
          id="stork-input"
          autoFocus
        />
        <div data-stork="search-output" className="stork-output"></div>
      </div>
    </Portal.Root>
  )
}
