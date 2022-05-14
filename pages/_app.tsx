import '@fontsource/inter'
import '@fontsource/jetbrains-mono'
import Navbar from 'components/Navbar'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
