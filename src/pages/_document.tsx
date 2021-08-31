import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html>
        <Head>
          <title>Bafu Game</title>
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
