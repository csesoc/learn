import { Flex } from './Flex'
import { Text } from './Text'

export default function Footer() {
  return (
    <Flex
      as="footer"
      direction="column"
      justify="center"
      align="center"
      css={{ width: '100%', marginTop: '$8', marginBottom: '$6' }}>
      <Text
        css={{
          color: '$slate10',
          marginBottom: '$4'
        }}>
        MIT Licensed • Made with ❤ by CSESoc Education
      </Text>
      <Text
        css={{
          color: '$slate10'
        }}>
        {new Date().getFullYear()}, Sydney
      </Text>
    </Flex>
  )
}
