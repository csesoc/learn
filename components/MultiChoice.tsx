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
import {
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  useState
} from 'react'
import { styled } from '../stitches.config'
import { Flex } from './Flex'

const COLOR_CORRECT = 'limegreen'
const COLOR_INCORRECT = 'tomato'

// MultiChoice component

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

// MultiChoice.Question component

const QuestionBase = styled('div', {
  borderBottom: '1px solid grey'
})

interface QuestionProps {
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

// MultiChoice.Answer component

const AnswerBase = styled('div', {
  cursor: 'pointer',
  padding: '$2',
  borderBottom: '1px solid grey',
  '&:hover': {
    backgroundColor: '$slate3'
  }
})

interface AnswerProps {
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
  const explanation = array.filter(
    (child) => child.type === MultiChoice.Explanation
  )

  const handleOnClick = () => {
    setIsExpanded((prev) => !prev)
  }

  // content is used for short answers
  // long answers use the children prop
  return (
    <AnswerBase onClick={handleOnClick}>
      <Flex direction="row" gap="3" align="center">
        {renderCircle(isExpanded ? isCorrect : answerNum)}
        {content ? <p>{content}</p> : <div>{answer}</div>}
      </Flex>
      {isExpanded && renderIsCorrect(isCorrect)}
      {isExpanded && explanation}
    </AnswerBase>
  )
}

// MultiChoice.Explanation component

const ExplanationBase = styled('div', {
  color: 'grey'
})

interface ExplanationProps {
  content: ReactElement
  children: ReactNode
}

const Explanation = ({ content, children }: ExplanationProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const paragraphs = Children.toArray(children) as ReactElement[]
  const textLength = paragraphs.reduce(
    (prev, child) => prev + child.props.children.length,
    0
  )

  // content is used for short explanations
  // long explanations use the children prop
  if (content) {
    return (
      <ExplanationBase>
        <p>{content}</p>
      </ExplanationBase>
    )
  }

  const handleOnClick = (event) => {
    // prevents collapsing the parent component
    event.stopPropagation()
    setIsExpanded((prev) => !prev)
  }

  if ((paragraphs.length > 1 || textLength > 120) && !isExpanded) {
    const previewText = paragraphs[0].props.children
      .substring(0, 120)
      // trims all non-letter characters from end of string
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

// export

MultiChoice.Question = Question
MultiChoice.Answer = Answer
MultiChoice.Explanation = Explanation

export default MultiChoice

// helpers

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
