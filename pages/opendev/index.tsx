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
            The CSESoc Open Dev Series is back once again for 23T2! This initiative will involving weekly workshops for the first 4 weeks of term on Wednesdays 2-4pm (location may vary, see schedule).
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
        <a href="https://www.canva.com/design/DAFLpV21DLY/5GP43_9-0QocXmk7aNAurw/view?utm_content=DAFLpV21DLY&utm_campaign=designshare&utm_medium=link&utm_source=viewer" target="_blank">Slides</a>
        <a href="https://codepen.io/xylo274/pen/jOQrQQE" target="_blank">Code</a>
        <a href="https://www.notion.so/CSESoc-Open-Dev-HTML-CSS-JavaScript-Exercises-7085baebc47e49a0b1710212eebf4b30" target="_blank">Exercises</a>
      </LinksContainer>
      <a href="https://www.canva.com/design/DAFLpV21DLY/5GP43_9-0QocXmk7aNAurw/view?utm_content=DAFLpV21DLY&utm_campaign=designshare&utm_medium=link&utm_source=viewer" target="_blank">
        <Centerer>
          <Image src="/images/opendev/opendev-23t2-wk1-cover-slide.png" alt="Week 1 Slides" width="480" height="270" />

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
        }}>Week 2</Text>
      <LinksContainer justify="around">
        <a href="https://www.canva.com/design/DAFj64DPw5g/-h9rLyCEeLi3QzZgVpQFrQ/view?utm_content=DAFj64DPw5g&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank">Slides</a>
        <a href="https://codepen.io/parvyyy/pen/qBJgxwK" target="_blank">Javascript Code</a>
        <a href="https://github.com/BinaryGamer/open-dev/tree/main/WEEK2" target="_blank">ReactJS Code</a>
      </LinksContainer>
      <Text as='body' css={{
        marginTop: '1rem',
        fontSize: '0.8rem',
        textAlign: 'center',
      }}>No exercises for week 2</Text>
      <a href="https://www.canva.com/design/DAFj64DPw5g/-h9rLyCEeLi3QzZgVpQFrQ/view?utm_content=DAFj64DPw5g&utm_campaign=designshare&utm_medium=link&utm_source=viewer" target="_blank">
        <Centerer>
          <Image src="/images/opendev/opendev-23t2-wk2-cover-slide.png" alt="Week 2 Slides" width="480" height="270" />
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
        }}>Week 3</Text>
      <LinksContainer justify="around">
        <a href="https://www.canva.com/design/DAFlvj_OQsE/jVRyWqpHGUuW7rdlkBYJyA/view?utm_content=DAFlvj_OQsE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank">Slides</a>
        <a href="https://github.com/BinaryGamer/open-dev/tree/main/WEEK3" target="_blank">Code</a>
        <a href="https://terrie.notion.site/Intro-to-React-Part-1-Exercises-f960c27b17b94115b87c50bdfc4bbb3b" target="_blank">Exercise</a>
      </LinksContainer>
      <a href="https://www.canva.com/design/DAFlvj_OQsE/jVRyWqpHGUuW7rdlkBYJyA/view?utm_content=DAFlvj_OQsE&utm_campaign=designshare&utm_medium=link&utm_source=viewer" target="_blank">
        <Centerer>
          <Image src="/images/opendev/opendev-23t2-wk3-cover-slide.png" alt="Week 3 Slides" width="480" height="270" />
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
