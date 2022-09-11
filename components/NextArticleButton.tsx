import { styled } from "@stitches/react";
import { Flex } from 'components/Flex'
import { ArrowRight, ArrowLeft } from 'phosphor-react'
import { Text } from 'components/Text'
import Link from 'next/link'
import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";



const ButtonStyle = styled('button', {

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
    padding: '1rem 1.8rem'


})


const NextArticleButton = (props) => {

    return (

        <div style={{ width: '48%' }}>


            {props.type === "prev" ?

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


            <Link href={props.link}>


                <ButtonStyle css={{ height: "65%", width: "100%", justifyContent: "start" }}>
                    {props.type === "prev" ?

                        <Flex
                            css={{ padding: '0.2rem', justifyContent: 'flex-start' }}>
                            <ArrowLeft weight="bold" size={27} color="#00254D" />
                        </Flex> :

                        <Flex
                            css={{ fontSize: '0.95rem', flexGrow: 1 }}>

                            {props.children}

                        </Flex>

                    }

                    {props.type === "prev" ?

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

            </Link>

        </div>



    )

}


export default NextArticleButton


