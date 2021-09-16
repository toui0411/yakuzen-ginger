import { AspectRatio, Stack, Box, chakra, keyframes, Image, Flex, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, HStack } from '@chakra-ui/react'
import { dateDisplay } from 'src/lib/dateDisplay'
import { BlueBorder } from 'src/pages'
import { BlogType } from '../types/common'
import Link from './../components/Link';

type Props = {
  blog: BlogType
}

const BlogContent: React.FC<Props> = ({ children, blog }) => {

  const tweet =
    "https://twitter.com/intent/tweet?url=" +
    encodeURIComponent(
      `https://govote.jp/votes/${blog.id
      }`
    ) +
    "&text=" + encodeURIComponent(`${blog.title} 
`);

  return <Box {...BlueBorder} p={3} pb={8} mt={3}>
    <Box>
      <div
        className="rich-text-area"
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </Box>

    <Box textAlign="center" mt={8}>
      <a href={tweet} target="_blank" rel="noreferrer">
        <Image mx="auto" width="60px" src="/img/common/icon_tw.svg"></Image>
      </a>
    </Box>
    <Box textAlign="center" mt={8} color="mainBlue">
      <Link href="/">
      TOPに戻る
      </Link>
    </Box>
  </Box>
}

export default BlogContent