import { AspectRatio, Stack, Box, chakra, keyframes, Image, Flex, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, HStack } from '@chakra-ui/react'
import { InferGetStaticPropsType } from 'next'
import React, { FC, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { blogState } from '@/atoms/common'
import { mcClient } from '@/lib/mc'
import { dateDisplay } from '@/lib/dateDisplay'

import CommonMeta from '@/components/CommonMeta'
import { easeInOutCw, easeOutQuint } from '@/lib/easing'
import { TopAbout } from '@/components/Top/About'
import { TopFv } from '@/components/Top/Fv'
import { ryoutan } from '@/lib/commonProps'

const Top = () => {
  return (
    <Box pt={"55px"} {...ryoutan} bgColor={'red'}>
      <CommonMeta />
      <TopFv></TopFv>
      <TopAbout></TopAbout>
    </Box>
  )
}

export default Top;
