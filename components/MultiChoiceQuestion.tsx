import { Children, cloneElement, ReactElement, ReactNode } from 'react'
import { styled } from '../stitches.config'

const QuestionBase = styled('div', {
  borderBottom: '1px solid grey'
})

type QuestionProps = {
  children: ReactNode
}

const Question = ({ children }: QuestionProps) => {
  // a clone of children, except the images are centred
  const childrenWithCenteredImages = Children.map(
    children as ReactElement[],
    (child) => {
      if (childIsType(child, 'img')) {
        return cloneElement(child, { align: 'center' })
      }
      return child
    }
  )

  return <QuestionBase>{childrenWithCenteredImages}</QuestionBase>
}

export default Question

// recursively checks if an element or any of its children is the given type
const childIsType = (child: ReactElement, type: string): boolean => {
  if (child == null) {
    return false
  }
  const isType = childIsType(child.props?.children, type)
  if (child.type === type) {
    return true
  }
  return isType
}
