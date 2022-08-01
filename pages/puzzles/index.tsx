import { Card } from '@modulz/design-system'
import { Tag } from 'components/Tag'
import { allPuzzles, allBlockContents } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'

export const getStaticProps = async () => {
  const headerContent = allBlockContents.find(
    (c) => c.slug === 'puzzles-header'
  )
  return {
    props: {
      puzzles: allPuzzles.sort((a, b) => a.difficulty - b.difficulty),
      headerContent
    }
  }
}

const PuzzlesPage = ({
  puzzles,
  headerContent
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXContent = useMDXComponent(headerContent.body.code)

  return (
    <main>
      <div className="title-block">
        <MDXContent />
        {puzzles?.map((puzzle) => (
          <Link href={`puzzles/${puzzle.slug}`} passHref key={puzzle.slug}>
            <Card css={{ padding: '1rem' }}>
              <h1>{puzzle.title}</h1>
              <Tag>Pain score: {puzzle.difficulty} 💀</Tag>
              <p>{puzzle.desc}</p>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default PuzzlesPage
