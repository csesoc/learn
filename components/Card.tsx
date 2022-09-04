import { styled } from 'stitches.config'

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '28em',
  padding: '$6 $5',
  maxWidth: '24rem',
  boxShadow: '$default',
  background: '$slate1',
  borderRadius: '$lg'
})

export const CardSmall = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  minWidth: '12rem',
  maxWidth: '12rem',
  marginTop: '2em',
  marginInline: '0.5em',
  padding: '$4',
  height: '15em',
  color: '$slate12',
  background: '$blue4',
  borderRadius: '$sm',
  lineHeight: '1.3rem',
  boxShadow: "0px 0px 39px -32px rgba(0,0,0,0.54)"
})
