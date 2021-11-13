import { AppProps } from 'next/app'
import { ChakraProvider, Image } from '@chakra-ui/react'
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
import Transition from "../components/Transition"
import { theme } from '@/lib/theme';


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
            <Box>
              <Transition location={router.pathname}>
                <Component {...pageProps} />
              </Transition>
            </Box>
          </Box>
        </ChakraProvider>
      </RecoilRoot>
    </>
  )
}

export default App
