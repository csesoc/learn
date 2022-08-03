// @ts-nocheck
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Box, styled } from '@modulz/design-system'
import { useComposedRefs } from '@radix-ui/react-compose-refs'
import { createContext } from '@radix-ui/react-context'
import { useCallbackRef } from '@radix-ui/react-use-callback-ref'
import { composeEventHandlers } from '@radix-ui/primitive'
import debounce from 'lodash.debounce'
import smoothscroll from 'smoothscroll-polyfill'

import { ArticleType } from 'contentlayer/generated'
import ArticleCard from './ArticleCard'
import { CaretLeft, CaretRight } from 'phosphor-react'

export function ArticlesCarousel(props) {
  const lastUsedFocusArea = React.useRef<HTMLElement>(null)
  const isRoving = React.useRef(false)

  React.useEffect(() => {
    lastUsedFocusArea.current = document.querySelector('[data-focus-area]')
  }, [])

  const onFocusAreaFocus = React.useCallback(
    (event: React.FocusEvent<HTMLElement>) => {
      lastUsedFocusArea.current = event.currentTarget
    },
    []
  )

  // We are implementing a simple roving tab index with some tweaks
  const onFocusAreaKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.target === event.currentTarget) {
        if (event.key === 'ArrowRight') {
          event.preventDefault()
          const allAreas = Array.from(
            document.querySelectorAll<HTMLElement>('[data-focus-area]')
          )
          const thisIndex = allAreas.findIndex(
            (el) => el === event.currentTarget
          )
          const nextIndex = Math.min(thisIndex + 1, allAreas.length - 1)
          const nextDemo = allAreas[nextIndex]
          isRoving.current = true
          nextDemo.focus()
          ;(nextDemo as any).scrollIntoViewIfNeeded?.(true)
          lastUsedFocusArea.current = nextDemo
          isRoving.current = false
        }

        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          const allAreas = Array.from(
            document.querySelectorAll<HTMLElement>('[data-focus-area]')
          )
          const thisIndex = allAreas.findIndex(
            (el) => el === event.currentTarget
          )
          const prevIndex = Math.max(thisIndex - 1, 0) // thisIndex - 1 >= 0 ? thisIndex - 1 : allAreas.length - 1;
          const prevDemo = allAreas[prevIndex]
          isRoving.current = true
          prevDemo.focus()
          ;(prevDemo as any).scrollIntoViewIfNeeded?.(true)
          lastUsedFocusArea.current = prevDemo
          isRoving.current = false
        }

        // Tab key press moves focus to the next element after the carousel
        if (event.key === 'Tab' && event.shiftKey === false) {
          const selector =
            'a, button, input, select, textarea, [data-focus-area-exit]'
          const elements = Array.from(
            document.querySelectorAll<HTMLElement>(selector)
          ).filter(
            (element) =>
              element.tabIndex !== -1 ||
              element.hasAttribute('data-focus-area-exit')
          )

          // Find last exit guard
          elements.reverse()
          const lastExit = elements.find((el) =>
            el.matches('[data-focus-area-exit]')
          )
          elements.reverse()
          const lastExitIndex = elements.indexOf(lastExit)
          const nextElement = elements[lastExitIndex + 1]

          if (nextElement) {
            event.preventDefault()
            nextElement.focus()
          }
        }

        // Shift + Tab key press moves focus to the previous element before the carousel
        if (event.key === 'Tab' && event.shiftKey) {
          const selector =
            'a, button, input, select, textarea, [data-focus-area-entry]'
          const elements = Array.from(
            document.querySelectorAll<HTMLElement>(selector)
          ).filter(
            (element) =>
              element.tabIndex !== -1 ||
              element.hasAttribute('data-focus-area-entry')
          )

          // Find first entry guard
          const firstEntry = elements.find((el) =>
            el.matches('[data-focus-area-entry]')
          )
          const firstEntryIndex = elements.indexOf(firstEntry)
          const prevElement = elements[firstEntryIndex - 1]

          if (prevElement) {
            event.preventDefault()
            prevElement.focus()
          }
        }
      }
    },
    []
  )

  React.useEffect(() => {
    const tabListener = (event: KeyboardEvent) => {
      // Catch that Tab that lands into carousel contents from
      // elsewhere, and redirect focus to the nearest focus area
      if (
        event.key === 'Tab' &&
        event.shiftKey === false &&
        event.target instanceof HTMLElement &&
        !event.target.hasAttribute('data-focus-area')
      ) {
        const selector =
          'a, button, input, select, textarea, [data-focus-area-entry]'
        const elements = Array.from(
          document.querySelectorAll<HTMLElement>(selector)
        ).filter(
          (element) =>
            element.tabIndex !== -1 ||
            element === event.target ||
            element.hasAttribute('data-focus-area-entry')
        )

        // Find first entry guard
        const firstEntryIndex = elements.findIndex((el) =>
          el.hasAttribute('data-focus-area-entry')
        )

        if (elements.indexOf(event.target) + 1 === firstEntryIndex) {
          event.preventDefault()
          lastUsedFocusArea.current?.focus()
        }
      }

      // Catch that Shift + Tab that lands into carousel contents from
      // elsewhere, and redirect focus to the nearest focus area
      if (
        event.key === 'Tab' &&
        event.shiftKey &&
        event.target instanceof HTMLElement &&
        !event.target.hasAttribute('data-focus-area')
      ) {
        const selector =
          'a, button, input, select, textarea, [data-focus-area-exit]'
        const elements = Array.from(
          document.querySelectorAll<HTMLElement>(selector)
        ).filter(
          (element) =>
            element.tabIndex !== -1 ||
            element === event.target ||
            element.hasAttribute('data-focus-area-exit')
        )

        // Find last exit guard
        elements.reverse()
        const lastExit = elements.find((el) =>
          el.hasAttribute('data-focus-area-exit')
        )
        elements.reverse()
        const lastExitIndex = elements.indexOf(lastExit)

        if (elements.indexOf(event.target) - 1 === lastExitIndex) {
          event.preventDefault()
          lastUsedFocusArea.current?.focus()
        }
      }
    }

    document.addEventListener('keydown', tabListener)
    return () => document.removeEventListener('keydown', tabListener)
  }, [])

  return (
    <Box css={{ position: 'relative' }}>
      <Carousel>
        <CarouselSlideList
          css={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: 'min-content',
            ox: 'auto',
            oy: 'hidden',
            py: '$1',
            WebkitOverflowScrolling: 'touch',

            // Gap between slides
            $$gap: '$space$5',

            // calculate the left padding to apply to the scrolling list
            // so that the carousel starts aligned with the container component
            // the "1145" and "$5" values comes from the <Container /> component
            // '$$scroll-padding': 'calc(50% - 50rem - 1.5 * $$gap)',
            // max($$gap, calc((100% - 1145px) / 2 + $$gap))
            // pl: '$$scroll-padding',
            pl: '$$gap',

            // hide scrollbar
            MsOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            },

            // Can't have nice grid gap because Safari butchers scroll padding with it
            '& > *': {
              pr: '$$gap'
            }
          }}>
          {props.articles.map((article: ArticleType, index: number) => (
            <CarouselSlide key={index}>
              <ArticleCard article={article} />
            </CarouselSlide>
          ))}
        </CarouselSlideList>
        <Box
          css={{
            position: 'absolute',
            top: 'calc(50% - $7)',
            left: '15px'
          }}>
          <CarouselPrevious
            aria-label="Show previous demo"
            tabIndex={-1}
            as={CarouselArrowButton}>
            <CaretLeft />
          </CarouselPrevious>
        </Box>
        <Box
          css={{
            position: 'absolute',
            top: 'calc(50% - $7)',
            right: '15px'
          }}>
          <CarouselNext
            aria-label="Show next demo"
            tabIndex={-1}
            as={CarouselArrowButton}>
            <CaretRight />
          </CarouselNext>
        </Box>
      </Carousel>
    </Box>
  )
}

