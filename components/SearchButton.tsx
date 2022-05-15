import { MagnifyingGlass } from 'phosphor-react'
import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { IconButton } from './IconButton'
import SearchOverlay from './SearchOverlay'

export default function SearchButton() {
  const [active, toggleActive] = useState(false)

  useHotkeys('cmd+k', () => toggleActive(true), {
    enableOnTags: ['TEXTAREA', 'INPUT']
  })

  const updateActive = (state) => {
    toggleActive(state)
  }

  return (
    <>
      <IconButton
        onClick={() => toggleActive((currentState) => !currentState)}
        aria-label="Search for content">
        <MagnifyingGlass weight="bold" />
      </IconButton>
      {active ? <SearchOverlay changeActive={updateActive} /> : null}
    </>
  )
}
