import Avatar from 'boring-avatars'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { Tag } from 'components/Tag'
import { ArticleType } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'
import { Box } from './Box'

export function ArticleRow(article: ArticleType) {
  return (
    <Flex css={{
      py: '$4',
      "@media (max-width: 768px)": {
        flexDirection: "column-reverse",

      }
    }}>
      <Flex direction="column" justify="between" css={{ flexGrow: '4' }}>
        <Flex
          css={{
            flexDirection: 'row',
            paddingTop: '$2',
            "@media (min-width: 768px)": {
              gap: '$2'
            }
          }}>
          <Text size="label-md" css={{ color: '$slate11' }}>
            {format(parseISO(article.date), 'LLL d, yyy')} ⸱{' '}
            {article.readingTime.text}
          </Text>
          {article.tags &&
            article.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </Flex>

        <Text
          size="title-md"
          css={{ color: '$slate12', fontWeight: '600', paddingTop: '$2' }}>
          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
        </Text>
        <Text size="label-lg" css={{ color: '$slate12', paddingTop: '$1' }}>
          {article.desc}
        </Text>
        <Flex
          css={{
            flexDirection: 'row',
            gap: '0.75rem',
            alignItems: 'center',
            paddingTop: '$5'
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
        </Flex>
      </Flex>
      <Box
        css={{
          // flexGrow: '3',
          minHeight: '150px',
          height: '100%',
          maxHeight: '220px',
          position: 'relative',
          "@media (min-width: 768px)": {
            marginLeft: '1rem',
            width: '40%',
            maxWidth: '600px',
          }
        }} >
        <Image
          src={
            article.coverPhoto
              ? article.coverPhoto
              : '/images/defaultCoverPhoto.png'
          }
          style={{ borderRadius: '20px' }}
          objectFit="cover"
          layout="fill"
          alt={article.title}
        />
      </Box>
    </Flex >
  )
}
