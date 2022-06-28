import { Html, Head, Main, NextScript } from 'next/document'
import { Partytown } from '@builder.io/partytown/react'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://files.stork-search.net/releases/v1.4.2/basic.css"
        />
        <Partytown
          debug={process.env.NODE_ENV !== 'production'}
          forward={['dataLayer.push']}
        />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              type="text/partytown"
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <script
              type="text/partytown"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                });
              `
              }}
            />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
