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
import { createBreakpoints } from "@chakra-ui/theme-tools"


const styles = {
  global: (props: any) => ({
    "body": {
      color: "mainGreen",
      fontFamily: "'Kiwi Maru', serif"
    },
  })
}

const breakpoints = createBreakpoints({
  sm: "38em",
  md: "50em",
  lg: "70em",
  xl: "80em",
})

const theme = extendTheme({
  styles: styles,
  colors: {
    mainGreen: "#809464",
    beige: "#dfdddb",
  },
  breakpoints,
  components: {
    Drawer: {
      defaultProps: {
        size: "xs",
        variant: "",
      },
      sizes: {
        "xs": { dialog: { maxW: "70vw", h: "100vh" } }
      },
    },
  },
})



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
          <Box bg="mainPink">
            {/* <FixImage /> */}
            <Box mx="auto" maxW="30rem" overflow="hidden" bg="white">
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

const FixImage: FC = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" position="fixed" h="100%" left="0" top="0" w={['0px', 'calc(100vw - 30rem)']}>
      <Image w="100%" src="/img/ogp/1.jpg"></Image>
    </Box>
  )
}


export default App