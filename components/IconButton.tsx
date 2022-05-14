import React from 'react'
import { styled } from 'stitches.config'

// Do similar to Chakra UI
export const IconButton = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$slate4',
  padding: '10px 10px 10px 10px',
  width: 'max-content',
  borderRadius: '$full',
  cursor: 'pointer',
  transition: '$button',
  '& svg': {
    fill: '$slate12',
    width: '20px'
  },
  '&:hover': {
    backgroundColor: '$slate5'
  }
})