const [CarouselProvider, useCarouselContext] = createContext<{
  _: any
  slideListRef: React.RefObject<HTMLElement>
  onNextClick(): void
  onPrevClick(): void
  nextDisabled: boolean
  prevDisabled: boolean
}>('Carousel')

export const Carousel = (props) => {
  const ref = useRef<React.ElementRef<typeof Box>>(null)
  const { children, ...carouselProps } = props
  const slideListRef = useRef<HTMLElement>(null)
  const [_, force] = useState({})
  const [nextDisabled, setNextDisabled] = useState(false)
  const [prevDisabled, setPrevDisabled] = useState(true)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()
  const navigationUpdateDelay = useRef(100)
  useEffect(() => smoothscroll.polyfill(), [])

  const getSlideInDirection = useCallbackRef((direction: 1 | -1) => {
    const slides = ref.current?.querySelectorAll<HTMLElement>(
      '[data-slide-intersection-ratio]'
    )
    if (slides) {
      const slidesArray = Array.from(slides.values())

      if (direction === 1) {
        slidesArray.reverse()
      }

      return slidesArray.find(
        (slide) => slide.dataset.slideIntersectionRatio !== '0'
      )
    } 
  })

  const handleNextClick = useCallback(() => {
    const nextSlide = getSlideInDirection(1)

    if (nextSlide) {
      const { scrollLeft, scrollWidth, clientWidth } = slideListRef.current
      const itemWidth = nextSlide.clientWidth
      const itemsToScroll =
        itemWidth * 2.5 < document.documentElement.offsetWidth ? 2 : 1
      const nextPos =
        Math.floor(scrollLeft / itemWidth) * itemWidth +
        itemWidth * itemsToScroll
      slideListRef.current.scrollTo({ left: nextPos, behavior: 'smooth' })

      // Disable previous & next buttons immediately
      setPrevDisabled(nextPos <= 0)
      setNextDisabled(scrollWidth - nextPos - clientWidth <= 0)
      // Wait for scroll animation to finish before the buttons *might* show up again
      navigationUpdateDelay.current = 500
    }
  }, [getSlideInDirection, setPrevDisabled])

  const handlePrevClick = useCallback(() => {
    const prevSlide = getSlideInDirection(-1)
    if (prevSlide) {
      const { scrollLeft, scrollWidth, clientWidth } = slideListRef.current
      const itemWidth = prevSlide.clientWidth
      const itemsToScroll =
        itemWidth * 2.5 < document.documentElement.offsetWidth ? 2 : 1
      const nextPos =
        Math.ceil(scrollLeft / itemWidth) * itemWidth -
        itemWidth * itemsToScroll
      slideListRef.current.scrollTo({ left: nextPos, behavior: 'smooth' })

      // Disable previous & next buttons immediately
      setPrevDisabled(nextPos <= 0)
      setNextDisabled(scrollWidth - nextPos - clientWidth <= 0)
      // Wait for scroll animation to finish before the buttons *might* show up again
      navigationUpdateDelay.current = 500
    }
  }, [getSlideInDirection, setPrevDisabled])

  useEffect(() => {
    // Keep checking for whether we need to disable the navigation buttons, debounced
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      requestAnimationFrame(() => {
        if (slideListRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = slideListRef.current
          setPrevDisabled(scrollLeft <= 0)
          setNextDisabled(scrollWidth - scrollLeft - clientWidth <= 0)
          navigationUpdateDelay.current = 100
        }
      })
    }, navigationUpdateDelay.current)
  })

  useEffect(() => {
    const slidesList = slideListRef.current
    if (slidesList) {
      const handleScrollStartAndEnd = debounce(() => force({}), 100, {
        leading: true,
        trailing: true
      })
      slidesList.addEventListener('scroll', handleScrollStartAndEnd)
      window.addEventListener('resize', handleScrollStartAndEnd)
      force({})
      return () => {
        slidesList.removeEventListener('scroll', handleScrollStartAndEnd)
        window.removeEventListener('resize', handleScrollStartAndEnd)
      }
    }
  }, [slideListRef])

  return (
    <CarouselProvider
      _={_}
      nextDisabled={nextDisabled}
      prevDisabled={prevDisabled}
      slideListRef={slideListRef}
      onNextClick={handleNextClick}
      onPrevClick={handlePrevClick}>
      <Box {...carouselProps} ref={ref}>
        {children}
      </Box>
    </CarouselProvider>
  )
}

