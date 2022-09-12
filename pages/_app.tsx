import '@fontsource/inter'
import '@fontsource/jetbrains-mono'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import 'styles/styles.css'
// import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Box } from 'components/Box'
// import 'highlight.js/styles/github-dark.css';
import 'styles/prism-theme.css'
import 'styles/Article.css'
import ArticleLayout from 'components/ArticleLayout'

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: Use return statement when dark theme is added
  // return (
  //   <ThemeProvider>
  //     <Navbar />
  //     <Component {...pageProps} />
  //   </ThemeProvider>
  // )
  return (
    <>
      <Box css={{ height: '100vh' }}>
        <Navbar />
        <Box css={{ height: '3rem' }} />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </>
  )
}

export default MyApp
