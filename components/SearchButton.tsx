import { IconButton } from './IconButton'
import { MagnifyingGlass } from 'phosphor-react'
import { useState, useEffect, useRef } from 'react'
import SearchOverlay from './SearchOverlay'
import { useHotkeys } from 'react-hotkeys-hook'
import useOnClickOutside from 'use-onclickoutside'

export default function SearchButton() {
  const [active, toggleActive] = useState(false)
  const clickedOutside = useRef(null)

  // TODO: Poor solution - this logic should be moved into SearchOverlay, but I ran into bugs doing so.
  // Refactor later to move hotkey and click detection to SearchOverlay.
  useHotkeys('cmd+k', () => toggleActive(true), {
    enableOnTags: ['TEXTAREA', 'INPUT']
  })
  useHotkeys('esc', () => toggleActive(false), {
    enableOnTags: ['TEXTAREA', 'INPUT']
  })

  return (
    <>
      <IconButton
        onClick={() => toggleActive((currentState) => !currentState)}
        aria-label="Search for content">
        <MagnifyingGlass weight="bold" />
      </IconButton>
      {active ? <SearchOverlay /> : null}
    </>
  )
}
