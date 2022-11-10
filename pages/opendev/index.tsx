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
          padding: '$2',
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
            <td>HTML/CSS/JS Workshop</td>
            <td>14 Sep 2022</td>
            <td>2-4pm, <br />J17 Design Next Studio</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(224, 235, 253)', color: '#b8bcc0' }}>
            <td>Week 2</td>
            <td>ReactJS Part 1 Workshop</td>
            <td>21 Sep 2022</td>
            <td>2-4pm, Ainsworth 202</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(233, 240, 251)', color: '#b8bcc0' }}>
            <td>Week 3</td>
            <td>ReactJS Part 1 Dev Session</td>
            <td>28 Sep 2022</td>
            <td>2-4pm, Ainsworth 202</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(224, 235, 253)', color: '#b8bcc0' }}>
            <td>Week 4</td>
            <td>
              <span style={{ fontWeight: "800" }} >Casual Dev Session</span>
              <p style={{ margin: "0.2rem 0 0", fontSize: "0.7rem", lineHeight: "0.9rem" }}>
                No new content/exercises. Come in to chill, chat, study :D<br />
                Preceded by
                <i> CSESoc Pearler Tech Talk</i>
                <br />
                Followed by
                <i> CSESoc Personal Projects award ceremony</i>

              </p>
            </td>
            <td>
              5 Oct 2022
            </td>
            <td>3:30-5:30pm, CLB 6</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(233, 240, 251)', color: '#b8bcc0' }}>
            <td>Week 5</td>
            <td>
              <span style={{ fontWeight: "800" }} >ReactJS Part 2 Workshop</span>
              <p style={{ margin: "0.2rem 0 0", fontSize: "0.7rem", lineHeight: "0.9rem" }}>
                New content &amp; exercises! Bring your laptop and friends 💙<br />
                <a href="https://fb.me/e/2rGssJNQi" target="_blank" rel="noreferrer"><i>Facebook event</i></a>

              </p>
            </td>
            <td>12 Oct 2022</td>
            <td>2-4pm, CLB 6</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(224, 235, 253)', color: '#b8bcc0' }}>
            <td>Week 6</td>
            <td>
              <span style={{ fontWeight: "800" }} >ReactJS Part 2 Dev Session</span>
              <p style={{ margin: "0.2rem 0 0", fontSize: "0.7rem", lineHeight: "0.9rem" }}>
                Work on ReactJS Part 2 exercises and get help 🥰<br />
                Chill, chat, study. Snacks provided 🧁
              </p>
            </td>
            <td>19 Oct 2022</td>
            <td>2-4pm, CLB 6</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(233, 240, 251)', color: '#b8bcc0' }}>
            <td>Week 7</td>
            <td><span style={{ fontWeight: "800" }} >MongoDB &amp; ExpressJS Workshop</span>
              <p style={{ margin: "0.2rem 0 0", fontSize: "0.7rem", lineHeight: "0.9rem" }}>
                New content &amp; exercises! Bring your laptop and friends 💙
              </p>
            </td>
            <td>26 Oct 2022</td>
            <td>2-4pm, Ainsworth 202</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(224, 235, 253)', color: '#b8bcc0' }}>
            <td>Week 8</td>
            <td>
              <span style={{ fontWeight: "800" }} >MongoDB &amp; ExpressJS Dev Session</span>
              <p style={{ margin: "0.2rem 0 0", fontSize: "0.7rem", lineHeight: "0.9rem" }}>
                Work on MongoDB &amp; ExpressJS exercises and get help 🥰<br />
                Chill, chat, study. Snacks provided 🧁
              </p>
            </td>
            <td>2 Nov 2022</td>
            <td>2-4pm, Ainsworth 202</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(233, 240, 251)' }}>
            <td>Week 9</td>
            <td><span style={{ fontWeight: "800" }} >Deploying Web Apps (as a broke uni student)</span>
              <p style={{ margin: "0.2rem 0 0", fontSize: "0.7rem", lineHeight: "0.9rem" }}>
                Learn how to configure, build and deploy our web apps so everyone can see it online ⚡️
              </p></td>
            <td>9 Nov 2022</td>
            <td>2-4pm, Ainsworth 202</td>
          </tr>
          <tr style={{ backgroundColor: 'rgb(224, 235, 253)' }}>
            <td>Week 10</td>
            <td><span style={{ fontWeight: "800" }} >Project Dev Session</span>              <p style={{ margin: "0.2rem 0 0", fontSize: "0.7rem", lineHeight: "0.9rem" }}>
              Put your new skills to the test and build a project!<br />
              Chill, chat, study. Snacks provided 🧁
            </p></td>

            <td>16 Nov 2022</td>
            <td>2-4pm, Ainsworth 202</td>
          </tr>
        </tbody>
      </Table >
      <p style={{ fontSize: "0.8rem" }}>Last updated 2022/10/04 15:09</p>

      <Text
        size="headline"
        css={{
          color: '$slate12',
          fontWeight: '600',
          padding: '$2',
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
          padding: '$6'
        }}>
        <Card
          css={{
            background: 'linear-gradient(75deg, rgb(163, 197, 238) 0%, rgb(199, 219, 242) 100%)',
            height: '22.4em',
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
              padding: '$4'
            }}>
            HTML + CSS + JS
          </Text>
          <EnabledExternLink>
            <Text as="a" href="https://www.canva.com/design/DAFLpV21DLY/5GP43_9-0QocXmk7aNAurw/view?utm_content=DAFLpV21DLY&utm_campaign=designshare&utm_medium=link&utm_source=viewer" target="_blank">
              Workshop Slides &nbsp;
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
            <Text as="a" href="https://github.com/M-Xue/opendev-html-css-js-22T3" target="_blank">
              Workshop Demo Code &nbsp;
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
          <EnabledExternLink>
            <Text as="a" href="https://www.notion.so/CSESoc-Open-Dev-HTML-CSS-JavaScript-Exercises-7085baebc47e49a0b1710212eebf4b30" target="_blank">
              Exercises &nbsp;
            </Text>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M104,32V93.8a8.4,8.4,0,0,1-1.1,4.1l-63.6,106A8,8,0,0,0,46.1,216H209.9a8,8,0,0,0,6.8-12.1l-63.6-106a8.4,8.4,0,0,1-1.1-4.1V32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><line x1="88" y1="32" x2="168" y2="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><path d="M62.6,165c11.8-8.7,32.1-13.6,65.4,3,35.7,17.9,56.5,10.8,67.9,1.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
          </EnabledExternLink>
          <EnabledExternLink>
            <Text>
              <Link href="/opendev/htmlcssjs-recordings">
                Recording &nbsp;
              </Link>
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
          </EnabledExternLink>
        </Card>
        <Card
          css={{
            background: 'linear-gradient(75deg, rgb(163, 197, 238) 0%, rgb(199, 219, 242) 100%)',
            height: '22.4em',
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
              padding: '$4'
            }}>
            ReactJS Part 1
          </Text>
          <EnabledExternLink>
            <Text as="a" href="https://www.canva.com/design/DAFMxYKCTfA/CvS4PZce2_8RSuVm-0ppmQ/view?utm_content=DAFMxYKCTfA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank">
              Workshop Slides &nbsp;
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
            <Link href="/open-dev-react-1-workshop-demo-code.zip" download>
              Workshop Demo Code &nbsp;
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            </svg>
          </EnabledExternLink>
          <EnabledExternLink>
            <Text as="a" href="https://snow-equipment-0c9.notion.site/Intro-to-React-Part-1-Exercises-f960c27b17b94115b87c50bdfc4bbb3b" target="_blank">
              Exercises &nbsp;
            </Text>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M104,32V93.8a8.4,8.4,0,0,1-1.1,4.1l-63.6,106A8,8,0,0,0,46.1,216H209.9a8,8,0,0,0,6.8-12.1l-63.6-106a8.4,8.4,0,0,1-1.1-4.1V32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><line x1="88" y1="32" x2="168" y2="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><path d="M62.6,165c11.8-8.7,32.1-13.6,65.4,3,35.7,17.9,56.5,10.8,67.9,1.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
          </EnabledExternLink>
          <EnabledExternLink>
            <Link href="/open-dev-react-1-exercises-starter.zip" download>
              Exercises Starter Code &nbsp;
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            </svg>
          </EnabledExternLink>
          <EnabledExternLink>
            <Link href="/open-dev-react-1-exercises-solutions.zip" download>
              Exercises Solutions &nbsp;
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            </svg>
          </EnabledExternLink>
          <EnabledExternLink>
            <Text as="a" href="https://youtu.be/_kOtl-CVdd4" target="_blank">
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
          </EnabledExternLink>
        </Card>
        <Card
          css={{
            background: 'linear-gradient(75deg, rgb(163, 197, 238) 0%, rgb(199, 219, 242) 100%)',
            height: '22.4em',
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
              padding: '$4'
            }}>
            ReactJS Part 2
          </Text>
          <EnabledExternLink>
            <Text as="a" href="https://www.canva.com/design/DAFOwiOIq-w/uZkn6wfQBEfs3gLs9VnHzA/view?utm_content=DAFOwiOIq-w&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank">
              Slides (Components &amp; Props) &nbsp;
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
            <Text as="a" href="https://www.canva.com/design/DAFMNDWVjNY/IYxdLWVn2SJm7nsvpnpoSw/view?utm_content=DAFMNDWVjNY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank">
              Slides (Fetching ) &nbsp;
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
            <Text as="a" href="https://raspy-neon-a4e.notion.site/CSESoc-Open-Dev-Intro-to-React-Part-2-Exercises-8c914fda0d7b49a6811132a3693d111f" target="_blank">
              Exercises &nbsp;
            </Text>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M104,32V93.8a8.4,8.4,0,0,1-1.1,4.1l-63.6,106A8,8,0,0,0,46.1,216H209.9a8,8,0,0,0,6.8-12.1l-63.6-106a8.4,8.4,0,0,1-1.1-4.1V32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><line x1="88" y1="32" x2="168" y2="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><path d="M62.6,165c11.8-8.7,32.1-13.6,65.4,3,35.7,17.9,56.5,10.8,67.9,1.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
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
            height: '22.4em',
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
              padding: '$4',
              textAlign: 'center'
            }}>
            ExpressJS &amp; MongoDB
          </Text>
          <EnabledExternLink>
            <Text as="a" css={{ color: "inherit" }} href="https://www.canva.com/design/DAFQGm7-JI8/iTpjUQ5gdn5Q49cTuzudNQ/view?utm_content=DAFQGm7-JI8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank">
              Workshop Slides &nbsp;
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
            <Text as="a" css={{ color: "inherit" }} href="https://raspy-neon-a4e.notion.site/CSESoc-Open-Dev-MongoDB-ExpressJS-f115394e8ecb4f09a3b767bf52c3e6e8" target="_blank">
              Exercises &nbsp;
            </Text>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M104,32V93.8a8.4,8.4,0,0,1-1.1,4.1l-63.6,106A8,8,0,0,0,46.1,216H209.9a8,8,0,0,0,6.8-12.1l-63.6-106a8.4,8.4,0,0,1-1.1-4.1V32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><line x1="88" y1="32" x2="168" y2="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><path d="M62.6,165c11.8-8.7,32.1-13.6,65.4,3,35.7,17.9,56.5,10.8,67.9,1.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
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
      </Flex>
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
