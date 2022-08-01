import { Card } from '@modulz/design-system'
import Callout from 'components/Callout'
import Centerer from 'components/Centerer'
import FileName from 'components/Filename'
import MultiChoice from 'components/MultiChoice'
import {
  allPuzzles,
  BlockContent,
  allBlockContents
} from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import { ArrowDown } from 'phosphor-react'

export const getStaticProps = async () => {
  const headerContent = allBlockContents.find(
    (c) => c.slug === 'puzzles-header'
  )
  return {
    props: {
      puzzles: allPuzzles,
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
      </div>
      {puzzles?.map((puzzle) => (
        <Link href={`puzzles/${puzzle.slug}`} passHref key={puzzle.slug}>
          <Card
            css={{
              margin: '1rem',
              padding: '1rem'
            }}>
            <h1>{puzzle.title}</h1>
            <p>{puzzle.desc}</p>
          </Card>
        </Link>
      ))}
    </main>
  )
}

export default PuzzlesPage
