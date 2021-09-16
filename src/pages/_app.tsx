import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import * as gtag from '../lib/gtag'
import React, { FC, useEffect } from 'react';
import Head from 'next/head'
import {
  RecoilRoot
} from 'recoil';
import { useRouter } from 'next/dist/client/router';
import '../styles/global.scss'
import { Box, extendTheme } from '@chakra-ui/react'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
const theme = extendTheme({
  colors: {
    mainPink: "#ff0078",
    mainBlue: "#2850ff",
    brand: {
      100: "#ff0078",
      900: "#1a202c",
    },
  },
})


const Footer: FC = () => {
  return (
    <Box textAlign='center' py={3}>
      <Box fontSize={13} color="mainBlue">
        Go Vote Japan
      </Box>
    </Box>
  )
}

const App = ({ Component, pageProps }: AppProps) => {

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (
      url: string,
      { shallow }: { shallow?: boolean }
    ) => {
      if (!shallow) gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo {...SEO} />
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          <Box>
            <Box ml="auto" maxW="500px" overflow="hidden">
              <Component {...pageProps} />
              <Footer />
            </Box>
          </Box>
        </ChakraProvider>
      </RecoilRoot>
    </>
  )
}

export default App