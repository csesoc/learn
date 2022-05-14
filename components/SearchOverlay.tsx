// TODO: Refactor into command menu style thing

import { useState, useEffect } from 'react'
import { styled } from 'stitches.config'

const StorkWrapper = styled('div', {
  fontFamily: '$sans',
  boxSizing: 'border-box',
  fontSize: '$body',
  backgroundColor: '$slate2',
  '&.stork-input': {
    width: '100%',
    height: '2.4rem',
    padding: '0.4rem 0.8rem',
    border: '1px solid',
    borderColor: '$slate12'
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
    <StorkWrapper>
      <input data-stork="search" className="stork-input" />
      <div data-stork="search-output" className="stork-output"></div>
    </StorkWrapper>
  )
}
