import { AspectRatio, Stack, Box, chakra, keyframes, Image, Flex, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, HStack } from '@chakra-ui/react'
import { InferGetStaticPropsType } from 'next'
import React, { FC, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { blogState } from 'src/atoms/common'
import { mcClient } from 'src/lib/mc'
import { dateDisplay } from '../lib/dateDisplay'
import Link from './../components/Link';
import CommonMeta from 'src/components/CommonMeta'
import { easeInOutCw, easeOutQuint } from 'src/lib/easing'

const spin = keyframes`
  from { transform: translate(0,0); }
  to { transform: translate(-100%,0); }
`

export const BlueBorder = {
  borderWidth: '7px',
  borderColor: 'mainBlue'
}


const Top = () => {
  return (
    <Box>
      <CommonMeta
        title="GO VOTE JAPAN"
        description="GO VOTE JAPAN"
        url="https://govote.jp"
        ogpURL="https://govote.jp/img/OGP.png"
      />
    </Box>
  )
}

export default Top;
