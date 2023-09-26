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
import Centerer from 'components/Centerer'

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

const LinksContainer = styled(Flex, {
  width: '60%',
  maxWidth: '600px',
  margin: '0 auto',
  justifyContent: 'space-between',
}
)

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
      <Box css={{ paddingTop: '$2' }}>
        <Text
          size="info">
          <p>
            The CSESoc Open Dev Series is back once again for 23T3! This initiative will involving weekly workshops for the first 4 weeks of term on Wednesdays 2-4pm (location may vary, see schedule).
          </p>
          <p>
            Over the course of 4 weeks, you&apos;ll learn how to build your own
            project with the popular MERN stack through workshops with
            interactive exercises and help sessions where experienced student
            developers give you guidance on new coding exercises based on the
            the workshops.
          </p>
          <p>
            These workshops are beginner-friendly and students of all skill
            levels are welcome.
          </p>
          <p>
            We encourage you to attend as many workshops as you can as it will
            form a complete set of skills to allow you to build your own
            projects.
          </p>
          <p>Scroll down to see the slides, code and exercises for all weeks!</p>
        </Text>
      </Box>

      <Text
        size="headline"
        css={{
          color: '$slate12',
          fontWeight: '600',
          padding: '$2',
          alignSelf: 'center',
          marginTop: '1rem',
        }}>Week 1</Text>
      <LinksContainer justify="around">
        <a href="https://www.canva.com/design/DAFhz2OFo8Y/InPtslQ6diPeqLV_AKynEw/edit?utm_content=DAFhz2OFo8Y&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Slides</a>
        <a href="https://codepen.io/Allynixtor/pen/GRPOYvX" target="_blank">Demo Code</a>
        <a href="https://github.com/CSESocEducation/Open-Dev/tree/main/23T3/workshop-1/exercises" target="_blank">Exercises</a>
        <a href="https://youtu.be/3nOM16cMxJo" target="_blank">Recording</a>
      </LinksContainer>
      <a href="https://www.canva.com/design/DAFhz2OFo8Y/InPtslQ6diPeqLV_AKynEw/edit?utm_content=DAFhz2OFo8Y&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">
        <Centerer>
          <Image src="/images/opendev/opendev-23t3-wk1-cover-slide.png" alt="Week 1 Slides" width="480" height="270" />

        </Centerer>
      </a>

      <Text
        size="headline"
        css={{
          color: '$slate12',
          fontWeight: '600',
          padding: '$2',
          alignSelf: 'center',
          marginTop: '1rem',
        }}>
        Feedback
      </Text>
      <Text
        size="info"
      >
        After attending, please fill out this anonymous           <a href='https://docs.google.com/forms/d/e/1FAIpQLScpydFTRZhLwNRX2Z2lkpBsZxF2mcRzAM_5dvvk237-OIRDmg/viewform' target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "inline-block" }}>
          feedback form <ArrowSquareOut size={16} color="#3f89f1" style={{ verticalAlign: "text-bottom" }} /></a> to help us improve these events! We read every single response :D
        <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLScpydFTRZhLwNRX2Z2lkpBsZxF2mcRzAM_5dvvk237-OIRDmg/viewform' target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <Button size="default" css={{ backgroundColor: "hsl(256, 73.7%, 61.2%)", color: "white", fontWeight: "600", "&:hover": { backgroundColor: "rgb(177, 152, 246)" } }}>Feedback Form <ArrowSquareOut size={20} color="#dbdbdb" /></Button>
          </a>

        </div>
      </Text>

    </ArticleLayout >
  )
}

export default OpenDevTwo
