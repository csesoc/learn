import { Article } from 'contentlayer/generated'
import { Box } from './Box'
import { Card } from './Card'
import { Text } from './Text'
import { Flex } from './Flex'
import Link from 'next/link'
import Image from 'next/image'
import Avatar from 'boring-avatars'
import { format, parseISO } from 'date-fns'
import { Tag } from 'components/Tag'

interface Props {
  article: Article
}

const ArticleCard = ({ article }: Props) => {
  return (
    <Link href={`/articles/${article.slug}`}>
      <Card
        css={{
          overflow: 'hidden',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '$slate3'
          }
        }}>
        <Box css={{ margin: '-$6 -$5 $5 -$6' }}>
          <Image
            src={
              article.coverPhoto
                ? article.coverPhoto
                : '/images/defaultCoverPhoto.png'
            }
            width="700"
            height="250"
            objectFit="cover"
          />
        </Box>

        <Flex
          css={{
            flexDirection: 'row',
            paddingTop: '$2',
            gap: '$2'
          }}>
          <Text size="label-md" css={{ color: '$slate11' }}>
            {format(parseISO(article.date), 'LLL d, yyy')} ⸱{' '}
            {article.readingTime.text}
          </Text>
        </Flex>
        <Text
          size="title-md"
          css={{ color: '$slate12', fontWeight: '600', paddingTop: '$2' }}>
          {article.title}
        </Text>
        <Text size="label-lg" css={{ color: '$slate12', paddingTop: '$1' }}>
          {article.desc}
        </Text>
        <Flex
          css={{
            flexDirection: 'row',
            gap: '0.75rem',
            alignItems: 'center',
            paddingTop: '$5',
            flexWrap: 'wrap'
          }}>
          <Avatar
            size={28}
            name={article.author}
            variant="beam"
            colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
          />
          <Text size="label-md" css={{ color: '$slate12' }}>
            {article.author}
          </Text>
          {article.tags &&
            article.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </Flex>
      </Card>
    </Link>
  )
}

export default ArticleCard
