import { styled } from "@stitches/react"
import { CourseRevisionOffering } from "contentlayer/generated"
import Link from "next/link"
import CourseRevisionMiniCard from "./CourseRevisionMiniCard"

type PropTypes = {
    allCourseRevisionOfferings: CourseRevisionOffering[]
}

const CourseRevisionsContainer = styled('div', {
    width: "100%",
    display: 'flex',
    flexFlow: "row wrap",
    justifyContent: "center",
    rowGap: '$1',
    columnGap: '$4',
})

const CourseRevisionContainerHomePage = (props: PropTypes) => {
    return (<CourseRevisionsContainer>

        {
            props.allCourseRevisionOfferings?.map((offering) => (
                <Link href={`course-revision/${offering.slug}`} passHref key={offering.slug}>
                    <div style={{
                        backgroundColor: "#3e73c7",
                        margin: '0.6rem 0',
                        borderRadius: '1.2rem',
                    }}>
                        <CourseRevisionMiniCard courseOffering={offering} />
                    </div>
                </Link>
            ))

        }</CourseRevisionsContainer>
    )
}

export default CourseRevisionContainerHomePage

