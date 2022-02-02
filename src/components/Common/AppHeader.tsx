import { AspectRatio, Stack, Box, chakra, keyframes, Image, Flex, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, HStack } from '@chakra-ui/react'
import { InferGetStaticPropsType } from 'next'
import React, { FC, useCallback, useContext, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { fontSizeChanger, headEn } from '@/lib/commonProps'
import { CustomLink } from '../Link'
import { useRouter } from 'next/dist/client/router'
import { motion, AnimatePresence, useAnimation } from "framer-motion"

const MotionBox = motion(Box)
import { easeOutQuint } from '@/lib/easing'
import { Logo } from './Logo'
import { IconIn } from './IconIn'
import { HeaderLogo1 } from './HeaderLogo1'
import { HeaderLogo2 } from './HeaderLogo2'

export const AppHeader = () => {
  const route = useRouter()
  const [isInview, setIsInview] = useState(false)

  const onScroll = useCallback(() => {
    const isTop = route.route === "/";
    if (isTop) {
      const base = document.querySelector("#topAbout");
      const top = base!.getBoundingClientRect().top;
      if (top - 55 < 0) {
        setIsInview(true)
      } else {
        setIsInview(false)
      }
    } else {
      setIsInview(true)
    }
  }, [route.route]);

  useEffect(() => {
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [route.route, onScroll])
  return (
    <Box position={'fixed'} left={0} top={0} zIndex={10} w={'100%'}>
      <Flex py={'10px'} px={'10px'} h="55px" maxW={'375px'} mx={'auto'}
        justifyContent={"space-between"}
        bgColor={isInview ? "black" : 'red'} position={'relative'}
        transition="all 0.15s"
      >
        <AspectRatio ratio={4 / 3}
          transition={`all 0.6s ${easeOutQuint}`}
          w={'140px'}
          transformOrigin={'left top'}
          transform={isInview ? "scale(0.6) translate(5%,-5%)" : 'translate(-10%,-6%)'}
          position={'absolute'} top={0} left={0}>
          <Box justifyContent={'flex-start!important'}
            overflow={'visible!important'}
          >
            <Box w={0.8}>
              <HeaderLogo1 color={isInview ? "red" : '#000'}></HeaderLogo1>
            </Box>
            <Box position={'absolute'} width={'30%'} bottom={0} right={0}
              transform={isInview ? "scale(2.5) translate(55%,-55%)" : 'translate(0%,-65%)'}
              transition={`all 0.6s ${easeOutQuint}`}
            >
              <HeaderLogo2 color={isInview ? "red" : '#000'}></HeaderLogo2>
            </Box>
          </Box>
        </AspectRatio>
        <Box w={"30px"} ml={'auto'} pt={"2px"}>
          <CustomLink href="https://www.instagram.com/yakuzen_ginger/" target={"_blank"}>
          <IconIn
            color={isInview ? "red" : '#000'}></IconIn>
            </CustomLink>
        </Box>
      </Flex>
    </Box>
  )
}


