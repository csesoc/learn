import { styled } from '../stitches.config'

export const Button = styled('button', {
  backgroundColor: '$blue4',
  fontSize: '$label-lg',
  fontWeight: '500',
  fontFamily: '$sans',
  color: '$blue12',
  transition: 'background-color 150ms ease',
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
