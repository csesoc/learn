import { useState, useEffect } from 'react'

export default function Navbar () {
  const [loaded, setLoaded] = useState(false)

  // Inject Stork into the document body.
  useEffect(() => {
    const stork = document.createElement('Script')
    stork.src = 'https://files.stork-search.net/releases/v1.4.2/stork.js'
    stork.strategy = 'beforeInteractive'
    stork.addEventListener('load', () => setLoaded(true))
    document.body.appendChild(stork)
  }, [])

  useEffect(() => {
    if (loaded) {
      stork.register('search', '/stork-index.st')
    }
  }, [loaded])

  return (
    <div className="w-screen h-14 bg-black flex flex-row items-center justify-between px-6">
      <p className="text-white">CSESoc Learning Platform</p>
      <div className="stork-wrapper">
        <input data-stork="search" className="stork-input" />
        <div data-stork="search-output" className="stork-output"></div>
      </div>
    </div>
  )
}