export const CarouselSlideList = (props) => {
  const context = useCarouselContext('CarouselSlideList')
  const ref = React.useRef<React.ElementRef<typeof Box>>(null)
  const composedRefs = useComposedRefs(ref, context.slideListRef)
  const [dragStart, setDragStart] = React.useState(null)

  const handleMouseMove = useCallbackRef((event) => {
    if (ref.current) {
      const distanceX = event.clientX - dragStart.pointerX
      ref.current.scrollLeft = dragStart.scrollX - distanceX
    }
  })

  const handleMouseUp = useCallbackRef(() => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
    setDragStart(null)
  })

  return (
    <Box
      {...props}
      ref={composedRefs}
      data-state={dragStart ? 'dragging' : undefined}
      onMouseDownCapture={composeEventHandlers(
        props.onMouseDownCapture,
        (event: MouseEvent) => {
          // Drag only if main mouse button was clicked
          if (event.button === 0) {
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
            setDragStart({
              scrollX: (event.currentTarget as HTMLElement).scrollLeft,
              pointerX: event.clientX
            })
          }
        }
      )}
      onPointerDown={composeEventHandlers(
        props.onPointerDown,
        (event: PointerEvent) => {
          const element = event.target as HTMLElement
          element.style.userSelect = 'none'
          element.setPointerCapture(event.pointerId)
        }
      )}
      onPointerUp={composeEventHandlers(
        props.onPointerUp,
        (event: PointerEvent) => {
          const element = event.target as HTMLElement
          element.style.userSelect = ''
          element.releasePointerCapture(event.pointerId)
        }
      )}
    />
  )
}

