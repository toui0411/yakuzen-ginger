import { AspectRatio, Stack, Box, chakra, keyframes, Image, Flex, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, HStack } from '@chakra-ui/react'
import router, { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { mcClient } from 'src/lib/mc'
import { BlogType } from 'src/types/common'
import { InferGetStaticPropsType } from 'next'
import { TopFv } from '..'
import BlogTitle from '../../components/BlogTitle'
import BlogContent from 'src/components/BlogContent'
import CommonMeta from 'src/components/CommonMeta'
 
const imagedArray = [
  'https://govote.jp/img/ogp/1.jpg',
  'https://govote.jp/img/ogp/2.jpg',
  'https://govote.jp/img/ogp/3.jpg',
  'https://govote.jp/img/ogp/4.jpg',
]
const Page = () => {
  const router = useRouter()
  const { num } = router.query
  // Make sure we're in the browser
  if (typeof window !== 'undefined') {
    /* location.href="/" */
  }
  useEffect(()=>{
    router.push('/')
  },[])

  return <Box pb={8}>
    <CommonMeta
      title="GO VOTE JAPAN"
      description="GO VOTE JAPAN"
      url={`https://govote.jp/image/${num}`}
      ogpURL={imagedArray[Number(num)]}
    />
    <Box position="fixed" left="0" top="0" w="100%" h="100%" bg="white">
      {/* <Image src="/img/common/logo.svg" maxW="90vw" maxH="90vh" w="100px" position="absolute" left="50%" top="50%" transform="translate(-50%,-50%)"></Image> */}
    </Box>
  </Box>
}

// 最初に実行される。事前ビルドするパスを配列でreturnする。
export async function getStaticPaths() {
  const paths = imagedArray.map((repo, i) => `/image/${i}`)
  // 事前ビルドしたいパスをpathsとして渡す fallbackについては後述
  return { paths, fallback: false }
}
// ビルド時に実行される
export async function getStaticProps({ params }: any) {
  return {
    props: {

    },
  };
}

export default Page