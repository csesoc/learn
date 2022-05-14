import { styled } from '../stitches.config'

export const VersionBadge = styled('div', {
  display: 'flex',
  width: 'max-content',
  padding: '0.125rem 0.5rem 0.125rem 0.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'solid',
  borderWidth: '1px',
  borderRadius: '$full',
  borderColor: '$slate8',
  fontSize: '$label-sm',
  fontWeight: '500',
  color: '$slate11',
  fontFamily: '$sans'
})