export const CarouselSlide = (props) => {
  const { as: Comp = Box, ...slideProps } = props
  const context = useCarouselContext('CarouselSlide')
  const ref = useRef<React.ElementRef<typeof Box>>(null)
  const [intersectionRatio, setIntersectionRatio] = useState(0)
  const isDraggingRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersectionRatio(entry.intersectionRatio),
      { root: context.slideListRef.current, threshold: [0, 0.5, 1] }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [context.slideListRef])

  return (
    <Comp
      {...slideProps}
      ref={ref}
      data-slide-intersection-ratio={intersectionRatio}
      onDragStart={(event) => {
        event.preventDefault()
        isDraggingRef.current = true
      }}
      onClick={(event) => {
        if (isDraggingRef.current) {
          event.preventDefault()
        }
      }}
    />
  )
}

export const CarouselNext = (props) => {
  const { as: Comp = 'button', ...nextProps } = props
  const context = useCarouselContext('CarouselNext')
  return (
    <Comp
      {...nextProps}
      onClick={() => context.onNextClick()}
      disabled={context.nextDisabled}
    />
  )
}

export const CarouselPrevious = (props) => {
  const { as: Comp = 'button', ...prevProps } = props
  const context = useCarouselContext('CarouselPrevious')
  return (
    <Comp
      {...prevProps}
      onClick={() => context.onPrevClick()}
      disabled={context.prevDisabled}
    />
  )
}

const CarouselArrowButton = styled('button', {
  unset: 'all',
  outline: 0,
  margin: 0,
  border: 0,
  padding: 0,
  length: 0,

  display: 'flex',
  position: 'relative',
  zIndex: 1,
  ai: 'center',
  jc: 'center',
  bc: '$panel',
  br: '$round',
  width: '$7',
  height: '$7',
  color: '$hiContrast',

  boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px',
  willChange: 'transform, box-shadow, opacity',
  transition: 'all 100ms',

  '@hover': {
    '&:hover': {
      boxShadow:
        '$colors$blackA10 0px 3px 16px -5px, $colors$blackA5 0px 1px 3px',
      transform: 'translateY(-1px)',

      // Fix a bug when hovering at button edges would cause the button to jitter because of transform
      '&::before': {
        content: '',
        inset: -2,
        br: '$round',
        position: 'absolute'
      }
    }
  },
  '&:focus': {
    boxShadow: `
      $colors$blackA10 0px 3px 16px -5px,
      $colors$blackA5 0px 1px 3px,
      $colors$blue8 0 0 0 2px
    `,
    transform: 'translateY(-1px)'
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px'
  },
  '&:active:not(:focus)': {
    boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px'
  },
  '&:active': {
    transform: 'none',
    transition: 'opacity 100ms'
  },
  '&:disabled': {
    opacity: 0
  },
  '@media (hover: none) and (pointer: coarse)': {
    display: 'none'
  }
})
