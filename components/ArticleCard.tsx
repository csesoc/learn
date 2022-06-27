import { Article } from 'contentlayer/generated'
import { Box } from './Box'
import { Card } from './Card'
import { Text } from './Text'
import { Flex } from './Flex'
import Image from 'next/image'

interface Props {
  article: Article
}

const ArticleCard = ({ article }: Props) => {
  return (
    <Card
      css={{
        overflow: 'hidden',
        marginRight: '$8'
      }}>
      {article.coverPhoto ? (
        <Box
          css={{
            position: 'relative',
            width: '100%',
            height: '50%',
            marginBottom: '$3'
          }}>
          <Image
            src={article.coverPhoto}
            alt={article.title}
            layout="fill"
            objectFit="cover"
          />
        </Box>
      ) : (
        <Flex
          justify="center"
          align="center"
          css={{
            position: 'relative',
            width: '100%',
            height: '50%',
            marginBottom: '$3',
            backgroundColor: '$blue10'
          }}>
          <Text
            size="title-sm"
            css={{
              color: '$slate1'
            }}>
            :D
          </Text>
        </Flex>
      )}
      <Box
        css={{
          padding: '$2'
        }}>
        <Text
          as="h3"
          size="label-md"
          css={{
            marginBottom: '$1',
            color: '$slate10'
          }}>
          {article.date} • {article.readingTime.text}
        </Text>
        <Text
          as="h2"
          size="title-lg"
          css={{
            fontWeight: 500
          }}>
          {article.title}
        </Text>
      </Box>
    </Card>
  )
}

export default ArticleCard
