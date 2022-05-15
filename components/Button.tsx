import { styled } from '../stitches.config'

export const Button = styled('button', {
  backgroundColor: '$blue4',
  fontSize: '$label-lg',
  fontWeight: '500',
  fontFamily: '$sans',
  letterSpacing: '-0.011rem',
  lineHeight: '22px',
  color: '$blue12',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  transition: '$button',
  '&:hover': {
    backgroundColor: '$blue5'
  },
  variants: {
    size: {
      default: {
        padding: '16px 24px 16px 24px',
        borderRadius: '$full'
      },
      large: {
        padding: '32px',
        borderRadius: '$md'
      }
    }
  }
})
