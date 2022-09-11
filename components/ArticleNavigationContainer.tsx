import { Flex } from 'components/Flex'
import NextArticleButton from 'components/NextArticleButton'
// import PrevArticleButton from 'components/PrevArticleButton'
import { styled } from '../stitches.config'


const ContainerRow = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '6rem'


})

const ArticleButtonContainer = (props) => {

    return (

        <ContainerRow>

            {/* If statement - if props.next exist then show next article button */}


            {props.prev &&

                <NextArticleButton>

                    {props.prevName}


                </NextArticleButton>
            }

            {props.next &&

                <NextArticleButton>

                    {props.nextName}


                </NextArticleButton>
            }

        </ContainerRow>


    )
}

export default ArticleButtonContainer


