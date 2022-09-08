import ArticleLayout from 'components/ArticleLayout'
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Card, CardSmall } from 'components/Card'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import cseImg from 'public/images/about/csesocwhite.png'
import compclubImg from 'public/images/about/compclub.png'
import mediaImg from 'public/images/about/media.png'

import { DiscordLogo, FacebookLogo, InstagramLogo, ArrowRight, CodeSimple } from 'phosphor-react'

const Creators: NextPage = () => {
    return (
        <ArticleLayout>
            <Head>
                <title>About - CSESoc Learn</title>
            </Head>

            <Flex
                as="main"
                css={{
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                <Text
                    as="h1"
                    size="display"
                    css={{
                        color: '$slate12',
                        fontWeight: '600',
                        paddingTop: '$6',

                    }}>
                    About CSESoc Learn
                </Text>
            </Flex>


            <Box as="about" >
                <Flex
                    css={{
                        flexDirection: 'column',
                        paddingTop: '$6'
                        // alignItems: 'left'
                    }}>

                    <Text>
                        CSESoc is the official representative body of computing students at UNSW.
                        We are one of the largest and most active societies at UNSW, and the largest
                        computing society in the southern hemisphere. CSESoc comprises of ~10,000 UNSW students
                        spanning across degrees in Computer Science, Software Engineering, Bioinformatics and
                        Computer Engineering.
                    </Text>

                    <Text css={{ marginTop: '$3' }}>
                        CSESoc Learn is here to fulfil the professional technical needs
                        of those CSE students by collaborating with presenters and content creators in the community
                        to produce educational events and publications about useful software tools, programming concepts,
                        and other technical topics, and host them here on our very own CSESoc Learning Platform.
                    </Text>

                    <Text css={{ marginTop: '$3' }}>
                        In addition to the development of the Learning Platform and its contents, here's an overview
                        what our driven and passionate team in CSESoc Learn has produced so far in 2022:
                    </Text>

                    <Flex  /* grid container */
                        css={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            "@media (min-width: 624px)": {
                                gridTemplateColumns: '3fr',
                            },
                            gridTemplateRows: 'auto',
                            width: '100%',
                            gridRowGap: "1rem"
                        }}>

                        <ul style={{ gap: '$2' }}>
                            <li style={{ listStyleType: 'disc' }}>
                                <Text
                                    css={{
                                        fontSize: '0.9rem'
                                    }}>
                                    <a target="blank" href="https://comp1511-revision-t1-2022.vercel.app/">
                                        COMP1511 Exam Revision
                                    </a>
                                </Text>
                            </li>

                            <li style={{ listStyleType: 'disc' }}>
                                <Text
                                    css={{
                                        fontSize: '0.9rem'
                                    }}>
                                    <a target="blank" href="https://learning-platform-six.vercel.app/2521-revision-practical">
                                        COMP2521 Exam Revision
                                    </a>
                                </Text>
                            </li>

                            <li style={{ listStyleType: 'disc' }}>
                                <Text
                                    css={{
                                        marginTop: '$1',
                                        fontSize: '0.9rem'
                                    }}>
                                    COMP3121 Exam Revision
                                </Text>
                            </li>

                            <li style={{ listStyleType: 'disc' }}>
                                <Text
                                    css={{
                                        marginTop: '$1',
                                        fontSize: '0.9rem'
                                    }}>

                                    <a target="blank" href="https://www.youtube.com/watch?v=sU7VbNsZJ-Q">
                                        MERN Fullstack Web Development Workshop
                                    </a>
                                </Text>
                            </li>

                        </ul>

                    </Flex>

                    <Text css={{ marginTop: '$3' }}>
                        For any inquiries, please don't hesitate to reach out to us at{' '}
                        <a target="blank" href="mailto:education@csesoc.org.au">
                            education@csesoc.org.au
                        </a>{' '}
                        :D
                    </Text>



                    <Text
                        css={{
                            color: '$slate12',
                            fontWeight: '600',
                            marginTop: '$6',
                            marginBottom: '$3',
                            fontSize: '1.4rem',
                            "@media (min-width: 768px)": {
                                fontSize: '1.8rem',
                            }
                        }}>
                        Learn more about CSESoc
                    </Text>

                    <Flex

                        css={{
                            flexDirection: "column",
                            justifyContent: "between",
                            alignItems: "center",
                            "@media (min-width: 768px)": {
                                flexDirection: "row",
                            }

                        }}>
                        {/* TODO: avoid copypaste for social media buttons */}

                        <a
                            href="https://www.csesoc.unsw.edu.au/"
                            target="blank"
                            style={{ textDecoration: 'none', width: '50%', margin: '15px 15px 15px 0' }}>
                            <Button
                                size="small"
                                css={{
                                    width: '100%',
                                    height: '100%',
                                    cursor: 'pointer',
                                    backgroundColor: '#186FAF',
                                    marginLeft: "8px",
                                    '&:hover': { backgroundColor: '#0F609B' },
                                    "@media (min-width: 768px)": {
                                        marginLeft: "0px",
                                    }
                                }}>

                                <Box css={{
                                    margin: '0.3rem',
                                    height: '100%',
                                    position: 'relative',
                                    left: '$3',
                                    top: '0.25rem'


                                }}>
                                    <Image alt="csesoc logo" src={cseImg}
                                        width="130"
                                        height="50"
                                        objectFit="contain"
                                        layout="fixed"
                                        margin-left='0.25rem'

                                    />

                                </Box>

                                <Flex
                                    css={{ flex: 1, padding: '0.8rem', justifyContent: 'flex-end' }}>
                                    <ArrowRight weight="bold" size={30} color="white" />
                                </Flex>
                            </Button>
                        </a>


                        <a
                            href="https://media.csesoc.org.au/"
                            target="blank"
                            style={{ textDecoration: 'none', width: '50%', margin: '15px' }}>
                            <Button
                                size="small"
                                css={{
                                    width: '100%',
                                    height: '100%',
                                    cursor: 'pointer',
                                    marginRight: '15px',
                                    backgroundColor: '#3B3B3B',
                                    '&:hover': { backgroundColor: '#222222' }
                                }}>

                                <Box css={{
                                    margin: '0.3rem',
                                    height: '100%',
                                    position: 'relative',
                                    left: '$3',
                                    top: '0.25rem'



                                }}>
                                    <Image alt="csesoc logo" src={mediaImg}
                                        width="130"
                                        height="50"
                                        objectFit="contain"
                                        layout="fixed"

                                    />

                                </Box>


                                <Flex
                                    css={{ flex: 1, padding: '0.8rem', justifyContent: 'flex-end' }}>
                                    <ArrowRight weight="bold" size={30} color="white" />
                                </Flex>
                            </Button>
                        </a>



                        <a
                            href="https://compclub.csesoc.unsw.edu.au/"
                            target="blank"
                            style={{ textDecoration: 'none', width: '50%', margin: '15px' }}>
                            <Button
                                size="small"
                                css={{
                                    width: '100%',
                                    height: '100%',
                                    cursor: 'pointer',
                                    marginRight: '15px',
                                    backgroundColor: '#222222',
                                    '&:hover': { backgroundColor: 'black' }
                                }}>

                                <Box css={{
                                    margin: '0.3rem',
                                    height: '100%',
                                    position: 'relative',
                                    left: '$3',
                                    top: '0.25rem'


                                }}>
                                    <Image alt="compclub logo" src={compclubImg}
                                        width="130"
                                        height="50"
                                        objectFit="contain"
                                        layout="fixed"

                                    />

                                </Box>

                                <Flex
                                    css={{ flex: 1, padding: '0.8rem', justifyContent: 'flex-end' }}>
                                    <ArrowRight weight="bold" size={30} color="white" />
                                </Flex>
                            </Button>
                        </a>



                    </Flex>



                    <  Flex
                        direction="column"
                        justify="between"
                        align="left"
                        paddingTop='$6'

                        css={{
                            height: '10rem',
                            marginBottom: '30%',
                            "@media (min-width: 768px)": {
                                marginBottom: "5%",
                            }
                        }}>
                        {/* TODO: avoid copypaste for social media buttons */}

                        {/* <a
                            href="https://www.csesoc.unsw.edu.au/"
                            target="blank"
                            style={{ textDecoration: 'none', width: '60%', }}>
                            <Button
                                size="large"
                                css={{
                                    width: '100%',
                                    height: '70%',
                                    cursor: 'pointer',
                                    backgroundColor: '#186FAF',
                                    '&:hover': { backgroundColor: '#0F609B' }
                                }}>

                                <Box css={{
                                    margin: '0 auto',
                                    height: '50%%',
                                    position: 'relative',
                                    top: '0.25rem'



                                }}>
                                    <Image alt="csesoc logo" src={cseImg}
                                        width="150"
                                        height="50"
                                        objectFit="contain"
                                        layout="fixed"

                                    />

                                </Box>


                                <Flex
                                    css={{ flex: 1, padding: '$1', justifyContent: 'flex-end' }}>
                                    <ArrowRight weight="bold" size={32} color="white" />
                                </Flex>
                            </Button>
                        </a>


                        <a
                            href="https://media.csesoc.org.au/"
                            target="blank"
                            style={{ textDecoration: 'none', width: '60%', }}>
                            <Button
                                size="large"
                                css={{
                                    width: '100%',
                                    height: '70%',
                                    cursor: 'pointer',
                                    backgroundColor: '#3B3B3B',
                                    '&:hover': { backgroundColor: '#222222' }
                                }}>

                                <Box css={{
                                    margin: '0 auto',
                                    height: '50%%',
                                    position: 'relative',
                                    top: '0.25rem'



                                }}>
                                    <Image alt="csesoc logo" src={mediaImg}
                                        width="150"
                                        height="50"
                                        objectFit="contain"
                                        layout="fixed"

                                    />

                                </Box>


                                <Flex
                                    css={{ flex: 1, padding: '$1', justifyContent: 'flex-end' }}>
                                    <ArrowRight weight="bold" size={32} color="white" />
                                </Flex>
                            </Button>
                        </a>



                        <a
                            href="https://compclub.csesoc.unsw.edu.au/"
                            target="blank"
                            style={{ textDecoration: 'none', width: '60%', }}>
                            <Button
                                size="large"
                                css={{
                                    width: '100%',
                                    height: '70%',
                                    cursor: 'pointer',
                                    backgroundColor: '#222222',
                                    '&:hover': { backgroundColor: 'black' }
                                }}>

                                <Box css={{
                                    margin: '0 auto',
                                    height: '50%%',
                                    position: 'relative',
                                    top: '0.25rem'



                                }}>
                                    <Image alt="compclub logo" src={compclubImg}
                                        width="150"
                                        height="50"
                                        objectFit="contain"
                                        layout="fixed"

                                    />

                                </Box>


                                <Flex
                                    css={{ flex: 1, padding: '$1', justifyContent: 'flex-end' }}>
                                    <ArrowRight weight="bold" size={32} color="white" />
                                </Flex>
                            </Button>
                        </a> */}

                        {/* <a
                            href="https://www.csesoc.unsw.edu.au/"
                            target="blank"
                            style={{ textDecoration: 'none', width: '60%', }}>
                            <Button
                                size="large"
                                css={{
                                    width: '100%',
                                    height: '70%',
                                    cursor: 'pointer',
                                    backgroundColor: '#186FAF',
                                    '&:hover': { backgroundColor: '#0F609B' }
                                }}>

                                <Box css={{
                                    margin: '0 auto',
                                    height: '50%%',
                                    position: 'relative',
                                    top: '0.25rem'



                                }}>
                                    <Image alt="csesoc logo" src={cseImg}
                                        width="150"
                                        height="50"
                                        objectFit="contain"
                                        layout="fixed"

                                    />

                                </Box>


                                <Flex
                                    css={{ flex: 1, padding: '$1', justifyContent: 'flex-end' }}>
                                    <ArrowRight weight="bold" size={32} color="white" />
                                </Flex>
                            </Button>
                        </a>


                        <a
                            href="https://media.csesoc.org.au/"
                            target="blank"
                            style={{ textDecoration: 'none', width: '60%', }}>
                            <Button
                                size="large"
                                css={{
                                    width: '100%',
                                    height: '70%',
                                    cursor: 'pointer',
                                    backgroundColor: '#3B3B3B',
                                    '&:hover': { backgroundColor: '#222222' }
                                }}>

                                <Box css={{
                                    margin: '0 auto',
                                    height: '50%%',
                                    position: 'relative',
                                    top: '0.25rem'



                                }}>
                                    <Image alt="csesoc logo" src={mediaImg}
                                        width="150"
                                        height="50"
                                        objectFit="contain"
                                        layout="fixed"

                                    />

                                </Box>


                                <Flex
                                    css={{ flex: 1, padding: '$1', justifyContent: 'flex-end' }}>
                                    <ArrowRight weight="bold" size={32} color="white" />
                                </Flex>
                            </Button>
                        </a>



                        <a
                            href="https://compclub.csesoc.unsw.edu.au/"
                            target="blank"
                            style={{ textDecoration: 'none', width: '60%', }}>
                            <Button
                                size="large"
                                css={{
                                    width: '100%',
                                    height: '70%',
                                    cursor: 'pointer',
                                    backgroundColor: '#222222',
                                    '&:hover': { backgroundColor: 'black' }
                                }}>

                                <Box css={{
                                    margin: '0 auto',
                                    height: '50%%',
                                    position: 'relative',
                                    top: '0.25rem'



                                }}>
                                    <Image alt="compclub logo" src={compclubImg}
                                        width="150"
                                        height="50"
                                        objectFit="contain"
                                        layout="fixed"

                                    />

                                </Box>


                                <Flex
                                    css={{ flex: 1, padding: '$1', justifyContent: 'flex-end' }}>
                                    <ArrowRight weight="bold" size={32} color="white" />
                                </Flex>
                            </Button>
                        </a> */}


                        <Text
                            css={{
                                color: '$slate12',
                                fontWeight: '600',
                                marginTop: '$3',
                                marginBottom: '$6',
                                fontSize: '1.4rem',
                                "@media (min-width: 768px)": {
                                    fontSize: '1.8rem',
                                }
                            }}>
                            Join the CSESoc Community
                        </Text>

                        <Flex

                            css={{
                                flexDirection: "column",
                                justifyContent: "space-around",
                                alignItems: "center",

                                "@media (min-width: 768px)": {
                                    flexDirection: "row"
                                }

                            }}>

                            {/* TODO: avoid copypaste for social media buttons */}
                            <a
                                href="https://cseso.cc/discord/"
                                target="blank"
                                style={{ textDecoration: 'none', width: '100%' }}>
                                <Button
                                    size="small"
                                    css={{
                                        width: '75%',
                                        cursor: 'pointer',
                                        marginBottom: "$3",
                                        backgroundColor: '$indigo4',
                                        '&:hover': { backgroundColor: '$indigo5' },
                                        "@media (min-width: 768px)": {
                                            marginBottom: "auto",
                                        }
                                    }}>
                                    <Flex
                                        css={{ py: '$3', pl: '$2', pr: '$1', color: '$indigo10', paddingLeft: '$3' }}>
                                        <DiscordLogo weight="fill" size={36} />
                                    </Flex>
                                    <Text size="title-md" css={{ fontWeight: '600' }}>
                                        Discord
                                    </Text>

                                </Button>
                            </a>
                            <a
                                href="https://www.facebook.com/csesoc/"
                                target="blank"
                                style={{ textDecoration: 'none', width: '100%' }}>
                                <Button
                                    size="small"
                                    css={{
                                        width: '75%',
                                        cursor: 'pointer',
                                        marginBottom: "$3",
                                        backgroundColor: '$blue4',
                                        '&:hover': { backgroundColor: '$blue5' },
                                        "@media (min-width: 768px)": {
                                            marginBottom: "auto",
                                        }
                                    }}>
                                    <Flex css={{ py: '$3', pl: '$2', pr: '$1', color: '$blue10', paddingLeft: '$3' }}>
                                        <FacebookLogo weight="fill" size={36} />
                                    </Flex>
                                    <Text size="title-md" css={{ fontWeight: '600' }}>
                                        Facebook
                                    </Text>

                                </Button>
                            </a>
                            <a
                                href="https://www.instagram.com/csesoc_unsw/"
                                target="blank"
                                style={{ textDecoration: 'none', width: '100%' }}>
                                <Button
                                    size="small"
                                    css={{
                                        width: '75%',
                                        cursor: 'pointer',
                                        marginBottom: "$3",
                                        backgroundColor: '$pink4',
                                        '&:hover': { backgroundColor: '$pink5' },
                                        "@media (min-width: 768px)": {
                                            marginBottom: "auto",
                                        }
                                    }}>
                                    <Flex css={{ py: '$3', pl: '$2', pr: '$1', color: '$pink10', paddingLeft: '$3' }}>
                                        <InstagramLogo weight="fill" size={36} />
                                    </Flex>
                                    <Text size="title-md" css={{ fontWeight: '600' }}>
                                        Instagram
                                    </Text>

                                </Button>
                            </a>
                        </Flex>


                    </Flex>


                </Flex>
            </Box>
        </ArticleLayout >
    )
}

export default Creators
