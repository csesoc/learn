import { styled } from "@stitches/react";


const CourseRevisionCard = styled('div', {
    color: "#ebf2ff",
    padding: '1.2rem 1.6rem',
    display: 'flex',
    flexFlow: 'column nowrap',
    background: 'linear-gradient(0.25turn, #4287f5, #4386f0);',
    boxShadow: 'inset 0px 0px 35px -22px rgba(0,0,0,0.33)',
    borderRadius: '1.2rem',
    width: "100%",
    transitionProperty: "width, padding, margin, background",
    transitionDuration: "400ms",
    transitionTimingFunction: "ease",

    '&:hover': {
        background: 'linear-gradient(0.25turn, #5294ff, #5796fa);',
        cursor: 'pointer',
        paddingTop: 'calc(1.2rem - 8px)',
        marginBottom: "8px",
        paddingLeft: "calc(1.6rem - 6px)",
        width: "calc(100% - 6px)",
    },

    '&:active': {
        background: 'linear-gradient(0.25turn, #4287f5, #4386f0);',
    }
})

export default CourseRevisionCard