import { ChakraProvider } from '@chakra-ui/react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { GameProvider } from 'providers/Game'

import '@fontsource/press-start-2p'

import Layout from '../layout'
import theme from '../theme'

import '../styles/index.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <GameProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </GameProvider>
  )
}

export default MyApp
