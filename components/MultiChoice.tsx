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
  padding: '0 $3 $3',
  borderRadius: '8px',
  margin: '$3 0 $3'
})

interface MultiChoiceProps {
  children: ReactNode
}

const MultiChoice = ({ children }: MultiChoiceProps) => {
  const array = Children.toArray(children) as ReactElement[]
  const question = array.find((child) => child.type === MultiChoice.Question)
  const answers = array
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
