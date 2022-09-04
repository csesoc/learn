/* eslint-disable react/no-unescaped-entities */
import ArticleLayout from 'components/ArticleLayout'
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Card, CardSmall } from 'components/Card'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { NextPage } from 'next'
import Head from 'next/head'
import { ArrowRight } from 'phosphor-react'
import Image from 'next/image'
import articleImg from 'pages/images/article_logo.png'
import videoImg from 'pages/images/video_logo.png'
import infographicImg from 'pages/images/infographic_logo.png'
import liveImg from 'pages/images/live_logo.png'

const Creators: NextPage = () => {
  return (
    <ArticleLayout>
      <Head>
        <title>Contribute - CSESoc</title>
      </Head>
      <Box as="article" >
        <Box
          as="main"
          css={{ flexDirection: 'column', alignItems: 'center', gap: '$3' }}>
          <Text
            css={{
              color: '$slate12',
              paddingTop: '$6',
              fontWeight: '600',
              fontSize: '2.0rem',
              "@media (min-width: 768px)": {
                fontSize: '2.4rem',
              }
            }}>
            Become a contributer to the Learning Platform
          </Text>
        </Box>
        <Flex
          css={{
            flexDirection: 'column',
            paddingTop: '$6'
            // alignItems: 'left'
          }}>

          <Text>
            The CSESoc Learning Platform is an open platform dedicated to hosting
            technical educational content within the field of computing and technology.
            As the largest computing student body in the southern hemisphere, {' '}
            <a target="blank" href="https://www.csesoc.unsw.edu.au/about">
              CSESoc
            </a>
            &nbsp;invites you to share your knowledge and experience to passionate and curious
            learners of the CSESoc and wider community.

          </Text>


          <Flex css={{ flexDirection: 'column', alignItems: 'center' }}>
            <a
              target="blank"
              href="https://cseso.cc/ContentCreatorForm"
              style={{ textDecoration: 'none' }}>
              <Button
                size="default"
                css={{
                  marginTop: '$6',
                  marginBottom: '$3',
                  cursor: 'pointer'
                }}>
                Submit an idea
                <ArrowRight weight="bold" />
              </Button>
            </a>
          </Flex>

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
            Why should you present your content on the CSESoc Learning Platform?
          </Text>
          <Flex
            css={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around'
            }}>
            <CardSmall css={{ color: "#6a6a6a" }}>
              {/* <Image src="/images/contribute/network-icon.png" width="200" height="200" objectFit='contain'/> */}
              <Box css={{ margin: '0 auto 0.3rem' }}>
                <Image
                  src="/images/contribute/network-icon.png"
                  width="90"
                  height="90"
                  objectFit="cover"
                />
              </Box>
              Connect with CSESoc's global network of students, alumni and
              sponsors
            </CardSmall>
            <CardSmall css={{ color: "#6a6a6a" }}>
              <Box css={{ margin: '0 auto 0.3rem' }}>
                <Image
                  src="/images/contribute/audience-icon.png"
                  width="90"
                  height="90"
                  objectFit="cover"
                />
              </Box>
              Share your passion with over 10,000 keen and curious UNSW computing students
            </CardSmall>
            <CardSmall css={{ color: "#6a6a6a" }}>
              <Box css={{ margin: '0 auto 0.3rem' }}>
                <Image
                  src="/images/contribute/presentation-icon.png"
                  width="90"
                  height="90"
                  objectFit="cover"
                />
              </Box>
              Demonstrate your technical expertise and communication skills to
              potential employers
            </CardSmall>
          </Flex>
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
            What kind of content are we looking for?
          </Text>
          <Text>
            The CSESoc Learning Platform will be home to technical educational
            content that is not usually explored in uni lectures, but nonetheless
            highly relevant to computing students. You could provide an introductory
            overview on a broad topic like the theory of computation, or dive beyond the
            uni syllabus to explore the inner workings of Git. You could focus on explaining
            theoretical concepts like algorithmic time complexity, or teach something more practical
            like coding up a discord bot. There are endless possibilities!


          </Text>

          <Text css={{ marginTop: '$3' }}>
            Whether you are new to computing or a seasoned professional, anyone interested in sharing
            their learning with the community is highly encouraged to work with us. There's always something
            you can share, that others will find valuable!
          </Text>


          <Text css={{ marginTop: '$3' }}>
            Note: If you are interested in sharing non-technical topics, CSESoc
            also has a home for that! Reach out to{' '}
            <a target="blank" href="mailto:media@csesoc.org.au">
              media@csesoc.org.au
            </a>{' '}
            to discuss your idea with the media team :D
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
            What format can you present your content in?
          </Text>
          <Text>
            Express yourself using a format that feels most natural to you and
            your content. Here is a list of common content formats:
          </Text>



          <Flex  /**grid container */
            css={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              "@media (min-width: 624px)": {
                gridTemplateColumns: '3fr 1fr',
              },
              gridTemplateRows: 'auto auto auto auto',
              width: '100%',
              gridRowGap: "1rem"
            }}>

            <ul style={{ gap: '$2' }}>
              <li style={{ listStyleType: 'disc' }}>
                <Text
                  css={{
                    borderWidth: '100px',
                    borderColor: 'black',
                    fontWeight: '600'
                  }}>
                  Article or blog post
                </Text>

                <Text
                  css={{
                    marginTop: '$1'
                  }}>

                  Write up a digital article complete with embedded images,
                  tables, graphs, code snippets, and even mathematical typesetting.
                  We'll help you format your article to publication quality.
                </Text>
              </li>
            </ul>

            <Box css={{ margin: '0 auto' }}>
              <Image alt="article logo" src={articleImg}
                width="200"
                height="110"
                objectFit="contain"
                layout="fixed"
              />

            </Box>

            <ul style={{ gap: '$2' }}>

              <li style={{ listStyleType: 'disc' }}>
                <Text css={{ fontWeight: '600' }}>Video or a video series</Text>
                <Text css={{ marginTop: '$1' }}>
                  Hit record and talk through a presentation, or conduct a live coding
                  demo. We'll help you edit your recordings to make the final
                  cut.
                </Text>
              </li>
            </ul>
            <Box css={{ margin: '0 auto' }}>

              <Image alt="Video logo" src={videoImg}
                width="200"
                height="98"
                objectFit="contain"
                layout="fixed"
              />
            </Box>
            <ul style={{ gap: '$2' }}>
              <li style={{ listStyleType: 'disc' }}>
                <Text css={{ fontWeight: '600' }}>
                  Live workshop or presentation
                </Text>
                <Text css={{ marginTop: '$1' }}>
                  Present a live workshop either in-person or online, with a
                  polished recording posted onto our website. We'll handle all the
                  logistics and stream setup to make a smooth-running event for
                  you and your audience.
                </Text>
              </li>
            </ul>

            <Box css={{ margin: '0 auto' }}>

              <Image alt="live logo" src={liveImg}
                width="200"
                height="100"
                objectFit="contain"
                layout="fixed"
              />
            </Box>
            <ul style={{ gap: '$2' }}>

              <li style={{ listStyleType: 'disc' }}>
                <Text css={{ fontWeight: '600' }}>
                  Infographic or reference sheet
                </Text>
                <Text css={{ marginTop: '$1' }}>
                  Create a concise overview that students can use at a glance.
                  We'll help with formatting and visual aesthetics to make it
                  readable and appealing.
                </Text>
              </li>

            </ul>

            <Box css={{ margin: '0 auto' }}>

              <Image alt="infographic logo" src={infographicImg}
                width="200"
                height="100"
                objectFit="contain"
                layout="fixed"
              />
            </Box>
          </Flex>

          <Text
            css={{
              marginTop: '$6'
            }}>

            If you have any other ideas to how you would want to present your content,
            let us know!
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
            What support will CSESoc provide to me for creating content?
          </Text>
          <Text>
            We want to make your content creation experience as enjoyable and
            productive as possible. The CSESoc team will handle all the tedious
            work of polishing, publishing and promoting your work, so you can
            focus on bringing out your best ideas. Here’s what we will provide:
          </Text>
          <ul>
            <li style={{ listStyleType: 'disc' }}>
              Graphical illustrations and animations to effectively convey your
              ideas
            </li>
            <li style={{ listStyleType: 'disc' }}>
              Professional aesthetics and visual themes for the presentation of
              your content
            </li>
            <li style={{ listStyleType: 'disc' }}>
              Promotion on CSESoc's high-traffic social media platforms and
              newsletter
            </li>
          </ul>
          <Text>
            Ready to step up to the stage? Submit your content ideas{' '}
            <a target="blank" href="https://cseso.cc/ContentCreatorForm">
              here
            </a>
            .
          </Text>
          <Text css={{ marginTop: '$3' }}>
            If you have any questions, thoughts or suggestions, please don't
            hesitate to reach out to us at{' '}
            <a target="blank" href="mailto:education@csesoc.org.au">
              education@csesoc.org.au
            </a>{' '}
            :D
          </Text>
        </Flex>
      </Box>
    </ArticleLayout>
  )
}

export default Creators
