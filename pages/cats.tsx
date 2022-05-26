import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { Button } from 'components/Button'
import { NextPage } from 'next'
import { ArrowRight, Cat } from 'phosphor-react'
import { IconButton } from 'components/IconButton'
import { Tag } from 'components/Tag'
import Image from 'next/image'

const Cats: NextPage = () => {
  return (
    <Flex css={{ flexDirection: 'column', alignItems: 'center', gap: '$4' }}>
      <Button size="default">
        Join CSESoc
        <ArrowRight weight="bold" />
      </Button>
      <Text size="label-sm" css={{ fontWeight: 600 }}>
        I love cats.
      </Text>
      <IconButton>
        <Cat weight="fill" />
      </IconButton>
      <Tag>Python</Tag>
      <Image
        src="/cat.jpeg"
        width="300"
        height="200"
        alt="Picture of a cute cat"
      />
    </Flex>
  )
}

export default Cats
