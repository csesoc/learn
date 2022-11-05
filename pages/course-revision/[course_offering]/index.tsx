import { Card } from '@modulz/design-system'
import ArticleLayout from 'components/ArticleLayout'
import { Button } from 'components/Button'
import CourseRevisionSidebar from 'components/CourseRevisionSidebar'
import { ProblemCard } from 'components/ProblemCard'
import { Tag } from 'components/Tag'
import { allCourseRevisionOfferings, allCourseRevisionExercises, CourseRevisionOffering } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { ArrowLeft } from 'phosphor-react'
import { useEffect, useState } from 'react'

export async function getStaticPaths() {
  const paths = allCourseRevisionOfferings.map((o) => ({ params: { course_offering: o.slug } }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const courseOfferingContent = allCourseRevisionOfferings.find(
    (c) => c.slug === params.course_offering
  )

  return {
    props: {
      exercisesContent: allCourseRevisionExercises.filter((e) => e._raw.sourceFileDir.endsWith(params.course_offering)).sort((a, b) => a.difficulty - b.difficulty),
      courseOfferingContent
    }
  }
}

const ExercisesPage = ({
  exercisesContent,
  courseOfferingContent
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const MDXContent = useMDXComponent(courseOfferingContent.body.code)
  // const exercisesMDXContent = [useMDXComponent(courseOfferingContent.body.code), ...exercisesContent.map((e) => useMDXComponent(e.body.code))]
  // const [content, setContent] = useState(0)
  // const [MDXContent, setMDXContent] = useState(null)

  // useEffect(() => {
  //   const content = exercisesMDXContent[0]
  //   setMDXContent(content)
  // }, [])

  // const switchExercise = (path: string) => {
  //   const exerciseContent = allCourseRevisionExercises.find((e) => e._raw.flattenedPath === path)
  //   // setContent(exerciseContent.body.code)
  //   setMDXContent(useMDXComponent(exerciseContent.body.code))
  //   router.push(path, undefined, { shallow: true })
  // }

  return (
    <main>
      <ArticleLayout style={{
        maxWidth: '1018px',
      }}>
        <CourseRevisionSidebar contentList={[courseOfferingContent, ...exercisesContent]} currentContentIdx={0} />
        <div style={{
          marginLeft: "266px",
        }}>
          <div style={{
            marginLeft: '1.4rem',
          }}>
            {MDXContent && <MDXContent />}
          </div>
          {/* {exercisesContent?.map((exercise) => (
            <Link href={`${router.query.course_offering}/${exercise.slug}`} passHref key={exercise.slug}>
            <ProblemCard>
            <h1>{exercise.title}</h1>
                <Tag>Pain score: {exercise.difficulty} 💀</Tag>
                <p>{exercise.desc}</p>
              </ProblemCard>
            </Link>
          ))} */}

        </div>
      </ArticleLayout>
    </main>
  )
}

export default ExercisesPage
