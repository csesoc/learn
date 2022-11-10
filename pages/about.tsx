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
import Link from 'next/link'

const socialLinks = [
    {
        'name': 'Facebook',
        'icon': <FacebookLogo weight="fill" size={36} />,
        'link': 'https://www.facebook.com/csesoc/',
        'bg_color': '$blue4',
        'bg_color_hover': '$blue5',
        'icon_color': '$blue10',
    },
    {
        'name': 'Instagram',
        'icon': <InstagramLogo weight="fill" size={36} />,
        'link': 'https://www.instagram.com/csesoc_unsw/',
        'bg_color': '$pink4',
        'bg_color_hover': '$pink5',
        'icon_color': '$pink10',
    },
    {
        'name': 'Discord',
        'icon': <DiscordLogo weight="fill" size={36} />,
        'link': 'https://cseso.cc/discord/',
        'bg_color': '$indigo4',
        'bg_color_hover': '$indigo5',
        'icon_color': '$indigo10',
    },
]

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


            <Box>
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
                        In addition to the development of the Learning Platform and its contents, here&apos;s an overview
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
                                    {/* <a target="blank" href="https://comp1511-revision-t1-2022.vercel.app/">
                                        COMP1511 Exam Revision
                                    </a> */}
                                    <Link href="/course-revision/1511-22T3">COMP1511 Exam Revision</Link>
                                </Text>
                            </li>

                            <li style={{ listStyleType: 'disc' }}>
                                <Text
                                    css={{
                                        fontSize: '0.9rem'
                                    }}>

                                    <a target="blank" href="https://learn.csesoc.org.au/articles/2521-revision-theory">
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
                        For any inquiries, please don&apos;t hesitate to reach out to us at{' '}
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



                    <  Flex
                        css={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: '$6',
                            height: '10rem',
                            marginBottom: '30%',
                            "@media (min-width: 768px)": {
                                marginBottom: "5%",
                            }
                        }}>



                        <Flex

                            css={{
                                flexDirection: "column",
                                justifyContent: "space-around",
                                alignItems: "center",

                                "@media (min-width: 768px)": {
                                    flexDirection: "row",
                                }

                            }}>

                            {
                                socialLinks.map((item, i) => (

                                    <a
                                        key={i}
                                        href={item.link}
                                        target="blank"
                                        style={{
                                            textDecoration: 'none',
                                            width: '100%',
                                            margin: '8px 15px 8px 0'


                                        }}>


                                        <Button
                                            size="small"
                                            css={{
                                                width: '100%',
                                                cursor: 'pointer',
                                                marginBottom: "$3",
                                                backgroundColor: item.bg_color,
                                                '&:hover': { backgroundColor: item.bg_color_hover },
                                                "@media (min-width: 768px)": {
                                                    marginBottom: "auto",
                                                    marginRight: "15px",
                                                    paddingRight: "30px",
                                                    paddingLeft: "$4",

                                                }
                                            }}>
                                            <Flex css={{ padding: '$3 $1 $3 $3', color: item.icon_color }}>
                                                {item.icon}
                                            </Flex>
                                            <Text size="title-md" css={{ fontWeight: '600' }}>
                                                Discord
                                            </Text>

                                        </Button>
                                    </a>)
                                )}
                        </Flex>


                    </Flex>


                </Flex>
            </Box>
        </ArticleLayout >
    )
}

export default Creators
