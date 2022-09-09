import { styled } from "@stitches/react";

// Styling element button, storing it in var name buttonStyle

const ButtonStyle = styled('button', {
    //css code
    backgroundColor: '$blue4',
    fontSize: '$label-lg',
    fontWeight: '500',
    fontFamily: '$sans',
    letterSpacing: '-0.011rem',
    lineHeight: '22px',
    color: '$blue12',
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    gap: '$2',
    transition: '$button',
    border: 'none',
    '&:hover': {
        backgroundColor: '$blue5'
    },

    borderRadius: '$full',
    padding: '1.3rem 1.8rem',

})

//Create react component - always return smth (ur base css tag)
//props are content that go inbetween your <articleButton> tag in mdx file
//To access the content, we use {props.children}

const NextArticleButton = (props) => {


    // can only return single element
    console.log(props);

    return (

        <div>

            {props.type == "prev" ?

                <p> Previous Article </p> : <p> Next Article </p>

            }



            <ButtonStyle>
                {props.children}
            </ButtonStyle>


        </div>



    )

}


//Always gotta export the component

export default NextArticleButton


//Import button into button container file
//mdx file - refer to container tag

//article button always render - up to container whether we should render or not 