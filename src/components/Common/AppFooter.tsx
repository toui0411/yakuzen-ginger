import { AspectRatio, Stack, Box, chakra, keyframes, Image, Flex, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, HStack } from '@chakra-ui/react'
import { InferGetStaticPropsType } from 'next'
import React, { FC, useCallback, useContext, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { fontSizeChanger, headEn } from '@/lib/commonProps'
import { CustomLink } from '../Link'
import { useRouter } from 'next/dist/client/router'
import { motion, AnimatePresence, useAnimation } from "framer-motion"

const MotionBox = motion(Box)

export const AppFooter = () => {
  const route = useRouter()
  return (
    <Box textAlign={'center'} fontSize={10} py={6} w={'100%'} >
   YAKUZEN GINGER 2022
    </Box>
  )
}



