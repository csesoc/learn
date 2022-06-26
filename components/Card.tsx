import { styled } from 'stitches.config'

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '20rem',
  maxWidth: '20rem',
  cursor: 'pointer',
  height: '25em',
  boxShadow: '$default',
  background: '$slate1',
  borderRadius: '$lg'
})
