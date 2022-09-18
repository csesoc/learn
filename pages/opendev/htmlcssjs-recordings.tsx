import ArticleLayout from 'components/ArticleLayout'
import { Box } from 'components/Box'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { Card } from 'components/Card'
import { Table } from 'components/Table'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'components/Button'
import { ArrowSquareOut } from 'phosphor-react'
import { styled } from '@stitches/react'
import { constants } from 'os'
import { BackButton } from 'components/BackButton'

const DisabledExternLink = styled(Flex, {
    display: 'flex',
    alignItems: 'center',
    color: '$slate11',
    alignSelf: 'center',
    userSelect: 'none',
    cursor: 'not-allowed',
    paddingBottom: '$2'
})

const EnabledExternLink = styled(Flex, {
    display: 'flex',
    alignItems: 'center',
    color: '#69a2f3',
    alignSelf: 'center',
    userSelect: 'none',
    paddingBottom: '$2'
})

const OpenDevTwo: NextPage = () => {
    return (
        <ArticleLayout>
            <Head>
                <title>Open Dev Series – CSESoc Learn</title>
                <meta name="description" content="CSESoc open dev series" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Text
                as="h1"
                size="display"
                css={{
                    color: '$slate12',
                    fontWeight: '600',
                    paddingTop: '$2',
                    alignSelf: 'center'
                }}>
                Open Dev Series
            </Text>
            <Text
                as="h1"
                size="headline"
                css={{
                    color: '$slate12',
                    fontWeight: '600',
                    paddingTop: '$2',
                    alignSelf: 'center'
                }}>
                Recordings for Week 1 - HTML/CSS/JS
            </Text>
            <Box css={{ marginTop: '2rem' }}>
                <Text>Slides for this workshop <a href="https://www.canva.com/design/DAFLpV21DLY/5GP43_9-0QocXmk7aNAurw/view?utm_content=DAFLpV21DLY&utm_campaign=designshare&utm_medium=link&utm_source=viewer" target="_blank" rel="noreferrer">
                    here
                </a>.</Text><br />
                <Text>Sample code for this workshop <a href="https://github.com/M-Xue/opendev-html-css-js-22T3" target="_blank" rel="noreferrer">
                    here
                </a>.</Text>
            </Box>
            <Box css={{ marginTop: '2rem' }}>
                <Text
                    size="title-lg">
                    Part 1 - HTML
                </Text>
                <Flex css={{ justifyContent: "center", paddingTop: "1rem" }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5oAoHYnx6UQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Flex>
            </Box>
            <Box css={{ marginTop: '2rem' }}>
                <Text
                    size="title-lg">
                    Part 2 - CSS
                </Text>
                <Flex css={{ justifyContent: "center", paddingTop: "1rem" }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/im4O_-ySJcU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Flex>
            </Box>
            <Box css={{ marginTop: '2rem' }}>
                <Text
                    size="title-lg">
                    Part 3 - JavaScript
                </Text>
                <Flex css={{ justifyContent: "center", paddingTop: "1rem" }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GlGcRvkRDKA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Flex>
                <Flex css={{ justifyContent: "center", paddingTop: "1rem" }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4w37R5ZwKqM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Flex>
            </Box>
            <BackButton path="/opendev" text="Back to Open Dev" />
        </ArticleLayout >
    )
}

export default OpenDevTwo
