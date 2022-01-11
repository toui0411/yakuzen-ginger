import { AspectRatio, Stack, Box, chakra, keyframes, Image, Flex, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, HStack } from '@chakra-ui/react'
import { InferGetStaticPropsType } from 'next'
import React, { FC, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { blogState } from '@/atoms/common'
import { mcClient } from '@/lib/mc'
import { dateDisplay } from '@/lib/dateDisplay'
import Link from '@/components/Link';
import CommonMeta from '@/components/CommonMeta'
import { easeInOutCw, easeOutQuint } from '@/lib/easing'
import TestText from '@/components/Test/text'

const spin = keyframes`
  from { transform: translate(0,0); }
  to { transform: translate(-100%,0); }
`

const Top = () => {
  return (
    <Box>
      <CommonMeta
        title="site title"
        description="site description"
        url="https://site.jp"
        ogpURL="https://site.jp/img/OGP.png"
      />
    </Box>
  )
}

export default Top;
