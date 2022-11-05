import { styled } from "@stitches/react"
import { CourseRevisionExercise, CourseRevisionOffering } from "contentlayer/generated"
import Link from "next/link"
import { ArrowLeft } from "phosphor-react"
import { Button } from "./Button"

type PropTypes = {
    /* First in list must be the course offering, the rest are exercises */
    contentList: (CourseRevisionOffering | CourseRevisionExercise)[],

    /* Index of the currently selected content in contentList*/
    currentContentIdx: number,
}

const CourseRevisionSidebarStyled = styled("div", {
    position: "fixed",
    top: "66px",
    width: "250px",
    height: "calc(100vh - 62px)",
    overflowY: "scroll",
    scrollbarGutter: "auto",
})

const ExerciseButton = styled("button", {
    padding: "0.9rem 1.2rem",
    color: "#edf8ff",
    backgroundColor: "#0d86d6",
    borderRadius: "0.6rem",
    cursor: "pointer",
    border: "none",
    width: "100%",
    textAlign: "left",
    '&:hover': {
        backgroundColor: "#31a7f5",
    },
})


const CourseRevisionSidebar = ({ contentList, currentContentIdx }: PropTypes) => {
    return (<CourseRevisionSidebarStyled>
        <Link href={`/course-revision`}>
            <Button css={{ padding: '3px 14px', borderRadius: '100vh', width: "fit-content" }}>
                <ArrowLeft />Other Courses
            </Button>
        </Link>

        <ul style={{
            padding: "0",
        }}>
            {contentList.map((content, idx) => (
                <li
                    key={content.slug}
                    style={{
                        listStyle: "none",
                        margin: "0.9rem 0",
                    }}>
                    <Link href={`/${content._raw.flattenedPath}`} passHref>
                        <ExerciseButton key={content.slug} css={{
                            backgroundColor: idx === currentContentIdx ? "#31a7f5" : "#2285c7",
                            fontWeight: idx === currentContentIdx ? "bold" : "normal",
                        }}>
                            {content.title}
                        </ExerciseButton>
                    </Link>
                </li>

            )
            )}
        </ul>
    </CourseRevisionSidebarStyled>)
}

export default CourseRevisionSidebar