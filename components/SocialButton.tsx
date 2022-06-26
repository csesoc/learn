import { styled } from '@stitches/react'
export const SocialButton = styled('button', {
  fontSize: '$label-lg',
  fontWeight: '500',
  fontFamily: '$sans',
  letterSpacing: '-0.011rem',
  lineHeight: '22px',
  color: '$blue12',
  display: 'flex',
  cursor: 'pointer',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '$2',
  transition: '$button',
  border: 'none',
  padding: '$4',
  borderRadius: '5rem',
  minWidth: '20rem',
  variants: {
    type: {
      discord: {
        backgroundColor: '$violet6',
        '&:hover': {
          backgroundColor: '$violet5'
        }
      },
      facebook: {
        backgroundColor: '$indigo6',
        '&:hover': {
          backgroundColor: '$indigo5'
        }
      },
      instagram: {
        backgroundColor: '$pink6',
        '&:hover': {
          backgroundColor: '$pink5'
        }
      }
    }
  }
})
