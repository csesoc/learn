import { Card } from '@modulz/design-system'
import { styled } from '@stitches/react'
import ArticleLayout from 'components/ArticleLayout'
import { Button } from 'components/Button'
import ContentContainer from 'components/course-revision/ContentContainer'
import CourseRevisionSidebar from 'components/course-revision/CourseRevisionSidebar'
import { ProblemCard } from 'components/ProblemCard'
import { Tag } from 'components/Tag'
import { Text } from 'components/Text'
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
  const MDXContent = useMDXComponent(courseOfferingContent.body.code)

  return (
    <main>
      <ArticleLayout style={{
        maxWidth: '1018px',
      }}>
        <CourseRevisionSidebar courseOfferingTitle={courseOfferingContent.title} courseOfferingContent={courseOfferingContent} contentList={exercisesContent} currentContentIdx={-1} />
        <ContentContainer>
          {MDXContent && <Text><MDXContent /></Text>}
          {/* {exercisesContent?.map((exercise) => (
            <Link href={`${router.query.course_offering}/${exercise.slug}`} passHref key={exercise.slug}>
            <ProblemCard>
            <h1>{exercise.title}</h1>
                <Tag>Pain score: {exercise.difficulty} 💀</Tag>
                <p>{exercise.desc}</p>
              </ProblemCard>
            </Link>
          ))} */}

        </ContentContainer>
      </ArticleLayout>
    </main>
  )
}

export default ExercisesPage

