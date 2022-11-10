import { Flex } from 'components/Flex'
import NextArticleButton from 'components/NextArticleButton'
// import PrevArticleButton from 'components/PrevArticleButton'
import { styled } from '../stitches.config'

// INSPECT ELEMENT OP PLS USE esp for looking at margin etc


const ButtonRow = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '6rem'

    // variants: {
    //     type: {
    //         prev: {
    //             alignItems: 'left'
    //         },
    //         next: {
    //             alignItems: 'right'
    //         }

    //     }
    // }

})

const ArticleButtonContainer = (props) => {

    return (


        <ButtonRow>

            {/* If statement - if props.next exist then show next article button */}


            {props.prev &&

                <NextArticleButton type="prev">

                    {props.prevName}



                </NextArticleButton>
            }

            {props.next &&

                <NextArticleButton type="next">

                    {props.nextName}



                </NextArticleButton>
            }

        </ButtonRow>


    )
}

export default ArticleButtonContainer








// Step1. Design container
// Step2. Design content inside container 