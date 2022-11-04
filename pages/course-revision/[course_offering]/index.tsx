import { Card } from '@modulz/design-system'
import ArticleLayout from 'components/ArticleLayout'
import { Button } from 'components/Button'
import { ProblemCard } from 'components/ProblemCard'
import { Tag } from 'components/Tag'
import { allCourseRevisionOfferings, allCourseRevisionExercises } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { ArrowLeft } from 'phosphor-react'

export async function getStaticPaths() {
  const paths = allCourseRevisionOfferings.map((o) => ({ params: { course_offering: o.slug, course: o.course } }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const courseOfferingContent = allCourseRevisionOfferings.find(
    (c) => c.slug === params.course_offering
  )

  // const courseRevisionExercises = allCourseRevisionExercises.filter((e) => e.course === params.course_offering)

  return {
    props: {
      exercises: allCourseRevisionExercises.sort((a, b) => a.difficulty - b.difficulty),
      courseOfferingContent
    }
  }
}

const ExercisesPage = ({
  exercises,
  courseOfferingContent
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const MDXContent = useMDXComponent(courseOfferingContent.body.code)

  return (
    <main>
      <ArticleLayout>
        <Link href={`/course-revision`}>
          <Button css={{ padding: '3px 14px', borderRadius: '100vh', width: "fit-content" }}>
            <ArrowLeft />Back
          </Button>
        </Link>
        <MDXContent />
        {exercises?.map((exercise) => (
          <Link href={`${router.query.course_offering}/${exercise.slug}`} passHref key={exercise.slug}>
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
