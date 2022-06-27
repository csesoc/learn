import '@fontsource/inter'
import '@fontsource/jetbrains-mono'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import 'styles/styles.css'
// import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

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
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
