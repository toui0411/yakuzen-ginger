import { FC, useCallback, useEffect, useState } from "react"
import { AspectRatio, Stack, Box, chakra, keyframes, Image, Flex, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, HStack } from '@chakra-ui/react'
import { easeOutQuint } from "@/lib/easing"


interface LogoType {
  color?: string
}

export const BgLogo: FC = ({ }) => {
  const [cursorPos, setCursor] = useState({ x: 0, y: 0 })
  const mouseEvent = useCallback((event: MouseEvent) => {
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;
    var rateX = (event.clientX - centerX) / centerX;
    var rateY = (event.clientY - centerY) / centerY;
    setCursor({
      x: rateX,
      y: rateY,
    })
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', mouseEvent)
  }, [mouseEvent])

  return (
    <Box
      position={'fixed'}
      top={"50%"}
      left={"50%"}
      transform={'translate(-55%,-45%)'}
      zIndex={1}
      maxW={'none'}
      w={'130vw'}
    >
      <Image
        transition={`all 0.6s ${easeOutQuint}`}
        style={{ transform: `translate(${Math.round(cursorPos.x * 10)}px,${Math.round(cursorPos.y * 10)}px)` }}
        src="/img/common/pc_bg.png"
      ></Image>
    </Box>
  )
}


