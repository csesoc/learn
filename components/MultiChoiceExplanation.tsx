import { Children, ReactElement, ReactNode, useState } from 'react'
import { styled } from '../stitches.config'

const ExplanationBase = styled('div', {
  color: 'grey'
})

type ExplanationProps = {
  content: ReactElement
  children: ReactNode
}

const Explanation = ({ content, children }: ExplanationProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  // content is used for short explanations
  // long explanations use the children prop
  if (content) {
    return (
      <ExplanationBase>
        <p>{content}</p>
      </ExplanationBase>
    )
  }

  const paragraphs = Children.toArray(children) as ReactElement[]
  const textLength = paragraphs.reduce(
    (prev, child) => prev + child.props.children.length,
    0
  )

  const handleOnClick = (event) => {
    // prevents collapsing the parent component
    event.stopPropagation()
    setIsExpanded((prev) => !prev)
  }

  // above collapsable threshold
  const threshold = 500
  if ((paragraphs.length > 1 || textLength > threshold) && !isExpanded) {
    const previewText = paragraphs[0].props.children
      .substring(0, threshold)
      // trims all non-letter characters from end of string
      // this ensures the truncated paragraph looks good with the ellipsis (...)
      .replace(/[^a-z]+$/gi, '')

    return (
      <ExplanationBase>
        <p>
          {previewText}
          {'... '}
          <a onClick={(event) => handleOnClick(event)}>Read more</a>
        </p>
      </ExplanationBase>
    )
  }

  return <ExplanationBase>{children}</ExplanationBase>
}

export default Explanation
