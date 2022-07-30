import { Card } from '@modulz/design-system'
import { allPuzzles } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'

export const getStaticProps = async () => {
  return {
    props: {
      puzzles: allPuzzles
    }
  }
}

const PuzzlesPage = ({
  puzzles
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main>
      <div className="title-block">
        <h1>Puzzles</h1>
        <p>
          A collection of puzzles we have written to help you practice for you
          classes!
        </p>
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
