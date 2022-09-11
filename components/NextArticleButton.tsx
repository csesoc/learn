import { styled } from "@stitches/react";
import { Flex } from 'components/Flex'
import { ArrowRight } from 'phosphor-react'
import { ArrowLeft } from 'phosphor-react'
import { Text } from 'components/Text'


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
    padding: '1rem 1.8rem',

})

//Create react component - always return smth (ur base css tag)
//children are content that go inbetween your <articleButton> tag in mdx file
//To access the content, we use {props.children}

//props are like arguments, extra info, given to ur tags eg) <articleButton type="prev">

const NextArticleButton = (props) => {


    // can only return single element

    return (

        <div>

            {props.type == "prev" ?

                <Flex
                    css={{ flex: 1, padding: '0.8rem', justifyContent: 'flex-start' }}>

                    <Text
                        css={{
                            fontSize: '$label-lg',
                            fontWeight: '500',
                            fontFamily: '$sans',
                            color: '$blue12'
                        }}>

                        Previous Article

                    </Text>

                </Flex> :

                <Flex
                    css={{ flex: 1, padding: '0.8rem', justifyContent: 'flex-end' }}>

                    <Text
                        css={{
                            fontSize: '$label-lg',
                            fontWeight: '500',
                            fontFamily: '$sans',
                            color: '$blue12'
                        }}>

                        Next Article

                    </Text>

                </Flex>

            }

            <ButtonStyle>

                {props.type == "prev" ?

                    <Flex
                        css={{ flex: 1, padding: '0.2rem', justifyContent: 'flex-start' }}>
                        <ArrowLeft weight="bold" size={27} color="#00254D" />
                    </Flex> :

                    <Flex
                        css={{ fontSize: '0.95rem' }}>

                        {props.children}

                    </Flex>

                }

                {props.type == "prev" ?

                    <Flex
                        css={{ fontSize: '0.95rem' }}>

                        {props.children}

                    </Flex> :

                    <Flex
                        css={{ flex: 1, padding: '0.2rem', justifyContent: 'flex-start' }}>
                        <ArrowRight weight="bold" size={27} color="#00254D" />
                    </Flex>

                }


            </ButtonStyle>


        </div>



    )

}


//Always gotta export the component

export default NextArticleButton


//Import button into button container file
//mdx file - refer to container tag

//article button always render - up to container whether we should render or not 