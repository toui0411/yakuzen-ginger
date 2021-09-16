import { AspectRatio, Stack, Box, chakra, keyframes, Image, Flex, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, HStack } from '@chakra-ui/react'
import { dateDisplay } from 'src/lib/dateDisplay'
import { BlueBorder } from 'src/pages'
import { BlogType } from '../types/common'

type Props = {
  blog: BlogType
}

const BlogTitle: React.FC<Props> = ({ children, blog }) => {
  return <Box {...BlueBorder}>
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
      </Box>
    </Box>
  </Box>
}

export default BlogTitle