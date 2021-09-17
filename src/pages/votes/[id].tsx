import { AspectRatio, Stack, Box, chakra, keyframes, Image, Flex, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, HStack } from '@chakra-ui/react'
import router, { useRouter } from 'next/router'
import { FC } from 'react'
import { mcClient } from 'src/lib/mc'
import { BlogType } from 'src/types/common'
import { InferGetStaticPropsType } from 'next'
import { TopFv } from '..'
import BlogTitle from '../../components/BlogTitle'
import BlogContent from 'src/components/BlogContent'
import CommonMeta from 'src/components/CommonMeta'

const Post = ({ blog }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  return <Box pb={8}>
    <CommonMeta
      title={blog.title}
      description={blog.title}
      url={`https://govote.jp/votes/${blog.id}`}
      ogpURL={blog.pic.url}
    />
    <TopFv>
    </TopFv>
    <Box py={6} w="94%" mx="auto">
      <BlogTitle blog={blog} />
      <BlogContent blog={blog} />
    </Box>
  </Box>

}
 
export async function getStaticProps({ params }: any) {
  const id = params.id as string
  const data = await mcClient.get({ endpoint: "blog", contentId: id as string }) as any;
  return {
    props: {
      blog: data as BlogType,
    },
  };
}

export async function getStaticPaths() {
  const data = await mcClient.get({ endpoint: "blog" }) as any;
  const blogs = data.contents as BlogType[]
  const paths = blogs.map(repo => `/votes/${repo.id}`)
  return { paths, fallback: false }
}

export default Post