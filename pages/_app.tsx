import '@fontsource/inter'
import '@fontsource/jetbrains-mono'
import Navbar from 'components/Navbar'
import 'styles/styles.css'
// import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Box } from 'components/Box'

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: Use return statement when dark theme is added
  // return (
  //   <ThemeProvider>
  //     <Navbar />
  //     <Component {...pageProps} />
  //   </ThemeProvider>
  // )
  return (
    <Box css={{ backgroundColor: '$slate2', height: '100vh' }}>
      <Navbar />
      <Component {...pageProps} />
    </Box>
  )
}

export default MyApp
