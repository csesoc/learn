import { Children, cloneElement, ReactElement, ReactNode } from 'react'
import { styled } from '../stitches.config'
import { Flex } from './Flex'
import Answer from './MultiChoiceAnswer'
import Explanation from './MultiChoiceExplanation'
import Question from './MultiChoiceQuestion'

const MultiChoiceBase = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$slate1',
  padding: '$2 $6 $6',
  borderRadius: '16px',
  margin: '$6 0 $6',
  boxShadow: '0px 4px 55px -42px rgba(0,0,0,0.74)',
})

interface MultiChoiceProps {
  children: ReactNode
}

const MultiChoice = ({ children }: MultiChoiceProps) => {
  const childrenArray = Children.toArray(children) as ReactElement[]
  const question = childrenArray.find(
    (child) => child.type === MultiChoice.Question
  )
  const answers = childrenArray
    .filter((child) => child.type === MultiChoice.Answer)
    // assign answer a number based on order, shown as a number circle
    .map((answer, index) => cloneElement(answer, { answerNum: index + 1 }))

  return (
    <MultiChoiceBase>
      {question}
      <Flex direction="column">{answers}</Flex>
    </MultiChoiceBase>
  )
}

MultiChoice.Question = Question
MultiChoice.Answer = Answer
MultiChoice.Explanation = Explanation

export default MultiChoice
