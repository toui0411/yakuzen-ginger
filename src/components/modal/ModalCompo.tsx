import { Input, AspectRatio, Stack, Box, chakra, keyframes, Image, Flex, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, HStack } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { shareInfoState, shareURLState } from 'src/atoms/common'
import { BlueBorder } from 'src/pages'

export default function ModalBodyContent() {
  return (
    <Box>
      <ModalTop />
      <ModalShareImages />
      <ModalShareTags />
      <ModalShareButton />
    </Box>
  )
}

const ModalTop: FC = () => {
  return (
    <Box pt={5} textAlign='center'>
      <Box borderBottomWidth="0px" w="96%" mx="auto" {...BlueBorder}>
        <Box color="white" py={1} fontSize={18} borderBottomWidth="7px" borderColor="mainBlue">
          2021 第49回衆議院議員選挙
        </Box>
        <Box color="mainPink" fontSize={45} py={2} bg="white">
          投票宣言する
        </Box>
      </Box>
    </Box>
  )
}
const imagedArray = [
  '/img/ogp/1.jpg',
  '/img/ogp/2.jpg',
  '/img/ogp/3.jpg',
  '/img/ogp/4.jpg',
]

const ModalShareImages: FC = () => {
  const [state, setState] = useRecoilState(shareInfoState);
  const onSelect = (i: number) => {
    setState({ ...state, shareImage: i })
  };
  return (
    <Box pt={3} textAlign='center'>
      <Box borderBottomWidth="0px" w="96%" mx="auto" {...BlueBorder}>
        <Box color="white" py={1} fontSize={18} borderBottomWidth="7px" borderColor="mainBlue">
          1. シェア画像が選べます！
        </Box>
        <Flex flexWrap="wrap" justifyContent="space-between" color="white" bg="white" fontSize={18}>
          {
            imagedArray.map((img,i) => {
              return <Box cursor="pointer" onClick={() => onSelect(i)} w="50%" key={i} borderWidth="7px" borderColor={state.shareImage == i ? 'mainPink' : 'white'}>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image src={img}>
                  </Image>
                </AspectRatio>
              </Box>
            })
          }
        </Flex>
      </Box>
    </Box>
  )
}


export const shareTaggs = [
  'コロナ対策','経済対策','多様性','消費税','エネルギー','ジェンダー','移民問題','中小企業','外交防衛','給付金','法人税']


const ModalShareTags: FC = () => {
  const [state, setState] = useRecoilState(shareInfoState);
  const removeTag = (i: string) => {
    const fil = state.shareTags.filter(e => e !== i)
    setState({ ...state, shareTags: fil })
  };
  const addTag = (i: string) => {
    setState({ ...state, shareTags: [...state.shareTags, i] })
  };
  return (
    <Box pt={3} textAlign='center'>
      <Box borderBottomWidth="0px" w="96%" mx="auto" {...BlueBorder}>
        <Box color="white" py={1} fontSize={18} borderBottomWidth="7px" borderColor="mainBlue">
          2. 興味あるイシューを選べます
        </Box>
        <Flex flexWrap="wrap" justifyContent="space-between" color="white" bg="white" fontSize={18} p={3}>
          {
            shareTaggs.map((tag, i) => {
              return <HStack cursor="pointer" mt={i > 1 ? 1 : 0} spacing={3} onClick={state.shareTags.includes(tag) ? () => removeTag(tag) : () => addTag(tag)} w="45%" key={i}>
                <Box w={18} h={18} bg="mainPink" position="relative">
                  {
                    state.shareTags.includes(tag) && <Box position="absolute" left="0" top="-2px" transform="rotate(-45deg)" borderBottomWidth='5px' borderLeftWidth='5px' borderColor="mainBlue" w={'20px'} h={'12px'}></Box>
                  }
                </Box>
                <Box color="mainBlue">
                  #{tag}
                </Box>
              </HStack>
            })
          }
        </Flex>
      </Box>
    </Box>
  )
}


const ModalShareButton: FC = () => {
  const tweet = useRecoilValue(shareURLState);
  const onClick=()=>{
    window.open(tweet);
  }
  return (
    <Box py={3} pb={5} textAlign='center' color="white" onClick={()=>{onClick()}}>
      <Box w="96%" mx="auto" {...BlueBorder} py={4}>
        <Box fontSize={42} lineHeight={1}>
          投票宣言する
        </Box>
        <Box fontSize={35} lineHeight={1} mt={2}>
          SHARE
        </Box>
      </Box>
    </Box>
  )
}
