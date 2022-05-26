import { styled } from '../stitches.config'

const Callout = styled('div', {
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
        backgroundColor: '$amber4'
      }
    }
  }
})

export default Callout

// TODO: Make a React component wrapper for the Stitches component (i.e. return a React component
// with the Stitches component inside) that takes the type and an emoji as the
// prop, and returns the Stitches component with the emoji in the top left
// corner of the callout as per the mockup and the component children passed
// into th Stitches component

// Make sure the implementation is to the mockup spec

// Boilerplate to get started :)
// export default function Callout(type, emoji) {
//   return <CalloutBase type={type}></CalloutBase>
// }
