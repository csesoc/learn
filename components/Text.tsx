// Based off https://github.com/radix-ui/design-system/blob/master/components/Text.tsx

import { styled } from '@stitches/react'

export const Text = styled('span', {
  // Reset
  margin: '0',
  fontWeight: 400,
  fontFamily: '$sans',
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      display: {
        fontSize: '$display',
        letterSpacing: '-0.022rem',
        lineHeight: '56px'
      },
      headline: {
        fontSize: '$headline',
        letterSpacing: '-0.021rem',
        lineHeight: '42px'
      },
      'title-lg': {
        fontSize: '$title-lg',
        letterSpacing: '-0.019rem',
        lineHeight: '34px'
      },
      'title-md': {
        fontSize: '$title-md',
        letterSpacing: '-0.017rem',
        lineHeight: '28px'
      },
      'title-sm': {
        fontSize: '$title-sm',
        letterSpacing: '-0.014rem',
        lineHeight: '25px'
      },
      'label-lg': {
        fontSize: '$label-lg',
        letterSpacing: '-0.011rem',
        lineHeight: '22px'
      },
      'label-md': {
        fontSize: '$label-md',
        letterSpacing: '-0.006rem',
        lineHeight: '20px'
      },
      'label-sm': {
        fontSize: '$label-sm',
        letterSpacing: '-0.003rem',
        lineHeight: '18px'
      },
      'body': {
        fontSize: '$body',
        letterSpacing: '-0.011rem',
        lineHeight: '1.8rem'
      },
      'subtitle': {
        fontSize: '$body',
        letterSpacing: '-0.011rem',
        lineHeight: '1.8rem'
      },
      'info': {
        fontSize: '$body',
        letterSpacing: '-0.011rem',
        lineHeight: '1.7rem'
      },
    }
  }
})
