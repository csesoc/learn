import {
  CheckCircle,
  IconProps,
  NumberCircleFive,
  NumberCircleFour,
  NumberCircleOne,
  NumberCircleThree,
  NumberCircleTwo,
  XCircle
} from 'phosphor-react'
import { Children, ReactElement, ReactNode, useState } from 'react'
import { styled } from '../stitches.config'
import { Flex } from './Flex'
import MultiChoice from './MultiChoice'

const COLOR_CORRECT = 'limegreen'
const COLOR_INCORRECT = 'tomato'

const ExplanationBase = styled('div', {
  cursor: 'pointer',
  padding: '$2',
  borderBottom: '1px solid grey',
  '&:hover': {
    backgroundColor: '$slate3'
  }
})

type AnswerProps = {
  content: ReactElement
  isCorrect: boolean
  answerNum: number
  children: ReactNode
}

const Answer = ({
  content,
  isCorrect = false,
  answerNum,
  children
}: AnswerProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const array = Children.toArray(children) as ReactElement[]
  const answer = array.filter((child) => child.type === 'p')
  const explanation = array.find(
    (child) => child.type === MultiChoice.Explanation
  )

  const handleOnClick = () => {
    setIsExpanded((prev) => !prev)
  }

  // content is used for short answers
  // long answers use the children prop
  return (
    <ExplanationBase onClick={handleOnClick}>
      <Flex direction="row" gap="3" align="center">
        {renderCircle(isExpanded ? isCorrect : answerNum)}
        {content ? <p>{content}</p> : <div>{answer}</div>}
      </Flex>
      {isExpanded && renderIsCorrect(isCorrect)}
      {isExpanded && explanation}
    </ExplanationBase>
  )
}

export default Answer

const renderIsCorrect = (isCorrect: boolean) => {
  if (isCorrect) {
    const style = { color: COLOR_CORRECT, fontWeight: 'bold' }
    return <p style={style}>Correct!</p>
  }
  // !isCorrect
  const style = { color: COLOR_INCORRECT, fontWeight: 'bold' }
  return <p style={style}>Incorrect</p>
}

const renderCircle = (circleType: boolean | number) => {
  const iconProps: IconProps = { size: '32px' }
  switch (circleType) {
    case true:
      return <CheckCircle color={COLOR_CORRECT} weight="fill" {...iconProps} />
    case false:
      return <XCircle color={COLOR_INCORRECT} weight="fill" {...iconProps} />
    case 1:
      return <NumberCircleOne {...iconProps} />
    case 2:
      return <NumberCircleTwo {...iconProps} />
    case 3:
      return <NumberCircleThree {...iconProps} />
    case 4:
      return <NumberCircleFour {...iconProps} />
    case 5:
      return <NumberCircleFive {...iconProps} />
    default:
      return <XCircle {...iconProps} />
  }
}
