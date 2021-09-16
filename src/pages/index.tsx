import { AspectRatio, Stack, Box, chakra, keyframes, Image, Flex, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, HStack } from '@chakra-ui/react'
import { InferGetStaticPropsType } from 'next'
import React, { FC, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { blogState } from 'src/atoms/common'
import { mcClient } from 'src/lib/mc'
import ModalBodyContent from '../components/modal/ModalCompo'
import { BlogType } from '../types/common'
import { dateDisplay } from '../lib/dateDisplay'
import Link from './../components/Link';
import CommonMeta from 'src/components/CommonMeta'

const spin = keyframes`
  from { transform: translate(0,0); }
  to { transform: translate(-100%,0); }
`

export const BlueBorder = {
  borderWidth: '7px',
  borderColor: 'mainBlue'
}


const Top = ({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [state, setState] = useRecoilState(blogState);
  useEffect(() => {
    setState(blogs)
  }, [])
  return (
    <Box pb={8}>
      <CommonMeta
        title="GO VOTE JAPAN"
        description="GO VOTE JAPAN"
        url="https://govote.jp"
        ogpURL="https://govote.jp/img/OGP.png"
      />
      <TopFv>
      </TopFv>
      <TopDesc></TopDesc>
      <TopModal></TopModal>
      <TopSns></TopSns>
      <TopArticleTitle></TopArticleTitle>
      <TopArticleList></TopArticleList>
    </Box>
  )
}

export const TopFv: FC = () => {
  return (
    <Box py={3}>
      <Box position="relative" height={'80vh'}>
        <Flex animation={`${spin} 30s linear infinite`} position="absolute" left="0" top="0">
          {
            [...Array(10).keys()].map(i => {
              return <Image mr={1} key={i} height={'80vh'} src="/img/common/logo.svg"></Image>
            })
          }
        </Flex>
      </Box>
    </Box>
  )
}
const TopDesc: FC = () => {
  return (
    <Box py={0} pb={0}>
      <Box p={4} w="94%" mx="auto" {...BlueBorder}>
        <Box color="mainPink" fontSize={42} lineHeight={1.2}>
          社会は一票ずつ<br />
          変わっていく。
        </Box>
        <Box color="mainBlue" fontSize={18} mt={4} lineHeight={1.7}>
          自分が一票じゃ何も変わらない。どこに入れても変わらない。そんな風に思っても仕方がないくらい、政治と人々の距離が離れているように思います。
          <br />私たちの毎日は、紛れもなく政治と紐づいています。日々の買い物の消費税も、多様性の尊重もコロナウィルス対策も、みんな政治と繋がっています。
          <br />一票じゃ社会は変わらない。でも実は、一票ずつ社会はちゃんと変わっていきます。投票は、社会とつながる第一歩。とにかくまずは投票へ。GoVoteJapanはその後押しをしていきます。
        </Box>
      </Box>
    </Box>
  )
}


const TopModal: FC = () => {
  console.log(ModalBodyContent)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box py={3} textAlign='center'>
      <Box w="94%" mx="auto" {...BlueBorder} borderBottomWidth="0px">
        <Box color="mainPink" py={1} fontSize={18} borderBottomWidth="7px" borderColor="mainBlue">
          2021 第49回衆議院議員選挙
        </Box>
        <Box color="white" cursor="pointer" fontSize={45} py={2} onClick={onOpen} bg="mainPink">
          投票宣言する
        </Box>
        <Box color="white" py={2} fontSize={18} bg="mainBlue">
          GO VOTE JAPAN を応援する
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="95%" bg="mainPink" borderRadius={0}>
          <ModalBody p={0}>
            <ModalBodyContent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

const TopSns: FC = () => {
  return (
    <Box textAlign='center'>
      <Box py={6} w="94%" mx="auto" {...BlueBorder}>
        <HStack mx="auto" spacing="10" justifyContent="center">
          <a href="https://twitter.com/MAKINO1121" target="_blank" rel="noreferrer">
            <Image h={12} src="/img/common/icon_tw.svg"></Image>
          </a>
          <a href="https://www.instagram.com/govote.jp/" target="_blank" rel="noreferrer">
            <Image h={14} src="/img/common/icon_in.svg"></Image>
          </a>
        </HStack>
      </Box>
    </Box>
  )
}
const TopArticleTitle: FC = () => {
  return (
    <Box textAlign='center' pt={3}>
      <Box py={2} fontSize={25} color="mainPink" w="94%" mx="auto" {...BlueBorder}>
        Article
      </Box>
    </Box>
  )
}
const TopArticleList: FC = () => {
  const [blogs, setState] = useRecoilState(blogState);

  return (
    <Box pt={3} w="94%" mx="auto">
      <Stack>
        {
          blogs.map(blog => {
            return <Box {...BlueBorder} key={blog.id}>
              <Link href={`/votes/${blog.id}`}>
                <Box>
                  <AspectRatio maxW="100%" ratio={16 / 9}>
                    <Image src={blog.pic.url} alt="naruto" objectFit="cover" />
                  </AspectRatio>
                </Box>
                <Box py={2} px={2} borderTopWidth="7px" borderColor="mainBlue">
                  <Box justifyContent="space-between">
                    <Box color="mainBlue" fontSize={17}>
                      {blog.title}
                    </Box>
                    {/*        <Box color="mainPink" fontSize="12">
                      {dateDisplay(blog.createdAt)}
                    </Box> */}
                  </Box>
                </Box>
              </Link>
            </Box>
          })
        }
      </Stack>
    </Box>
  )
}

export default Top;


// ビルド時に実行される
export async function getStaticProps() {
  const data = await mcClient.get({ endpoint: "blog" }) as any;
  return {
    props: {
      blogs: data.contents as BlogType[],
    },
  };
}
