import { Card } from '@modulz/design-system'
import { styled } from '@stitches/react'
import ArticleLayout from 'components/ArticleLayout'
import { CourseRevisionCard } from 'components/CourseRevisionCard'
import { Tag } from 'components/Tag'
import { allCourseRevisionOfferings } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'

export const getStaticProps = async ({ params }) => {
    return {
        props: {
            allCourseRevisionOfferings,
        }
    }
}

const ExercisesPage = ({
    allCourseRevisionOfferings,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter()
    return (
        <main>
            <ArticleLayout>
                {allCourseRevisionOfferings?.map((offering) => (
                    <Link href={`course-revision/${offering.slug}`} passHref key={offering.slug}>
                        <div style={{
                            backgroundColor: "#3e73c7",
                            margin: '0.6rem 0',
                            borderRadius: '1.2rem',
                        }}>
                            <CourseRevisionCard>
                                <H1>{offering.title}</H1>
                                <p style={{ color: "#dce6f5" }}>{offering.desc}</p>
                            </CourseRevisionCard>
                        </div>
                    </Link>
                ))}
            </ArticleLayout>
        </main>
    )
}

export default ExercisesPage

const H1 = styled('h1', {
    fontSize: "1.4rem",
    marginBottom: "0.2rem",
    lineHeight: "1.6rem",
    '@media (min-width: 640px)': {
        fontSize: "1.8rem",
        marginBottom: "0.2rem",
        lineHeight: "2.2rem",
    },
})