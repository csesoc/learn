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
      <Box css={{ paddingTop: '$2' }}>
        <Text
          size="info">
          <p>
            In 22T3, CSESoc will be running a new &quot;Open Dev Series&quot; initiative
            involving weekly sessions every Wednesday 2-4pm (location may vary, see schedule).
          </p>
          <p>
            Over the course of the term, you&apos;ll learn how to build your own
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
          <p>Scroll down to see the full schedule. See you soon!</p>
        </Text>
      </Box>
      <Text
        size="headline"
        css={{
          color: '$slate12',
          fontWeight: '600',
          py: '$2',
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
      <Text
        size="headline"
        css={{
          color: '$slate12',
          fontWeight: '600',
          py: '$2',
          alignSelf: 'center',
          marginTop: '1rem',
        }}>
        Schedule
      </Text>
      <Text size="info"><p>Workshops will consists of lecture-style coding demonstrations with some time for you to try out some relevant coding exercises throughout.
      </p><p>
          Dev sessions will be like casual help sessions where you can drop in to ask our experienced student developers for help on the coding exercises, or just hang out and chat.</p></Text>
      <Table css={{
        marginTop: '1rem',
        lineHeight: '1.5rem',
        "@media (max-width: 768px)": {
          fontSize: '0.8rem',
        }
      }}>
        <thead>
          <tr style={{ backgroundColor: 'rgb(164, 195, 244)' }}>
            <th>Week</th>
            <th>Event</th>
            <th>Date</th>
            <th>Time & Location</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: 'rgb(233, 240, 251)', color: '#b8bcc0' }}>
            <td>Week 1</td>
            <td>HTML + CSS + JS Workshop</td>
            <td>14 Sep 2022</td>
            <td>2pm-4pm, <br />J17 Design Next Studio</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(224, 235, 253)' }}>
            <td>Week 2</td>
            <td>Beginner ReactJS Workshop</td>
            <td>21 Sep 2022</td>
            <td>2pm-4pm, J17 Ainsworth 202</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(233, 240, 251)' }}>
            <td>Week 3</td>
            <td>Beginner ReactJS Dev Session</td>
            <td>28 Sep 2022</td>
            <td>2pm-4pm, J17 Ainsworth 202</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(224, 235, 253)' }}>
            <td>Week 4</td>
            <td>Advanced ReactJS Workshop</td>
            <td>5 Oct 2022</td>
            <td>2pm-4pm, J17 Ainsworth 202</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(233, 240, 251)' }}>
            <td>Week 5</td>
            <td>Advanced ReactJS Dev Session</td>
            <td>12 Oct 2022</td>
            <td>2pm-4pm, J17 Ainsworth 202</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(224, 235, 253)' }}>
            <td>Week 6</td>
            <td colSpan={3}>
              <i>Flexibility Week – No Event</i>
            </td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(233, 240, 251)' }}>
            <td>Week 7</td>
            <td>MongoDB + ExpressJS Workshop</td>
            <td>26 Oct 2022</td>
            <td>2pm-4pm, J17 Ainsworth 202</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(224, 235, 253)' }}>
            <td>Week 8</td>
            <td>MongoDB + ExpressJS Dev Session</td>
            <td>2 Nov 2022</td>
            <td>2pm-4pm, J17 Ainsworth 202</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(233, 240, 251)' }}>
            <td>Week 9</td>
            <td>Project Dev Session</td>
            <td>9 Nov 2022</td>
            <td>2pm-4pm, J17 Ainsworth 202</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(224, 235, 253)' }}>
            <td>Week 10</td>
            <td>Project Dev Session</td>
            <td>16 Nov 2022</td>
            <td>2pm-4pm, J17 Ainsworth 202</td>
          </tr>
        </tbody>
      </Table>
      <Text
        size="headline"
        css={{
          color: '$slate12',
          fontWeight: '600',
          py: '$2',
          alignSelf: 'center',
          marginTop: '1rem',
        }}>
        Resources
      </Text>
      <Text size="info">Workshop recordings, slides and exercises will be released throughout the term as workshops are run.</Text>
      <Flex
        as="section"
        css={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          rowGap: '$6',
          columnGap: '$8',
          py: '$6'
        }}>
        <Card
          css={{
            background: 'linear-gradient(75deg, rgb(163, 197, 238) 0%, rgb(199, 219, 242) 100%)',
            height: '20em',
            width: '19em'
          }}>
          <Box css={{ width: '75%', margin: '0 auto' }}>
            <Image
              src="/images/opendev/html-css-js.png"
              width="3960"
              height="1500"
              objectFit="cover"
            />
          </Box>
          <Text
            size="title-lg"
            css={{
              color: '$slate12',
              fontWeight: '600',
              alignSelf: 'center',
              py: '$4'
            }}>
            HTML + CSS + JS
          </Text>
          <EnabledExternLink>
            <Text as="a" href="https://www.canva.com/design/DAFLpV21DLY/5GP43_9-0QocXmk7aNAurw/view?utm_content=DAFLpV21DLY&utm_campaign=designshare&utm_medium=link&utm_source=viewer" target="_blank">
              Slides &nbsp;
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
            </svg>
          </EnabledExternLink>
          <EnabledExternLink>
            <Text as="a" href="https://www.notion.so/CSESoc-Open-Dev-HTML-CSS-JavaScript-Exercises-7085baebc47e49a0b1710212eebf4b30" target="_blank">
              Exercises &nbsp;
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            </svg>
          </EnabledExternLink>
          <DisabledExternLink>
            <Text as="a" css={{ color: "inherit" }}>
              Recording &nbsp;
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
          </DisabledExternLink>
          {/* <Text css={{ alignSelf: 'center', paddingBottom: '$2' }}>
            <a href="#" style={{ textDecoration: 'none' }}>
              Slides &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16">
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
              </svg>
            </a>
          </Text> */}
        </Card>
        <Card
          css={{
            background: 'linear-gradient(75deg, rgb(163, 197, 238) 0%, rgb(199, 219, 242) 100%)',
            height: '20em',
            width: '19em'
          }}>
          <Box css={{ width: '75%', margin: '0 auto' }}>
            <Image
              src="/images/opendev/basic-react.png"
              width="5000"
              height="1679"
              objectFit="cover"
            />
          </Box>
          <Text
            size="title-lg"
            css={{
              color: '$slate12',
              fontWeight: '600',
              alignSelf: 'center',
              py: '$4'
            }}>
            Basic ReactJS
          </Text>
          <EnabledExternLink>
            <Text as="a" href="https://www.canva.com/design/DAFMIEc5xeE/9RywyQayzKOXMVOhjhIQDQ/view?utm_content=DAFMIEc5xeE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank">
              Slides &nbsp;
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
            </svg>
          </EnabledExternLink>
          <EnabledExternLink>
            <Text as="a" href="https://snow-equipment-0c9.notion.site/CSESoc-Open-Dev-Intro-to-React-Exercises-f960c27b17b94115b87c50bdfc4bbb3b" target="_blank">
              Exercises &nbsp;
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            </svg>
          </EnabledExternLink>
          <DisabledExternLink>
            <Text as="a" css={{ color: "inherit" }}>
              Recording &nbsp;
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
          </DisabledExternLink>
        </Card>
        <Card
          css={{
            background: 'linear-gradient(75deg, rgb(163, 197, 238) 0%, rgb(199, 219, 242) 100%)',
            height: '20em',
            width: '19em'
          }}>
          <Box css={{ width: '75%', margin: '0 auto' }}>
            <Image
              src="/images/opendev/advanced-react.png"
              width="2846"
              height="1072"
              objectFit="cover"
            />
          </Box>
          <Text
            size="title-lg"
            css={{
              color: '$slate12',
              fontWeight: '600',
              alignSelf: 'center',
              py: '$4'
            }}>
            Advanced ReactJS
          </Text>
          <DisabledExternLink>
            <Text as="a" css={{ color: "inherit" }}>
              Slides &nbsp;
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
            </svg>
          </DisabledExternLink>
          <DisabledExternLink>
            <Text as="a" css={{ color: "inherit" }}>
              Exercises &nbsp;
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            </svg>
          </DisabledExternLink>
          <DisabledExternLink>
            <Text as="a" css={{ color: "inherit" }}>
              Recording &nbsp;
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
          </DisabledExternLink>
        </Card>
        <Card
          css={{
            background: 'linear-gradient(75deg, rgb(163, 197, 238) 0%, rgb(199, 219, 242) 100%)',
            height: '20em',
            width: '19em'
          }}>
          <Box css={{ width: '75%', margin: '0 auto' }}>
            <Image
              src="/images/opendev/mongo-express.png"
              width="837"
              height="340"
              objectFit="cover"
            />
          </Box>
          <Text
            size="title-lg"
            css={{
              color: '$slate12',
              fontWeight: '600',
              alignSelf: 'center',
              py: '$4'
            }}>
            MongoDB + ExpressJS
          </Text>
          <DisabledExternLink>
            <Text as="a" css={{ color: "inherit" }}>
              Slides &nbsp;
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
            </svg>
          </DisabledExternLink>
          <DisabledExternLink>
            <Text as="a" css={{ color: "inherit" }}>
              Exercises &nbsp;
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            </svg>
          </DisabledExternLink>
          <DisabledExternLink>
            <Text as="a" css={{ color: "inherit" }}>
              Recording &nbsp;
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
          </DisabledExternLink>
        </Card>
      </Flex>
    </ArticleLayout >
  )
}

export default OpenDevTwo
