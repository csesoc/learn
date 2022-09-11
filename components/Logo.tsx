import { styled } from '../stitches.config'
import { VersionBadge } from './VersionBadge'

const LogoPrimitive = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$3',
  '& path': {
    fill: '$blue9'
  },
  '& span': {
    fontSize: '$label-lg',
    fontWeight: '500',
    color: '$blue12',
    fontFamily: '$sans'
  }
})

export default function Logo() {
  return (
    <LogoPrimitive>
      {' '}
      <svg
        width="19"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="logo-glyph"
      >
        <path d="M7.06 16.66V20l11.332-.016V16.66H7.06ZM0 0v4.143l5.728 2.245L0 8.6v4.16l11.027-4.77V4.786" />
      </svg>
      <span>Learn</span>
      {/* <VersionBadge>Beta</VersionBadge> */}
    </LogoPrimitive>
  )
}
