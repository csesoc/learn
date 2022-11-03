import { Card } from '@modulz/design-system'
import ArticleLayout from 'components/ArticleLayout'
import { ProblemCard } from 'components/ProblemCard'
import { Tag } from 'components/Tag'
import { allCourseRevisionOfferings, allCourseRevisionExercises, CourseRevisionExercise, allBlockContents } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'

export async function getStaticPaths() {
  const paths = allCourseRevisionOfferings.map((o) => ({ params: { course_offering: o.slug } }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  console.log(params.course_offering);
  const headerContent = allCourseRevisionOfferings.find(
    (c) => c.slug === params.course_offering
  )

  return {
    props: {
      exercises: allCourseRevisionExercises.sort((a, b) => a.difficulty - b.difficulty),
      headerContent
    }
  }
}

const ExercisesPage = ({
  exercises,
  headerContent
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const MDXContent = useMDXComponent(headerContent.body.code)

  return (
    <main>
      <ArticleLayout>
        <MDXContent />
        {exercises?.map((exercise) => (
          <Link href={`course-revision/${router.query.course_offering}/${exercise.slug}`} passHref key={exercise.slug}>
            <ProblemCard>
              <h1>{exercise.title}</h1>
              <Tag>Pain score: {exercise.difficulty} 💀</Tag>
              <p>{exercise.desc}</p>
            </ProblemCard>
          </Link>
        ))}
      </ArticleLayout>
    </main>
  )
}

export default ExercisesPage
