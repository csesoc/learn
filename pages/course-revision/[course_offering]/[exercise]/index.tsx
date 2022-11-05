import Avatar from 'boring-avatars'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { allCourseRevisionOfferings, allCourseRevisionExercises } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Head from 'next/head'
import Image from 'next/image'
import { Box } from 'components/Box'
import Callout from 'components/Callout'
import FileName from 'components/Filename'
import Centerer from 'components/Centerer'
import MultiChoice from 'components/MultiChoice'
import Link from 'next/link'
import { ArrowDown, ArrowLeft } from 'phosphor-react'
import ArticleLayout from 'components/ArticleLayout'
import { Button } from 'components/Button'
import { useRouter } from 'next/router'
import CourseRevisionSidebar from 'components/CourseRevisionSidebar'

const defaultComponents = {
  Image,
  Callout,
  FileName,
  Centerer,
  MultiChoice,
  Link,
  ArrowDown
}

// Add any components used in MDX files here.
// Components here load dynamically if they're used.
// See https://github.com/tsriram/with-mdx-bundler for details.
const components = { ...defaultComponents }

export async function getStaticPaths() {
  const paths = []
  allCourseRevisionOfferings.forEach((o) => {
    allCourseRevisionExercises.forEach((e) => {
      paths.push({ params: { course_offering: o.slug, exercise: e.slug } })
    })
  })
  console.log("paths: ", paths);

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const exercisesContent = allCourseRevisionExercises.filter((e) => e._raw.sourceFileDir.endsWith(params.course_offering)).sort((a, b) => a.difficulty - b.difficulty)
  const exerciseIdx = exercisesContent.findIndex((e) => e.slug === params.exercise)
  return {
    props: {
      courseOfferingContent: allCourseRevisionOfferings.find((c) => c.slug === params.course_offering),
      exercisesContent,
      exerciseIdx,
    }
  }
}

const ExercisePage = ({ courseOfferingContent, exercisesContent, exerciseIdx }) => {
  const MDXContent = useMDXComponent(exercisesContent[exerciseIdx].body.code)

  return (
    <ArticleLayout style={{
      maxWidth: '1018px',
    }}>
      <CourseRevisionSidebar contentList={[courseOfferingContent, ...exercisesContent]} currentContentIdx={exerciseIdx + 1} />
      <div style={{
        marginLeft: "266px",
      }}>
        <MDXContent components={components} />
      </div>
    </ArticleLayout >
  )
}

export default ExercisePage
