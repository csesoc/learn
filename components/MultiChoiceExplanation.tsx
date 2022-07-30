// @ts-ignore
import React, { Children, ReactElement, ReactNode, useState } from 'react'
import { callbackify } from 'util'
import { styled } from '../stitches.config'

const ExplanationBase = styled('div', {
  color: 'grey'
})

type ExplanationProps = {
  content: ReactElement
  children: JSX.Element[]
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

  console.log('children', children)
  const traverse = (
    ele: JSX.Element[] | JSX.Element | string,
    callback: (ele: string) => void
  ) => {
    if (typeof ele === 'string') {
      // console.log("ele is string:", ele)
      callback(ele)
      return
    }
    if (Array.isArray(ele)) {
      // console.log("ele is array:", ele)
      ele.forEach((subEle) => traverse(subEle, callback))
    } else if (React.isValidElement(ele)) {
      // console.log("ele is react element:", ele)
      if (ele.props.includes('children')) {
        // Only if the props of this react element has a children prop.
        // Might not in some cases, e.g. when ele.type === "img"
        traverse((ele as JSX.Element).props.children, callback)
      }
    }
  }

  // Traverse the component tree to count total length of text.
  let textLength = 0
  traverse(children, (text) => {
    textLength += text.length
  })

  const handleOnClick = (event) => {
    // prevents collapsing the parent component
    event.stopPropagation()
    setIsExpanded((prev) => !prev)
  }

  // above collapsable threshold
  const threshold = 1000
  if ((children.length > 1 || textLength > threshold) && !isExpanded) {
    let previewTextFound = false
    let previewText = ''

    // Traverse the component tree and find the first text node.
    traverse(children, (text: string) => {
      if (!previewTextFound) {
        previewText = text
        previewTextFound = true
      }
    })

    previewText
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
