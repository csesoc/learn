import { styled } from '../stitches.config'
import { Lightbulb, Warning } from 'phosphor-react'
import { Flex } from './Flex'

const CalloutBase = styled('div', {
  display: 'flex',
  padding: '$5',
  justifyItems: 'start',
  borderRadius: '$sm',
  variants: {
    type: {
      note: {
        backgroundColor: '$grass4',
        color: '$grass12'
      },
      warning: {
        backgroundColor: '$amber4',
        color: '$amber12'
      }
    }
  }
})

interface Props {
  type: 'note' | 'warning'
  children?: React.ReactNode
}

export default function Callout({ type, children }: Props) {
  return (
    <CalloutBase type={type}>
      <Flex
        css={{
          flexDirection: 'row',
          gap: '$2'
        }}>
        <p>{renderIcon(type)}</p>
        {children}
      </Flex>
    </CalloutBase>
  )
}

function renderIcon(type: Props['type']) {
  switch (type) {
    case 'note':
      return <Lightbulb />
    case 'warning':
      return <Warning />
    default:
      return null
  }
}
