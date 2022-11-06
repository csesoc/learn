import { styled } from "@stitches/react";
import { Text } from "components/Text";
import { CourseRevisionOffering } from "contentlayer/generated";


type PropTypes = {
    courseOffering: CourseRevisionOffering
}

const CourseRevisionMiniCardStyled = styled('div', {
    color: "#ebf2ff",
    padding: '1.2rem 1.6rem',
    display: 'flex',
    flexFlow: 'column nowrap',
    background: 'linear-gradient(0.25turn, #4287f5, #4386f0);',
    boxShadow: 'inset 0px 0px 35px -22px rgba(0,0,0,0.33)',
    borderRadius: '1.2rem',
    maxWidth: "380px",
    transitionProperty: "width, padding, margin, background",
    transitionDuration: "400ms",
    transitionTimingFunction: "ease",

    '&:hover': {
        background: 'linear-gradient(0.25turn, #5294ff, #5796fa);',
        cursor: 'pointer',
        paddingTop: 'calc(1.2rem - 8px)',
        marginBottom: "8px",
    },

    '&:active': {
        background: 'linear-gradient(0.25turn, #4287f5, #4386f0);',
    }
})

const H1 = styled('h1', {
    fontSize: "1.8rem",
    marginBottom: "0.2rem",
    lineHeight: "1.6rem",
    '@media (min-width: 640px)': {
        fontSize: "2rem",
        marginBottom: "0.2rem",
        lineHeight: "2.2rem",
    },
})

const CourseRevisionMiniCard = (props: PropTypes) => {
    return (
        <CourseRevisionMiniCardStyled>
            <div style={{ textAlign: "center" }}><H1>{props.courseOffering.course}</H1></div>
            <Text size={"info"} style={{ color: "#dce6f5" }}>{props.courseOffering.desc}</Text>
        </CourseRevisionMiniCardStyled >

    )
}

export default CourseRevisionMiniCard