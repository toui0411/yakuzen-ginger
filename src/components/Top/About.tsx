import { Accordion, AccordionPanel, AspectRatio, AccordionItem, Stack, AccordionButton, Box, chakra, keyframes, Image, Flex, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, HStack, ExpandedIndex } from '@chakra-ui/react'
import { InferGetStaticPropsType } from 'next'
import React, { FC, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { blogState } from '@/atoms/common'
import { mcClient } from '@/lib/mc'
import { dateDisplay } from '@/lib/dateDisplay'
import CommonMeta from '@/components/CommonMeta'
import { easeInOutCw, easeOutQuint } from '@/lib/easing'
import { CustomLink } from '../Link'
import { Logo } from '../Common/Logo'
import { IconIn } from '../Common/IconIn'

const ingredients = [
  "姫茴香",
  "小豆ズク",
  "丁子",
  "肉桂",
  "蕃椒",
  "羅漢果",
  "乾姜",
]

const add = [
  "MILK",
  "SODA",
  "HOT WATER",

]
interface Drink {

  en: string;
  jp: string;

}
interface Drinks {
  [key: string]: Drink
}
const drinks: Drinks = {
  milk: {
    en: 'MILK',
    jp: '薬膳ミルクジンジャー'
  },
  soda: {
    en: 'SODA',
    jp: '薬膳ジンジャーエール'
  },
  hot: {
    en: 'HOT WATER',
    jp: '薬膳ホットジンジャー'
  },
}

export const TopAbout = () => {
  const onChange = (i: ExpandedIndex) => {

  }
  return (
    <Box id="topAbout" py={'35px'}>
      <Box w={0.86} mx={'auto'}>
        <Flex justifyContent={'space-between'} borderTop={"1px"} borderBottom={'1px'} borderColor={'black'}>
          {ingredients.map((el, index) => {
            return <Box
              fontSize={20}
              py={3}
              w={1 / ingredients.length}
              borderLeft={'1px'} borderColor={'black'}
              borderRight={index === ingredients.length - 1 ? '1px' : '0px'}
              textAlign={'center'}
              key={el} className='ver-txt' display={"flex"} alignItems={'center'} justifyContent={'center'}>
              {el}
            </Box>
          })}
        </Flex>
        <Box mt={8} fontSize={14} letterSpacing={1}>
          <Box as="h2" fontSize={18} letterSpacing={3} textDecoration={'underline'}>
            体も心もポカポカに。
            <br />薬膳ジンジャーできました。
          </Box>
          <Box mt={8}>
            からだに、やさしく、おいしい。
            <br />薬膳をふんだんにつかった
            <br />体も心もポカポカさせる、
            <br />ジンジャーシロップが生まれました。
            <br />
            <br />場所は愛知県一宮。
            <br />「おいしく、健康」を掲げた
            <br />CASAというお店がはじまりです。
            <br />少しでも免疫力を高めるために。
            <br />女性の体の不調に応えるために。
            <br />「食べる」を通じて何ができるのかを、
            <br />ずっと悩みながら試行錯誤していました。
          </Box>
          <Accordion allowToggle onChange={(e) => { onChange(e) }}>
            <AccordionItem border="0px">
              <AccordionPanel border="0px" padding={0}>
                <Box>
                  <br />当たり前のことですが、食と人の体は
                  <br />密接に結びついているものです。
                  <br />日々のおいしい食習慣から体の巡りをよくし、
                  <br />崩れがちなリズムを整える。
                  <br />辿りついたのが七つの薬膳でした。
                  <br />
                  <br />砂糖は使っていません。
                  <br />羅漢果(らかんか)という
                  <br />ノンカロリーの天然甘味料で
                  <br />優しい甘みを生みだします。
                  <br />羅漢果は鉄分なども豊富で、
                  <br />ダイエットにも効果的。
                  <br />「神の果実」とも呼ばれています。
                  <br />
                  <br />「冷え」はさまざまな不調の源です。
                  <br />乾姜(しょうが)をふんだんに使い
                  <br />体を内側から温めます。
                  <br />さらにいくかつの薬膳を加えて
                  <br />栄養バランスを整えるとともに
                  <br />濃厚で、かつ優しい味わいに仕上げています。
                  <br />
                  <br />少量のシロップでも
                  <br />様々なアレンジができます。
                  <br />炭酸水と割ればジンジャーエールのように。
                  <br />ホットミルクと割れば体の芯から
                  <br />温めてくれるミルクジンジャーの完成です。
                  <br />アイスにかけてもおいしく召し上がれます。
                  <br />
                  <br />とにかく、おいしく、健康に。
                  <br />そんな理想を追いかけて
                  <br />探求を重ねに重ねた、薬膳ジンジャー。
                  <br />冬の「冷え」の対策に。
                  <br />疲れた日のご自身の癒しに。
                  <br />ぜひお使いいただけたらうれしいです。
                  <br />
                  <br />そしてみんなで元気な日々を過ごせますように。
                </Box>
              </AccordionPanel>
              <Box mt={8} position={'relative'} border="0px">
                <AccordionButton w={'100%'} m={0} p={0} as="div" border="none" cursor={'pointer'} display={'block'}>
                  <Box textAlign={'center'} position={'relative'}>
                    <Box
                      position={'absolute'} h="1px" bgColor={'black'} w={'38%'}
                      right={0}
                      top={'50%'}
                    />
                    <Box
                      position={'absolute'} h="1px" bgColor={'black'} w={'38%'}
                      left={0}
                      top={'50%'}
                    >
                    </Box>
                    <Box position={'relative'} zIndex={2} fontSize={16}>
                      more
                    </Box>

                  </Box>
                </AccordionButton>
              </Box>
            </AccordionItem>
          </Accordion>

        </Box>
        <Box
          mt={8}
        >
          <ProductArea
          />
        </Box>

        <Box my={12} h={"1px"} bgColor={'black'}>

        </Box>
        <Box>
          <Box w={'140px'} mx={'auto'} textAlign={'center'}>
            <Logo></Logo>
          </Box>
          <Box w={'25px'} h={'25px'} mx={'auto'} position={'relative'} my={6}>
            <Box position={'absolute'} bgColor={'black'} w={'1px'} h={'100%'} top={0} left={'50%'}>

            </Box>
            <Box position={'absolute'} bgColor={'black'} h={'1px'} w={'100%'} top={'50%'} left={0}>

            </Box>
          </Box>

          <Flex justifyContent={'space-between'} borderTop={"1px"} borderBottom={'1px'} borderColor={'black'}>
            {Object.keys(drinks).map((el, index) => {
              return <Box
                fontSize={14}
                py={2}
                w={1 / add.length}
                lineHeight={1}
                borderLeft={'1px'} borderColor={'black'}
                borderRight={index === add.length - 1 ? '1px' : '0px'}
                textAlign={'center'}
                key={el}
                display={"flex"} alignItems={'center'} justifyContent={'center'}>
                {drinks[el].en}
              </Box>
            })}
          </Flex>

          <Box w={'12px'} h={'25px'} mx={'auto'} position={'relative'} my={6}>
            <Box position={'absolute'} bgColor={'black'} w={'1px'} h={'100%'} top={0} left={'0%'}>

            </Box>
            <Box position={'absolute'} bgColor={'black'} w={'1px'} h={'100%'} top={0} right={0}>

            </Box>
          </Box>


          <Flex justifyContent={'space-between'} borderTop={"1px"} borderBottom={'1px'} borderColor={'black'}>
            {Object.keys(drinks).map((el, index) => {
              return <Box
                fontSize={16}
                py={4}
                w={1 / add.length}
                lineHeight={1}
                borderLeft={'1px'} borderColor={'black'}
                borderRight={index === add.length - 1 ? '1px' : '0px'}
                textAlign={'center'}
                key={el}
                display={"flex"} alignItems={'center'} justifyContent={'center'}
                className='ver-txt'
              >
                {drinks[el].jp}
              </Box>
            })}
          </Flex>

          <Flex justifyContent={'space-between'} borderTop={"0px"} borderBottom={'1px'} borderColor={'black'}>
            {Object.keys(drinks).map((el, index) => {
              return <AspectRatio
                ratio={1}
                w={1 / add.length}
                lineHeight={1}
                borderLeft={'1px'} borderColor={'black'}
                borderRight={index === add.length - 1 ? '1px' : '0px'}
                key={el}
              >
                <Box>

                </Box>
              </AspectRatio>
            })}
          </Flex>


          <Box mt={12} h={"1px"} bgColor={'black'}>

          </Box>
          <Box
            mt={8}
          >
            <ProductArea
            />
          </Box>


          <Box my={12} h={"1px"} bgColor={'black'}>

          </Box>
          <Box mt={12} w={12} mx={'auto'}>
            <CustomLink href="https://www.instagram.com/yakuzen_ginger/" target={"_blank"}>
              <IconIn>
              </IconIn>
            </CustomLink>
          </Box>
          <Box
            w={28}
            mt={16}
            mx={'auto'}
          >
            <Image src="/img/common/spice.svg"></Image>
          </Box>


        </Box>
      </Box>
    </Box>
  )
}


export const ProductArea = () => {
  return <Flex alignItems={'flex-end'} justifyContent={'space-between'} fontSize={14} letterSpacing={1}>
    <Box w={.4}>
      <AspectRatio ratio={1}>
        <Image src="/img/prd/prd_pic.jpg"></Image>
      </AspectRatio>
    </Box>
    <Box w={0.52} textAlign={'right'}>
      <Box>
        薬膳ジンジャー
      </Box>
      <Box>
        250ml
      </Box>
      <Box>
        ¥
        <Box as="span" fontSize={'150%'}>
          4,104
        </Box>
        （税込）
      </Box>
      <CustomLink display={'block'}
        mt={2}
        py={1}
        href="https://hana-karasu.jp/shop/products/YJ001"
        target="_blank"
        bgColor={'black'}
        color={'white'}
        textAlign={'center'}
        cursor={'pointer'}
        _hover={{bgColor: 'white', color:"black"}}
        >
        購入ページ
      </CustomLink>
    </Box>
  </Flex>
}