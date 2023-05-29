import { styled } from "@stitches/react"
import { CourseRevisionExercise, CourseRevisionOffering, WorkshopsOffering } from "contentlayer/generated"
import Link from "next/link"
import { ArrowLeft, CaretDown, CaretUp } from "phosphor-react"
import { useState } from "react"
import { Button } from "../Button"
import DifficultyLegend, { DifficultyIndicator } from "./DifficultyLegend"

type PropTypes = {
    /* Name of the revision session for this course offering */
    courseOfferingTitle: string,

    /* Home page for this course offering e.g. 1511 22T3 */
    courseOfferingContent: CourseRevisionOffering | WorkshopsOffering,

    /* List of exercises content */
    contentList: CourseRevisionExercise[],

    /* Index of the currently selected content in contentList */
    currentContentIdx: number,
}

const CourseRevisionSidebarStyled = styled("div", {
    // width: "calc(100% - 2*0.8rem)",
    maxHeight: "calc(80vh - 66px)", // 80% of viewport height excluding navbar
    overflowY: "scroll",
    position: "fixed",
    top: "62px",
    left: "0",
    right: "0",
    padding: "0.8rem 1rem",
    background: "rgba(244,244,244,0.78)",
    backdropFilter: 'blur(8px)',

    '@media (min-width: 768px)': {
        left: "unset",
        right: "unset",
        width: "250px",
        maxHeight: "calc(100vh - 62px)",
        scrollbarGutter: "auto",
        padding: "0",
    }
})

const ContentList = styled("ul", {
    padding: "0",
    listStyle: "none",
    variants: {
        isOpen: {
            true: {
                display: "block",
            },
            false: {
                display: "none",
                '@media (min-width: 768px)': {
                    display: "block",
                }
            }
        }
    },
})

const BackButton = styled("button", {
    color: "#000",
    padding: "0.6rem 1.2rem",
    backgroundColor: "#b3c1c9",
    cursor: "pointer",
    border: "none",
    borderRadius: '100vh',
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    '&:hover': {
        backgroundColor: "#bdcdd9",
    }
})

const ToggleContent = styled("button", {
    padding: "0.6rem 1.2rem",
    color: "#edf8ff",
    backgroundColor: "#0d86d6",
    cursor: "pointer",
    border: "none",
    borderRadius: '100vh',
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    '@media (min-width: 768px)': {
        display: "none",
    },
    '&:hover': {
        backgroundColor: "#5294ff",
    }

})

const ExerciseButton = styled("button", {
    paddingTop: "0.9rem",
    paddingBottom: "0.9rem",
    paddingLeft: "1.2rem",
    paddingRight: "0.4rem",
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

// const determineCourseRevisionOrWorkshopsOffering = (toBeDetermined: WorkshopsOffering | CourseRevisionOffering): toBeDetermined is CourseRevisionOffering => {

// } 

const determineCourseRevisionOrWorkshopsOffering = (toBeDetermined: WorkshopsOffering | CourseRevisionOffering): toBeDetermined is WorkshopsOffering => {
    if ((toBeDetermined as WorkshopsOffering).type) {
        return true;
    }

    return false;

}

const CourseRevisionSidebar = ({ courseOfferingTitle, courseOfferingContent, contentList, currentContentIdx }: PropTypes) => {
    /* ONLY applies when width < 768px (in mobile view) */
    const [showContent, setShowContent] = useState(false)
    return (<CourseRevisionSidebarStyled>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            {determineCourseRevisionOrWorkshopsOffering(courseOfferingContent) ?
                <Link href={`/workshops`}>
                    <BackButton>
                        <ArrowLeft style={{ marginRight: "0.4rem" }} />Other Workshops
                    </BackButton>
                </Link> :
                <Link href={`/course-revision`}>
                    <BackButton>
                        <ArrowLeft style={{ marginRight: "0.4rem" }} />Other Courses
                    </BackButton>
                </Link>
            }
            {/* <Link href={`/course-revision`}>
                <BackButton>
                    <ArrowLeft style={{ marginRight: "0.4rem" }} />Other Courses
                </BackButton>
            </Link> */}
            <ToggleContent onClick={() => setShowContent((val) => !val)}>
                {showContent ? (<><CaretDown size={16} style={{ marginRight: "0.4rem" }} />Hide Exercises</>) : <><CaretUp size={16} style={{ marginRight: "0.4rem" }} />Show Exercises</>}
            </ToggleContent>

        </div>
        <Subtitle>{courseOfferingTitle}</Subtitle>


        <ContentList isOpen={showContent}>
            <DifficultyLegend />
            <Link href={`/${courseOfferingContent._raw.flattenedPath}`} passHref>
                <ExerciseButton key={courseOfferingContent.slug} css={{
                    backgroundColor: currentContentIdx === -1 ? "#31a7f5" : "#2285c7",
                    fontWeight: currentContentIdx === -1 ? "bold" : "normal",
                }}>
                    Getting Started

                </ExerciseButton>
            </Link>
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
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                                <div>
                                    {content.title}

                                </div>

                                <DifficultyIndicator difficulty={content.difficulty} />
                            </div>
                        </ExerciseButton>
                    </Link>
                </li>

            )
            )}
        </ContentList>
    </CourseRevisionSidebarStyled>)
}

export default CourseRevisionSidebar

const Subtitle = styled('h2', {
    fontWeight: 700,
    fontSize: "0.8rem",
    marginBottom: "0.2rem",
    lineHeight: "1.2rem",
    '@media (min-width: 640px)': {
        fontSize: "1rem",
        marginBottom: "0.2rem",
        lineHeight: "1.4rem",
    },
})
