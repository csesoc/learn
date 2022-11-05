import { styled } from "@stitches/react"

const DifficultyLegendStyled = styled("div", {
    margin: "1rem 0",
    display: "flex",
    justifyContent: "flex-start",
    '@media (min-width: 768px)': {
        justifyContent: "space-between",
    }
})

const DifficultyRating = styled("div", {
    fontSize: "0.7rem",
    fontWeight: "bold",
    color: "#000",
    padding: "0.5rem 1rem",
    borderRadius: "100vw",
    textAlign: "center",
    minWidth: "70px",
    variants: {
        difficulty: {
            1: {
                backgroundColor: "#7ff0a3",
            },
            2: {
                backgroundColor: "#ebc07c",
            },
            3: {
                backgroundColor: "#ed748e",
            },

        }
    },
    '&:not(:last-child)': {
        marginRight: "0.6rem",
    }
})

export const DifficultyIndicator = styled("div", {
    width: "12px",
    height: "12px",
    borderRadius: "100vw",
    marginRight: "0.5rem",
    variants: {
        difficulty: {
            "1": {
                backgroundColor: "#7ff0a3",
            },
            "2": {
                backgroundColor: "#ebc07c",
            },
            "3": {
                backgroundColor: "#ed748e",
            },
        }
    }
})

const DifficultyLegend = () => {

    return (
        <DifficultyLegendStyled>
            <DifficultyRating difficulty={1}>Easy</DifficultyRating>
            <DifficultyRating difficulty={2}>Medium</DifficultyRating>
            <DifficultyRating difficulty={3}>Hard</DifficultyRating>
        </DifficultyLegendStyled>
    )
}

export default DifficultyLegend