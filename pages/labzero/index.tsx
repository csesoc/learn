import ArticleLayout from 'components/ArticleLayout'
import { Box } from 'components/Box'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import type { NextPage } from 'next'
import Head from 'next/head'
import { styled } from '@stitches/react'

const LinksContainer = styled(Flex, {
  width: '60%',
  maxWidth: '600px',
  margin: '0 auto',
  justifyContent: 'space-between',
}
)

const LabZero: NextPage = () => {
  return (
    <ArticleLayout>
      <Head>
        <title>Lab 0 – CSESoc Learn</title>
        <meta name="description" content="CSESoc Lab 0" />
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
        Lab 0 2024
      </Text>
      <Box css={{ paddingTop: '$2' }}>
        <Text
          size="info">
          <p>
            CSESoc's Lab 0 is back once again for 2024!
          </p>
          <p>
            Feeling lost after your first COMP1511 lecture? Not sure how to
            navigate VLAB and TigerVNC? Or are you looking to level up your
            home computing setup and get it looking wonderful?
          </p>
          <p>
            If any of that applies to you, then you need to come to Lab 0!
            Come learn how to ditch TigerVNC and upgrade your development
            experience!
          </p>
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
        Useful links:
      </Text>
      <Text
        size="title-lg"
        css={{
          color: '$slate12',
          fontWeight: '200',
          padding: '$2',
          alignSelf: 'center',
          marginTop: '2rem',
        }}>TigerVNC + VLAB</Text>
      <LinksContainer justify="around">
        <a href="https://cgi.cse.unsw.edu.au/~cs1511/24T1/home_computing/vlab.html" target="_blank">UNSW's Official Guide</a>
      </LinksContainer>

      <Text
        size="title-lg"
        css={{
          color: '$slate12',
          fontWeight: '200',
          padding: '$2',
          alignSelf: 'center',
          marginTop: '2em',
        }}>CSE + VSCode</Text>
      <LinksContainer justify="around">
        <a href="https://abiram.me/cse-setup" target="_blank">Abiram's Guide </a>
        <a href="https://abiram.me/cse-sshfs" target="_blank">Further Reading (SSHFS)</a>
      </LinksContainer>

      <Text
        size="title-lg"
        css={{
          color: '$slate12',
          fontWeight: '200',
          padding: '$2',
          alignSelf: 'center',
          marginTop: '2rem',
        }}>VSCode Customising</Text>
      <LinksContainer justify="around">
        <a href="https://www.canva.com/design/DAF9S44qAQs/T2zuda-Kcf0xj58m5ODglw/edit" target="_blank"> Slides </a>
        <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf" target="_blank">VSCode Shortcuts</a>
        <a href="https://vscodethemes.com/" target="_blank">VSCode Themes</a>
      </LinksContainer>


      <Text
        size="title-lg"
        css={{
          color: '$slate12',
          fontWeight: '200',
          padding: '$2',
          alignSelf: 'center',
          marginTop: '2rem',
        }}>Terminal Customising</Text>
      <LinksContainer justify="around">
        <a href="https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH" target="_blank">OhMyZsh</a>
        <a href="https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md" target="_blank">Zsh Autosuggestions</a>
        <a href="https://github.com/romkatv/powerlevel10k?tab=readme-ov-file#oh-my-zsh" target="_blank">PowerLevel10k</a>
      </LinksContainer>

      <Text
        size="title-lg"
        css={{
          color: '$slate12',
          fontWeight: '200',
          padding: '$2',
          alignSelf: 'center',
          marginTop: '2rem',
        }}>Helpful Guides</Text>
      <LinksContainer justify="around">
        <a href="https://www.freecodecamp.org/news/how-to-configure-your-macos-terminal-with-zsh-like-a-pro-c0ab3f3c1156/" target="_blank">MacOS Guide</a>
        <a href="https://github.com/lronsmith/csesoc-edu-wsl-install-guide/blob/main/guide.md" target="_blank">Last year's WSL install guide (Windows)</a>
      </LinksContainer>
    </ArticleLayout >
  )
}

export default LabZero
