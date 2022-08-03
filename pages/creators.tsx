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

const Creators: NextPage = () => {
  return (
    <ArticleLayout>
      <Head>
        <title>Creators - CSESoc</title>
      </Head>
      <Box as="article" >
        <Box
          as="main"
          css={{ flexDirection: 'column', alignItems: 'center', gap: '$3' }}>
          <Text
            size="display"
            css={{
              color: '$slate12',
              paddingTop: '$6',
              fontWeight: '600'
            }}>
            Creating Content for the Learning Platform
          </Text>
        </Box>
        <Flex
          css={{
            flexDirection: 'column',
            paddingTop: '$6'
            // alignItems: 'left'
          }}>
          <Text>
            The CSESoc community is full of curious and creative minds like you,
            each travelling on a unique journey through the rapidly developing
            world of computing and technology. CSESoc invites you to share your
            knowledge and experience through an open platform dedicated to
            technical educational content made by students, for the students.
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
            size="headline"
            css={{
              color: '$slate12',
              fontWeight: '600',
              marginTop: '$6',
              marginBottom: '$3'
            }}>
            What is this CSESoc Learning Platform?
          </Text>
          <Text>
            The CSESoc Learning Platform is a new website, similar to the{' '}
            <a target="blank" href="https://media.csesoc.org.au/">
              current media website
            </a>
            , to host technical educational content like articles, videos and
            presentations made by members of the community and made publicly
            available online. Content creators are encouraged to submit an
            outline of your ideas so we can work with you to produce content for
            the platform.
          </Text>
          <Text
            size="headline"
            css={{
              color: '$slate12',
              fontWeight: '600',
              marginTop: '$6',
              marginBottom: '$3'
            }}>
            Who can create content for the CSESoc Learning Platform?
          </Text>
          <Text>
            The CSESoc Learning Platform is intended to be an open area of
            learning and discussion for all members of the CSESoc community. We
            value the perspectives and experiences from people of all skill
            levels and backgrounds, from budding beginners to seasoned
            professionals. No matter what your interests are or how much
            experience you have, there's always something you can share that
            others will find valuable. Anyone interested in sharing their
            learning with the community is encouraged to work with us.
          </Text>
          <Text
            size="headline"
            css={{
              color: '$slate12',
              fontWeight: '600',
              marginTop: '$6',
              marginBottom: '$3'
            }}>
            Why should I present my content on the CSESoc Learning Platform?
          </Text>
          <Flex
            css={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around'
            }}>
            <CardSmall>
              Connect with CSESoc's global network of students, alumni and
              sponsors
            </CardSmall>
            <CardSmall>
              Share your passion with a community of keen and curious learners
            </CardSmall>
            <CardSmall>
              Demonstrate your communication skills and technical expertise to
              potential employers
            </CardSmall>
            <CardSmall>
              Reach the extensive CSESoc audience and draw attention to your own
              content platforms
            </CardSmall>
          </Flex>
          <Text
            size="headline"
            css={{
              color: '$slate12',
              fontWeight: '600',
              marginTop: '$6',
              marginBottom: '$3'
            }}>
            What kind of content can I present on the CSESoc Learning Platform?
          </Text>
          <Text>
            The Learning Platform will be a home for technical educational
            content that is not explored in the lectures and tutorials of your
            uni courses, but nonetheless highly relevant to students. For
            inspiration, you could write an introductory overview of a broad
            area like theory of computation, or you could present a deep dive
            into something beyond the scope of a uni course, like the inner
            workings of Git. You could focus on explaining theoretical concepts
            like algorithmic time complexity, or you teach something practical
            like coding up a discord bot. Don't let our imagination limit you!
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
            size="headline"
            css={{
              color: '$slate12',
              fontWeight: '600',
              marginTop: '$6',
              marginBottom: '$3'
            }}>
            What format can I present my content in?
          </Text>
          <Text>
            Express yourself using a format that feels most natural to you and
            your content. Here is a list of common content formats:
          </Text>
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
              <Text css={{ marginTop: '$1' }}>
                Write up a digital article complete with embedded images,
                tables, graphs, code snippets and even mathematical typesetting.
                We'll help you format your article to publication quality.
              </Text>
            </li>
            <li style={{ listStyleType: 'disc' }}>
              <Text css={{ fontWeight: '600' }}>Video or series of videos</Text>
              <Text css={{ marginTop: '$1' }}>
                Hit record and talk through a presentation or a live coding
                demo, or both! Do as many takes as you need to get it just
                right. We'll help you edit your recordings to make the final
                cut.
              </Text>
            </li>
            <li style={{ listStyleType: 'disc' }}>
              <Text css={{ fontWeight: '600' }}>
                Live workshop or presentation
              </Text>
              <Text css={{ marginTop: '$1' }}>
                Present a live workshop either in-person or online, with a
                polished recording posted onto the website. We'll handle all the
                logistics and stream setup to make a smooth-running event for
                you and your audience.
              </Text>
            </li>
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
          <Text>
            If you have other ideas for how you want to present your content, we
            would love to know!
          </Text>
          <Text
            size="headline"
            css={{
              color: '$slate12',
              fontWeight: '600',
              marginTop: '$6',
              marginBottom: '$3'
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
