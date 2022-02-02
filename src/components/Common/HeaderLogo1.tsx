import { FC } from "react"
import { AspectRatio, Stack, Box, chakra, keyframes, Image, Flex, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, HStack } from '@chakra-ui/react'


interface LogoType {
  color?: string
}

export const HeaderLogo1: FC<LogoType> = ({ color = "#000" }) => {
  return (
    <svg style={{transition:"fill 0.3s"}} fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.94 119.19"><g id="レイヤー_2" data-name="レイヤー 2"><g id="レイヤー_3" data-name="レイヤー 3"><path d="M45.27,47c-1,.27-1.38,1.12-2,1.68a1.17,1.17,0,0,0-.47,1.26.61.61,0,0,0,.11.32,2,2,0,0,1,.62,1.53l0,.14c.3.74.13,1-.68,1a2.34,2.34,0,0,1-1.18-.23c-.28-.17-.42-.58-.59-.91a4.92,4.92,0,0,1-.28-.72c-.45.34-.87.62-1.25.94A29.59,29.59,0,0,0,37,54.3a9.3,9.3,0,0,1-3.44,2,4.71,4.71,0,0,1-1.77.19c-.18,0-.35-.29-.56-.37a4.84,4.84,0,0,1-1.8-1.5c-.42-.45-.33-1-.43-1.49a10.36,10.36,0,0,1,.31-3.88,14.13,14.13,0,0,0,.1-2.9c0-.68.43-1,.76-1.43.12-.14.64,0,1,.1.15,0,.26.21.41.27a1,1,0,0,1,.66,1.32c-.14.68-.32,1.36-.49,2,0,.07-.06.13-.06.19-.16,1.23-.39,2.45-.43,3.68a1.94,1.94,0,0,0,.95,1.81,1.8,1.8,0,0,0,1,.08,5.64,5.64,0,0,0,2.47-1.07c.62-.41,1.26-.82,1.87-1.25s1-.74,1.47-1.08.74-.43,1.1-.66.52-.56.09-.93c-.67-.57-.73-.87-.34-1.66a2,2,0,0,0,0-1.79,3.77,3.77,0,0,1-.34-2.32A4.91,4.91,0,0,0,39.28,42c0-.3-.13-.59-.14-.88-.07-2.52-.09-5-.21-7.55a5.86,5.86,0,0,0-.58-1.51c-.11-.3-.16-.63-.26-.94s-.3-.76-.38-1.15c-.18-.84-.3-1.69-.45-2.53S37,26,36.84,25.22c-.67.4-1.23.77-1.83,1.07-.41.21-.87.3-1.29.48q-1.15.53-2.31,1.08c-.71.35-1.42.7-2.12,1.06-.11.06-.25.15-.28.25a1,1,0,0,1-1.26.71c-.26-.06-.47-.06-.39.26a2.37,2.37,0,0,0-.62.1c-1,.41-2,.84-2.87,1.21l-.28.61-.29-.44C23,32.32,22.7,33,21.72,33l.09-.34-.12-.08-.54.65a2.73,2.73,0,0,0-.79.09c-.86.4-1.7.83-2.53,1.27a.58.58,0,0,0-.25.34.73.73,0,0,1-.95.64.91.91,0,0,0-1.13.68c-.68-.15-1.21.12-1.21.65-.37-.29-.51-.16-.57.25,0,.13-.29.36-.33.34-.53-.33-.82.3-1.25.28-.15.78-1.22,1.38-1.71,1.11a7.58,7.58,0,0,1-1,.74c-.88.48-1.85.84-2.68,1.4a8.66,8.66,0,0,1-1.95.81,13.09,13.09,0,0,0-1.85,1,2.48,2.48,0,0,1-2,.31A1.31,1.31,0,0,1,.2,41.23,1.25,1.25,0,0,1,1,40.84a9.07,9.07,0,0,0,2.71-.63c.83-.36,1.7-.65,2.54-1a7.43,7.43,0,0,0,.88-.47c1.08-.59,2.15-1.2,3.24-1.77.69-.37,1.41-.68,2.12-1l.27-.11,2.49-1.33c1.4-.75,2.79-1.51,4.19-2.25,1-.54,2.07-1.05,3.11-1.56a2.19,2.19,0,0,1,.53-.07,1.18,1.18,0,0,0,.38-.09c.47-.27.91-.57,1.38-.82,1.28-.69,2.56-1.38,3.86-2,1.09-.54,2.23-1,3.32-1.51.87-.41,1.71-.9,2.57-1.34.61-.3,1.23-.56,1.85-.84a.64.64,0,0,0,.41-.83,13.74,13.74,0,0,1-.21-1.81c-.11-1.25-.21-2.49-.31-3.74-.07-.82-.15-1.63-.19-2.45a10.39,10.39,0,0,0-.22-2.61.85.85,0,0,1,1.09-1l.47.17a1.33,1.33,0,0,1,.82,1.66,7.49,7.49,0,0,0-.37,2.92c0,1.31.27,2.61.39,3.92,0,.46,0,.93,0,1.4a6,6,0,0,0,.22,1.1c0,.06.25.14.33.1.86-.42,1.7-.88,2.56-1.3a8.2,8.2,0,0,1,1.75-.7,1.14,1.14,0,0,0,.91-1.12c.08-.53,0-1.08.15-1.61a11.72,11.72,0,0,1,.41-1.36c.24-.75.49-1.49.7-2.25a12.26,12.26,0,0,0,.22-1.21,1.13,1.13,0,1,1,2.16.58c-.4,1.12-.82,2.23-1.22,3.35a4.37,4.37,0,0,0-.08.54c-.08.4-.18.8-.25,1.21a2.57,2.57,0,0,0,0,.47c.79-.27,1.53-.5,2.25-.79.4-.16.75-.44,1.14-.62.86-.4,1.74-.76,2.6-1.15,1.73-.8,3.45-1.63,5.18-2.43,1.26-.58,2.53-1.14,3.8-1.69.69-.3,1.41-.55,2.09-.85,1-.44,2-.92,3-1.37S68,9.85,68.9,9.44s1.51-.82,2.27-1.2c.38-.19.8-.29,1.19-.47.56-.25,1.11-.56,1.67-.81s1-.39,1.45-.59l1.14-.47L78.82,5l1.06-.43c.63-.26,1.27-.5,1.89-.78s1.36-.66,2-1c.34-.16.72-.24,1.06-.39,1-.41,2-.83,3-1.27.54-.24,1-.62,1.57-.81A8,8,0,0,1,91.28,0c.41,0,1,.8.94,1.12a1.42,1.42,0,0,1-1.53,1.2,1.89,1.89,0,0,0-1.2.39c-.3.25-.81.23-1.21.35a6.32,6.32,0,0,0-.6.25,3.36,3.36,0,0,1-.68.28c-.56.13-1.14.17-1.69.33s-1.13.44-1.7.65-.93.32-1.38.51-1,.46-1.48.68c-.16.07-.35.1-.51.17l-2.15,1c-.21.1-.46.11-.66.22a1.18,1.18,0,0,0-.47.44c-.17.39-.4.47-.76.3a.89.89,0,0,0-1,.49.4.4,0,0,1-.53.35c-.68-.3-1.16.2-1.69.4-1,.39-2,.9-3,1.37l-2.39,1.1c-.67.3-1.36.57-2,.88-.94.42-1.87.87-2.82,1.29-.36.16-.73.28-1.1.41-.15.06-.32.09-.47.16-.43.2-.87.39-1.28.63a4,4,0,0,0-.62.52c-.35-.16-.74,0-1.22.29a10.78,10.78,0,0,1-2,.83c-.5.21-1,.45-1.46.69a.29.29,0,0,0-.13.14c-.18.51-.17.51-.57.27-.54.19-1,.34-1.53.55-1.13.48-2.29.93-3.38,1.51-.69.36-1.41.6-2.12.89a2.08,2.08,0,0,0-1.3,1.8c-.09,1.61-.18,3.22-.31,4.83a13.38,13.38,0,0,1-.35,2.18c-.08.28-.42.48-.64.7-.65-.29-.78-.49-.72-1.14s.12-1.08.14-1.62c0-.7,0-1.41,0-2.11,0-.91.09-1.82.14-2.74,0-.34-.14-.47-.46-.32-.51.25-1,.49-1.53.78-.13.07-.16.31-.26.53,0,0,0,0-.05,0-.61-.36-1.13.05-1.64.24-.17.06-.25.38-.36.57l-.73-.05c0,.53,0,.93.08,1.33a13.58,13.58,0,0,0,.65,3.63,1,1,0,0,1,.07.29A1.36,1.36,0,0,0,41.07,31c.64,0,1,.81.87,1.41a23.26,23.26,0,0,0-.58,2.29c-.09.46,0,.54.49.37a1.43,1.43,0,0,1,1.56.39.69.69,0,0,0,.17.17,5.2,5.2,0,0,1,1.11,1,15.92,15.92,0,0,1,1.53,2.06,14.63,14.63,0,0,1,1,2c.14.26.4.49.44.77a7.58,7.58,0,0,1,.09,4c-.16.47-.3.94-.5,1.39-.08.16-.32.26-.5.36a1,1,0,0,1-.38.08C46,47.31,45.53,47.38,45.27,47Zm-4.16-9.76L41.39,42a4.59,4.59,0,0,1,1-.61,20.66,20.66,0,0,1,2.09-.33c.47-.06.59-.26.34-.65s-.56-1-.9-1.4A4.69,4.69,0,0,0,42.84,38,12,12,0,0,0,41.11,37.22Zm4.35,8.85a7.49,7.49,0,0,0,.32-2.89c0-.09-.12-.24-.2-.25a3.21,3.21,0,0,0-1-.06,2.9,2.9,0,0,0-1.49.77,1.54,1.54,0,0,0-.32,2.21c.42-.15.86-.28,1.29-.44.8-.32,1.08-.19,1.3.6C45.34,46,45.37,46,45.46,46.07Z"/><path d="M94.43,101.94A4.44,4.44,0,0,1,95,104a3.52,3.52,0,0,0,.26,1c.06.23.08.48.16.71a7.86,7.86,0,0,0,.41.94,16.54,16.54,0,0,0,1.25,2.17A3.33,3.33,0,0,0,99,110c.27.07.55.11.82.16a4.24,4.24,0,0,0,2.21-.48,3.73,3.73,0,0,0,1.72-1.51c.34-.46.47-1.06.78-1.55a4.13,4.13,0,0,0,.53-1.62,4.54,4.54,0,0,0,.13-.72c0-1.38.1-2.77,0-4.15,0-1.05-.23-2.09-.36-3.13a6.37,6.37,0,0,0-.17-.87A.45.45,0,0,0,104,96a1.18,1.18,0,0,1-1,.46c-.39,0-.73.45-1.13.54-.87.19-1.54.85-2.47.9-.41,0-.8.4-1.19.62L95.7,99.86a1,1,0,0,1-.29,0,8.08,8.08,0,0,0-3.28,1.23c-.09.06-.22,0-.32.09-.25.1-.59.15-.7.33-.35.61-1,.61-1.51.82a2.16,2.16,0,0,0-.67.31,5.83,5.83,0,0,1-1.5.84,1,1,0,0,1-.48.08.48.48,0,0,0-.56.33c-.11.22-.5.31-.77.45l-.59.29-1,.49-.86.45-1.19.64-1.39.73c-.2.1-.41.19-.6.3a1.41,1.41,0,0,0-.49.33,1.6,1.6,0,0,1-1.28.41,1.35,1.35,0,0,0-.87.45,1.08,1.08,0,0,1-.72.44,1.93,1.93,0,0,0-.73.34l-1,.57c-.16.08-.36.1-.48.22a2.75,2.75,0,0,1-1.4.65c-.41.08-.75.48-1.13.72-.16.09-.35.14-.53.22a1,1,0,0,0-.3.14c-.46.35-.9.72-1.35,1.07a1.94,1.94,0,0,1-.36.15c-.31.17-.61.35-.93.5a3,3,0,0,1-.68.27c-.41.07-.89,0-1,.54a.29.29,0,0,1-.17.17,4.43,4.43,0,0,0-1.23.66c-1,.6-2,1.15-3,1.69-.71.37-1.45.69-2.18,1-.14.07-.32.07-.41.17-.8.78-1.92.74-2.87,1.13a.91.91,0,0,1-1.08-.6.82.82,0,0,1,.23-.93,1.71,1.71,0,0,1,1.31-.54,5.18,5.18,0,0,0,1.72-.55l1-.35a1.27,1.27,0,0,0,.32-.13c.24-.15.47-.34.73-.48a5.6,5.6,0,0,1,1.73-.86c.75-.1,1-.73,1.6-1,1.12-.59,2.21-1.22,3.3-1.85.12-.06.2-.19.31-.24s.52-.14.75-.25a1,1,0,0,0,.52-.37,1.6,1.6,0,0,1,1.19-.79,5.39,5.39,0,0,0,1.29-.65,5.62,5.62,0,0,1,.56-.25c.1,0,.22-.06.32-.11l1.29-.67c.31-.16.61-.33.92-.47s.75-.28,1.1-.47a7.7,7.7,0,0,0,.89-.6,5.6,5.6,0,0,1,.45-.4c.49-.3,1-.6,1.5-.85a10,10,0,0,1,2.07-.93,7.9,7.9,0,0,0,2.25-1.12,19.23,19.23,0,0,1,2.5-1.08c.39-.17.78-.31,1.14-.51s.79,0,.91-.55c0,0,.21,0,.32,0a.5.5,0,0,0,.59-.31c.09-.19.42-.25.65-.37l.87-.42c.16-.08.32-.18.49-.25L94,98.59c.17-.08.29-.24.46-.3s.4-.07.58-.15.51-.16.61-.34a1.34,1.34,0,0,1,1.27-.56,2.74,2.74,0,0,0,1-.32l.7-.27.62-.26c.36-.18.72-.37,1.09-.54a7,7,0,0,0,.69-.26,4.09,4.09,0,0,1,1.33-.49,4.07,4.07,0,0,0,1.09-.6,1.55,1.55,0,0,1,.36-.13c.6-.13.76-.42.61-1s-.28-1.32-.41-2c-.23-1.21-.43-2.42-.67-3.63-.16-.82-.38-1.64-.55-2.46-.07-.33-.25-.41-.48-.22a2.37,2.37,0,0,1-1.58.42c-.29,0-.58.06-1,.11-.48-.3-1-.68-1.62-1a3.65,3.65,0,0,1-1.38-1.94,6.83,6.83,0,0,1-.3-3.14,2.08,2.08,0,0,1,.24-.7,17.58,17.58,0,0,1,.87-2.3,3.24,3.24,0,0,1,2.52-1.69,3.32,3.32,0,0,1,2,1.29,4.82,4.82,0,0,1,.49,2.44c0,.11.07.32.14.34.71.16,1,.87,1.49,1.22.1.06.13.26.14.4l.12,2.85a1,1,0,0,0,0,.25,11.6,11.6,0,0,1,.51,2.81c.09.87.37,1.72.55,2.59.12.59.21,1.2.31,1.8s.24,1.43.37,2.13c.06.32.26.24.5.18a17.34,17.34,0,0,0,3.43-1.55c.44-.23,1-.27,1.45-.46.87-.34,1.74-.7,2.6-1.08.57-.25,1.13-.54,1.71-.8a.73.73,0,0,1,.39,0c.22,0,.45.07.48-.26a.15.15,0,0,1,.07-.12l1.23-.56.64-.27a5.91,5.91,0,0,1,1.18-.41,2.31,2.31,0,0,0,1.57-.82.91.91,0,0,1,.44-.27,9.59,9.59,0,0,0,1.23-.29,9.36,9.36,0,0,0,1.07-.7c.18-.1.44-.07.59-.19.47-.4,1.21-.31,1.57-.69.59-.63,1.36-.56,2-.83.87-.33,1.76-.59,2.62-.94s1.57-.71,2.37-1.05a7.66,7.66,0,0,1,1.06-.33,6.3,6.3,0,0,0,2.29-1.06,3.68,3.68,0,0,1,.75-.35c.91-.37,1.84-.69,2.73-1.11.61-.29,1.16-.73,1.75-1.07s1.19-.6,1.76-1A6.33,6.33,0,0,0,145,76a3,3,0,0,1,2.33-.76c.41,0,.79.74.6,1.17a1.9,1.9,0,0,1-.65.77,5.09,5.09,0,0,1-1.59,1c-.53.16-.92.59-1.37.75-.72.26-1.33.69-2,1-1.07.49-2.11,1-3.18,1.54-.29.14-.63.18-.92.31s-.45.33-.69.46a2.18,2.18,0,0,1-.64.25,2.91,2.91,0,0,0-1.46.48c-.26.21-.68.21-1,.38a7.92,7.92,0,0,1-1.63.72c-.07,0-.1.19-.17.26s-.25.24-.28.22c-.58-.35-1,.23-1.46.29a11.15,11.15,0,0,0-1.85.54c-.05,0-.13,0-.13.06,0,.66-.52.36-.81.39a1.33,1.33,0,0,0-1.1.58c-.14.19-.51.23-.77.32s-.93.16-1,.4c-.3.61-.78.53-1.26.58a2.78,2.78,0,0,0-.68.2,6,6,0,0,0-1.55.81c-.28.21-.77.17-1.05.53,0,.08-.33,0-.51,0-.6-.11-.92.44-1.4.61s-.66.5-1,.69a7.29,7.29,0,0,1-1,.29,7.14,7.14,0,0,0-.81.31l-1.56.74,0,0c-.62-.2-1,.31-1.44.53-.89.41-1.77.85-2.67,1.22a24.7,24.7,0,0,1-2.5.88c-1,.31-1.25.82-.9,1.8a1.4,1.4,0,0,1,.12.52,10,10,0,0,0,.38,3,2.25,2.25,0,0,1,0,.58c0,1.47.21,3,.12,4.41a8.92,8.92,0,0,1-1.83,5,12.85,12.85,0,0,1-1.83,1.7,3.31,3.31,0,0,1-2.18.72c-.46,0-.91.18-1.36.17a5.24,5.24,0,0,1-3.11-1.11,4.11,4.11,0,0,1-1.21-1.13c-.48-.93-1.26-1.76-1.19-2.92a.31.31,0,0,0,0-.19c-.77-1.37-.59-2.86-.54-4.32C94.16,102.13,94.16,102.13,94.43,101.94Zm6.13-22.29h.06c-.09-.44-.16-.88-.28-1.31a2,2,0,0,0-.26-.5c-.15.09-.35.15-.44.28a4,4,0,0,0-.9,3.63,2.06,2.06,0,0,0,1.37,1.59c.18.05.46.07.55,0a.77.77,0,0,0,.13-.58c0-.31-.2-.61-.22-.92C100.54,81.11,100.56,80.38,100.56,79.65Z"/><path d="M98,39.52c.55.32,1,.64,1.56.9a.91.91,0,0,0,.63,0,13.38,13.38,0,0,1,4.63-.25,9.15,9.15,0,0,1,2,.51,6.2,6.2,0,0,1,1.24.4,5.69,5.69,0,0,1,2.53,2.37,1.47,1.47,0,0,1,.13.52,7.46,7.46,0,0,1-1.3,4.57c-.35.57-.66,1.16-1,1.73a3,3,0,0,1-.44.5,17.1,17.1,0,0,1-1.66,2.07A13.94,13.94,0,0,0,105,54.23c-.44.47-.91.93-1.37,1.39s-.76.77-1.15,1.14a1.53,1.53,0,0,1-2.11.08,1.87,1.87,0,0,0-.42-.18,4.78,4.78,0,0,0,.24,1.06c.29.58.27.88-.24,1.24a1.11,1.11,0,0,1-1.3.11,2,2,0,0,1-1.07-1.72c0-1.13-.17-2.26-.27-3.4,0-.62-.13-1.24-.17-1.86-.06-.89-.07-1.79-.14-2.68-.11-1.64-.25-3.29-.4-4.93a14.06,14.06,0,0,0-.26-1.58.45.45,0,0,0-.39-.17,10.7,10.7,0,0,0-3.42,2.07,11.64,11.64,0,0,1-1.2.89,2.11,2.11,0,0,1-1.83-.2,1.86,1.86,0,0,1-.36-1.56,1.1,1.1,0,0,1,.89-.92,5.09,5.09,0,0,0,1.19-.76c.44-.3.89-.57,1.3-.9.62-.48,1.23-1,1.8-1.51.86-.8,1.68-1.63,2.51-2.45a1,1,0,0,0,0-1.46.54.54,0,0,0-.52,0,5.36,5.36,0,0,1-2.57.62,2.47,2.47,0,0,1-1.68-.32c-.21-.18-.56-.16-.82-.29-.44-.24-.83-.58-1.29-.79-.3-.15-.62-.16-.81-.54a1.32,1.32,0,0,1,.51-1.79,15.17,15.17,0,0,0,1.7-1.18c.37-.3.57.1.85.13.06,0,.08.29.11.44s0,.21,0,.43c.74-.27,1.43-.49,2.09-.77.35-.15.4-.6.24-1-.4-1-.78-1.95-1.15-2.94-.12-.33-.21-.51-.63-.34a11.79,11.79,0,0,0-2.86,1.64,1.54,1.54,0,0,1-2,.07L88,29.18c-.25-.25-.72-.53-.69-.74A1.62,1.62,0,0,1,88.25,27c.81-.33,1.61-.68,2.41-1s1.3-.54,1.93-.86a.63.63,0,0,0,.26-.48,4,4,0,0,1,.69-2.91,1.37,1.37,0,0,1,1.59-.28c.79.62.91,1.15.42,1.83,0,.07-.13.13-.14.2,0,.25-.07.5-.1.74.28,0,.6.17.83.08a8.54,8.54,0,0,1,2.44-.54c1.11-.09,1.3,0,1.75,1.17-.51.22-1,.47-1.53.66s-.86.22-1.28.36-1,.37-1.52.58a.43.43,0,0,0-.3.58c.15.47.28.94.43,1.41.1.31.23.61.34.91a4.37,4.37,0,0,1,.22.7c.12.65.39.8,1,.58s1.39-.43,2-.7,1-.61,1.51-.79a2,2,0,0,1,1.2,0c.24.07.06.74-.22,1a2.53,2.53,0,0,0-.26.55,2,2,0,0,1,.49,0,2.67,2.67,0,0,1,.58.25c.16.09.3.22.46.3a1.17,1.17,0,0,1,.45,1.09,4.36,4.36,0,0,1-1.42,1.86c-.46.47-.92.94-1.36,1.43-.63.69-1.25,1.39-1.87,2.1C98.85,38.43,98.41,39,98,39.52Zm1.74,16.15h.13a1.4,1.4,0,0,1,.1-.16c.35-.59.72-1.16,1.54-1.14a.91.91,0,0,0,.52-.23c.68-.64,1.32-1.32,2-1.94a17,17,0,0,0,2.82-3.69,17.7,17.7,0,0,0,1.32-3,2,2,0,0,0-.66-2.27,6.85,6.85,0,0,0-2.85-1.17,6.62,6.62,0,0,0-3.91.53,3.22,3.22,0,0,0-1.65,2,4.06,4.06,0,0,0,0,1.21c0,1.15.06,2.31.11,3.46s.12,2.14.21,3.21c.06.7.18,1.4.26,2.1C99.68,55,99.69,55.32,99.71,55.67Zm-4-22-1.57.57A1.18,1.18,0,0,0,95.67,33.7Zm3.82.53-.14-.14c-.22.19-.45.37-.66.56,0,0,0,.17,0,.21s.18,0,.21,0C99.13,34.66,99.31,34.44,99.49,34.23Z"/><path d="M50.07,61.8a2.37,2.37,0,0,1,3.06,0c1.73,1.07,3.49,2.1,5.29,3.06a18.87,18.87,0,0,0,2.85,1.1c1.06.36,2.13.66,3.21.94.62.16,1.26.22,1.89.34a3.87,3.87,0,0,1,.9.25.64.64,0,0,1,.36.4.62.62,0,0,1-.25.47,1.39,1.39,0,0,1-1.39.18.55.55,0,0,0-.28-.06A13.37,13.37,0,0,1,61.88,68,12.73,12.73,0,0,1,60,67.4a28.16,28.16,0,0,1-3.25-1.22c-.46-.23-1.09-.24-1.4-.82-.1-.2-.5-.23-.75-.35-1.18-.54-2.37-1.08-3.54-1.65a6,6,0,0,1-.91-.66,4.68,4.68,0,0,0,0,.59c.18,1.05.39,2.09.54,3.14.18,1.21.31,2.41.45,3.62.08.67.13,1.34.22,2,.13.92.29,1.85.43,2.77l0,.14c0,1.84.11,3.68.13,5.52,0,.92-.37,1.22-1.28,1.18-.54,0-.76-.44-.74-1,0-1.1,0-2.21,0-3.32,0-.69-.08-1.37-.14-2.05s-.14-1.44-.21-2.16-.11-1.18-.2-1.77c-.14-1-.33-1.93-.47-2.9s-.21-1.73-.31-2.6c0-.16,0-.31-.06-.57a10.35,10.35,0,0,0-1.13.64,8.66,8.66,0,0,0-2.22,2.45c-.69,1.12-1.37,2.26-2.07,3.38-.51.83-1,1.63-1.55,2.45a.9.9,0,0,0-.08.28,1.24,1.24,0,0,1-.89,1c-.39,0-1.09-.31-1.14-.72a2.31,2.31,0,0,1,.23-1.08,7.58,7.58,0,0,1,.54-1.11,25.48,25.48,0,0,0,1.54-2.86A15.8,15.8,0,0,1,43,67.68a19.27,19.27,0,0,1,1.47-1.93A5.75,5.75,0,0,1,46.09,64c.5-.28,1-.48,1.56-.75.16-.09.42-.31.4-.41-.21-1-.46-2-.7-2.92,0,0-.06,0-.14-.08-.54.32-1.08.68-1.66,1s-1.46.72-2.16,1.13S42,63,41.25,63.39s-1.35.67-2,1c-.26.15-.45.41-.71.57-1,.63-2.12,1.21-3.14,1.86s-1.88,1.39-2.89,2a34.62,34.62,0,0,1-3.73,1.93,2,2,0,0,1-1.45-.1,1.23,1.23,0,0,1-.58-.94,1.63,1.63,0,0,1,.54-1,14,14,0,0,1,1.51-1.11c.68-.51,1.36-1,2-1.56l2.78-2.15c.68-.54,1.35-1.1,2-1.63s1.21-.91,1.81-1.37a1.83,1.83,0,0,0,.3-.32c.23-.28.44-.51.87-.41.21,0,.46-.13.87-.25A11.17,11.17,0,0,1,38.87,61c-.64.79-1.28,1.57-2,2.31a13.35,13.35,0,0,1-1.22,1,1,1,0,0,0-.17.3,1,1,0,0,0,.32-.06c.5-.31,1-.65,1.48-1,.79-.49,1.59-1,2.39-1.46,1.19-.69,2.39-1.36,3.58-2l2.2-1.3c.21-.13.44-.23.65-.35l.78-.48c-.26-1-.49-1.81-.73-2.66s-.58-1.81-.77-2.73a5.2,5.2,0,0,0-.92-2.22,1.2,1.2,0,0,1-.29-1.09,1.46,1.46,0,0,1,2-.88,2,2,0,0,1,1.07,2.31c-.1.44.22,1,.34,1.47.24,1,.46,2,.7,3,.12.46.25.92.38,1.38.09.27.27.24.48.13l2.13-1.19,2.16-1.19c.83-.45,1.65-.91,2.49-1.34.3-.15.67-.18,1-.35a20.43,20.43,0,0,0,1.93-1.24,1.12,1.12,0,0,1,1.13,0c.07,0,.13.23.12.34a1.6,1.6,0,0,1-1,1.17,2,2,0,0,0-.52.32c-.5.38-1,.74-1.5,1.15s-1.32.53-1.87,1.11a8.38,8.38,0,0,1-2.14,1.26c-1.15.64-2.32,1.23-3.44,1.93-.19.11-.23.66-.17,1C49.62,60.25,49.86,61,50.07,61.8Z"/><path d="M58.65,88c-.35.51-.69,1-1,1.52-.12.18-.26.34-.39.51-.29.37-.29.4,0,.71l-.56.25c.72.14.71.16.36.68a9.33,9.33,0,0,0-.6,1.18c-.61,1.27-1.22,2.54-1.81,3.82-.19.41-.28.86-.5,1.24a32.3,32.3,0,0,0-1.5,3.78,11,11,0,0,0-.54,2.45,19.25,19.25,0,0,0-.19,2,2.15,2.15,0,0,0,1.41,2.15.63.63,0,0,1,.21.12,2.61,2.61,0,0,0,2.31.71c.58,0,1.17,0,1.75,0A5.82,5.82,0,0,0,60,108.4s.09-.08.13-.07c.8.06,1.35-.55,2-.79a5.78,5.78,0,0,0,1.37-.85c1-.72,2-1.46,2.92-2.21a5.57,5.57,0,0,0,.59-.6c.72-.74,1.46-1.45,2.15-2.21a23.44,23.44,0,0,0,2-2.36,1.93,1.93,0,0,0,.3-1.36,33.56,33.56,0,0,1-.27-5.3.67.67,0,0,0-.06-.16c-.22.09-.45.18-.66.28-.37.19-.74.37-1.09.59-1.19.73-2.35,1.52-3.55,2.22-.71.41-1.48.71-2.22,1l-1.27.57a6.62,6.62,0,0,1-3.36.26c-.52,0-.71-.51-.81-1a.73.73,0,0,1,.42-.86c.26-.15.55-.24.81-.39s.33-.3.52-.39a10.57,10.57,0,0,0,1-.43c.48-.3.91-.69,1.39-1a8.33,8.33,0,0,1,1.23-.62c.64-.28,1.3-.53,2.05-.83a2.07,2.07,0,0,1-.91,1.63l.13.14a11,11,0,0,0,1.1-.52c.82-.49,1.63-1,2.44-1.51a24.19,24.19,0,0,0,2.16-1.4,9,9,0,0,0,1.41-1.48,1.43,1.43,0,0,1,1.48-.4,3.15,3.15,0,0,1,1.39,1.18c.2.28.3.49,0,.79a2.85,2.85,0,0,0-1.18,2.26A13.1,13.1,0,0,1,73.26,94a8.71,8.71,0,0,0,.14,1.33c.53-.16.85-.42.87-1a2.17,2.17,0,0,1,.36-.71l.21,0a6.71,6.71,0,0,1,0,1.1c-.2,1-.43,2.06-.68,3.08a4.56,4.56,0,0,1-.39.84.46.46,0,0,0-.08.24,5.58,5.58,0,0,0,1.24,3.78c.23.24.42.26.62,0a.68.68,0,0,1,1,0,.71.71,0,0,1,.19.92c-.12.21,0,.53-.12.77-.27.64-.75.72-1.42.62a3,3,0,0,1-2.08-1.22,25.17,25.17,0,0,1-1.29-2.29c-.14.25-.64.24-.59.73,0,.06-.12.15-.2.19a3.5,3.5,0,0,0-1.28,1.42.7.7,0,0,1-.23.25c-.64.29-.87,1-1.36,1.38a10.7,10.7,0,0,1-2.76,2.16,27.51,27.51,0,0,0-3,1.76c-.68.37-1.42.62-2.13.92a12.48,12.48,0,0,1-4.86.46,6.1,6.1,0,0,1-3.79-1.47,5.48,5.48,0,0,1-1.3-1.69A4.08,4.08,0,0,1,50,106a9.75,9.75,0,0,1,.89-4.73c.32-.77.67-1.53,1-2.3.4-1,.76-1.93,1.16-2.89a10.37,10.37,0,0,1,.53-1c.33-.6.66-1.21,1-1.82s.51-1.11.78-1.65c.45-.89.88-1.78,1.39-2.63.38-.63.89-1.17,1.3-1.79s.78-1.32,1.19-2a4.28,4.28,0,0,1,.41-.45c.32-.35.62-.72,1-1.06.57-.58,1.16-1.14,1.74-1.71a2.75,2.75,0,0,1,1.91-.62,2.51,2.51,0,0,1,2.06,1.46s0,.12.06.14c.56.29.46.89.63,1.37a1.19,1.19,0,0,1,.06.53c0,.41-.13.82-.22,1.22,0,.11-.12.28-.2.3a.48.48,0,0,1-.39-.14,6.26,6.26,0,0,1-.86-1.5,2.33,2.33,0,0,0-.56-1c-.58-.63-1-.7-1.64-.2a8.71,8.71,0,0,0-1.42,1.22c-.45.49-.82,1-1.22,1.58s-1,1.32-1.49,2c-.36.55-.62,1.16-1,1.72-.06.12-.24.16-.37.24,0-.14-.08-.31,0-.42.33-.58.69-1.15,1-1.73a1.31,1.31,0,0,0,.08-.21Zm-3.06,5.81-.22-.09-.91,1.82.24.11Zm-.1-.31a1.09,1.09,0,0,0,.61-1.2Zm.67-1.39.22.12.37-.76-.2-.1Z"/><path d="M86.08,41.83a7.42,7.42,0,0,0,.58-.65.76.76,0,0,1,.9-.23c.12,0,.29.35.25.48a5.52,5.52,0,0,1-.62,1.5,2.64,2.64,0,0,0-.13,2.51c.29.89.52,1.8.79,2.69.13.44.32.86.42,1.3.21.94.4,1.9.56,2.85A11,11,0,0,1,89,54a1,1,0,0,1-.72,1.12A1.34,1.34,0,0,1,87,54.62a.58.58,0,0,1-.14-.31,21.64,21.64,0,0,0-.78-4.22c-.23-.84-.44-1.68-.65-2.53-.12-.47-.23-1-.35-1.43-.19-.79-.33-.89-1-.51a4.67,4.67,0,0,1-3,.35c0,.4.06.82.13,1.23.2,1.13.41,2.26.65,3.38.15.7.4,1.38.55,2.09.31,1.39.58,2.8.85,4.2a12,12,0,0,1,.19,1.58A1.46,1.46,0,0,1,83,59.64c-.4.38-.77,0-1.11,0a.82.82,0,0,1-.61-.75c-.17-1.23-.41-2.46-.63-3.68-.14-.76-.32-1.51-.45-2.27s-.2-1.53-.34-2.29c-.19-1-.42-2.05-.62-3.08-.12-.66-.24-1.32-.34-2a1.76,1.76,0,0,0-.71-1.4,1.62,1.62,0,0,1-.69-1.26c0-.13,0-.35.11-.4.7-.39.5-1,.41-1.59-.25-1.39-.56-2.77-.87-4.14-.16-.67-.38-1.33-.6-2A2.31,2.31,0,0,0,76,34a1.8,1.8,0,0,1-.34-1.31,1.72,1.72,0,0,1,.18-.64,16.45,16.45,0,0,0,.58-1.93,1.82,1.82,0,0,1,2.24-1.47c.31.08.7,0,.95.2A6.55,6.55,0,0,1,80.87,30a13.85,13.85,0,0,1,1.2,1.81,22.64,22.64,0,0,1,1.07,2.15c.51,1.22,1,2.45,1.42,3.69a1.43,1.43,0,0,0,1.12.91,2.38,2.38,0,0,1,.62.41,3.24,3.24,0,0,1-.42.54c-.37.29-.55.58-.29,1.06A11.4,11.4,0,0,1,86.08,41.83ZM78.93,31.29l-.13.1a1.87,1.87,0,0,1,.16.49c0,.75.62,1.41.34,2.21,0,.09.07.22.08.33,0,.64.06,1.27.09,1.91,0,.11,0,.23,0,.34.09.52.2,1,.29,1.55s.16.94.21,1.41.16.58.63.36,1.14-.52,1.68-.83a.55.55,0,0,0,.28-.78c-.34-.75-.57-1.54-.9-2.3s-.76-1.64-1.17-2.44c-.28-.55-.58-1.09-.91-1.61A6.32,6.32,0,0,0,78.93,31.29Zm2,12.13a3.65,3.65,0,0,1,1.38-.05,1.74,1.74,0,0,0,1.7-.26c-.13-.55-.26-1.13-.42-1.69s-.46-.64-.93-.34l-1.12.7A1.36,1.36,0,0,0,81,43.42Z"/><path d="M90.61,19c1.16-.46,2.32-.95,3.5-1.37.87-.3,1.77-.52,2.66-.75a3.13,3.13,0,0,1,1.17-.13,2.2,2.2,0,0,1,1,.41.54.54,0,0,1-.12.93c-.83.3-1.68.55-2.52.83a9.19,9.19,0,0,0-.85.38,6.19,6.19,0,0,1-.58.28c-.49.17-1,.31-1.5.48s-1,.36-1.56.58-.78.43-1.18.62c-.87.42-1.74.85-2.62,1.24a2.6,2.6,0,0,1-2.66-.39,1.11,1.11,0,0,1,.11-1.6,7.94,7.94,0,0,1,.78-.5l.21-.14c.43-.37.89-.72,1.28-1.13.63-.64,1.19-1.34,1.81-2,.83-.85,1.68-1.68,2.48-2.62-.36.06-.73.15-1.1.18a12.51,12.51,0,0,1-2.11.12,7.19,7.19,0,0,1-2.93-.89,3.1,3.1,0,0,1-1-.92.83.83,0,0,1,0-1.06,1.22,1.22,0,0,1,1.43-.36,7.07,7.07,0,0,1,1,.75,3.17,3.17,0,0,0,2.81.57,12.17,12.17,0,0,0,4.26-1.72,14.46,14.46,0,0,0,1.59-1.14,1.66,1.66,0,0,1,1.69-.07,1.68,1.68,0,0,1,.59,1.73.48.48,0,0,1-.12.16c-.57.42-1.15.82-1.71,1.26a4.69,4.69,0,0,0-.63.63l-3.51,3.74c-.57.61-1.15,1.21-1.72,1.81Z"/><path d="M109.46,78.78a4.62,4.62,0,0,0-.07-.65,8.84,8.84,0,0,1-.63-2.42c0-1.21-.17-2.49.63-3.63a3.9,3.9,0,0,1,2-1.42,3.79,3.79,0,0,1,4.3,1.21,4.55,4.55,0,0,1,1.51,3.71,2.86,2.86,0,0,1-.76,2c-.88.86-1.75,1.73-2.65,2.62a2.14,2.14,0,0,0,2.5.6,5.19,5.19,0,0,0,1.74-1.19c.21-.2.63-.17,1-.24a2.61,2.61,0,0,1,.13.86A3,3,0,0,1,118,82.26a3.61,3.61,0,0,1-3.4.67,9.3,9.3,0,0,1-3-1.63c-.12-.1-.34-.09-.52-.12a22,22,0,0,1-2.44-.32,4.94,4.94,0,0,1-2.51-1.57,2.6,2.6,0,0,1-.43-1,.73.73,0,0,1,.15-.44,6.26,6.26,0,0,1,.41-.49.8.8,0,0,1,1-.26,2.82,2.82,0,0,1,1.46,1.26c.1.2.36.32.54.48ZM111,75.44c.12.67.23,1.38.39,2.09a.79.79,0,0,0,1.12.58,14.14,14.14,0,0,0,1.38-1,4.79,4.79,0,0,0,1.13-1.3,2.63,2.63,0,0,0,.28-1.82,1.84,1.84,0,0,0-2-1.69,3,3,0,0,0-.72.17,1.81,1.81,0,0,0-1.25,1.24C111.11,74.23,111.05,74.81,111,75.44Z"/><path d="M123.46,71.62a10.36,10.36,0,0,0,.66-1.12,7.6,7.6,0,0,1,1.48-2.31,6.25,6.25,0,0,1,2.53-1.68,1.33,1.33,0,0,1,.48-.1,27.87,27.87,0,0,1,2.9.22,6.52,6.52,0,0,1,1.39.71c.65.3.84.92,1.17,1.45.15.24.09.41-.18.49a1.23,1.23,0,0,1-1.17-.11,6.8,6.8,0,0,0-2.25-.81,3.86,3.86,0,0,0-2.89.81,5.62,5.62,0,0,0-2.27,3,12.27,12.27,0,0,0-.39,2,4.46,4.46,0,0,0,.69,2.83,3.73,3.73,0,0,1,.26,2c-.06.41-1.14.79-1.48.55s-.61-.4-.9-.62a2.82,2.82,0,0,1-1-2.39,14.37,14.37,0,0,0-.21-2.18,11.23,11.23,0,0,0-.61-1.83c-.34-.91-.65-1.83-1.07-2.7-.54-1.14-1.17-2.24-1.78-3.34a4.76,4.76,0,0,0-.5-.61,1,1,0,0,1,.08-1.33.9.9,0,0,1,1.26,0,17.5,17.5,0,0,1,1.42,1.3c.11.11.1.33.16.5.25.62.5,1.24.76,1.86s.54,1.13.77,1.71c.14.35.2.73.33,1.09A5,5,0,0,0,123.46,71.62Z"/><path d="M91.47,86.55c-.28.71-.52,1.31-.75,1.92-.1.26-.21.52-.29.78-.16.55-.33,1.1-.45,1.66s-.25,1.36-.34,2a2.05,2.05,0,0,0,.06,1,1.28,1.28,0,0,1-.46,1.36c-.51.45-.73.4-1.33,0-.41-.24-.87-.39-1-.89-.07-.21-.16-.42-.24-.62-.31-.77-.6-1.54-.92-2.3S85,89.79,84.6,89a6.13,6.13,0,0,0-1-1.31A2,2,0,0,1,83.21,86a1.26,1.26,0,0,1,1.22-.57c.52.19,1.11.27,1.43.81a2.47,2.47,0,0,1,.35.66,9.24,9.24,0,0,0,1.11,2.86c.1.16.13.38.24.54s.21.26.31.26.24-.17.28-.29c.15-.49.26-1,.41-1.47.31-1,.65-1.89,1-2.84a8.77,8.77,0,0,0,.34-1.34,1.39,1.39,0,0,1,2-1,3.51,3.51,0,0,1,1.51,1.21c.12.2.25.39.36.59.32.55.61,1.13,1,1.65s1,1.26,1.43,1.89c.33.44.68.85,1,1.31a1.3,1.3,0,0,1,.21.81c0,.12-.33.27-.53.32a1.77,1.77,0,0,1-1.93-.67c-1-1.28-2-2.55-3-3.83A3.71,3.71,0,0,0,91.47,86.55Z"/><path d="M54.46,40c.68-.2,1.36-.41,2-.6L59,38.7c.32-.08.64-.15,1-.25a1.63,1.63,0,0,1,1.88.56,1.1,1.1,0,0,1,.13.91.91.91,0,0,1-.76.42,5.52,5.52,0,0,0-2.66.56c-1.38.47-2.7,1.2-4.23,1a3.92,3.92,0,0,1-2.88-1.39,2.34,2.34,0,0,1-.16-2.69,34.47,34.47,0,0,1,1.94-3.17A12.07,12.07,0,0,1,55,32.55a12.56,12.56,0,0,1,3-2.19A5.38,5.38,0,0,1,60,29.5a2.09,2.09,0,0,1,1.22.4c.37.26.23.84-.22,1.12-.75.47-1.55.88-2.27,1.39a18.92,18.92,0,0,0-1.84,1.51,10.8,10.8,0,0,0-1.27,1.26,12.12,12.12,0,0,0-1.38,2,14.9,14.9,0,0,0-.79,2.12c-.09.26.27.57.69.6a1,1,0,0,0,.24,0Z"/><path d="M84.18,99.33c-.2.28-.3.56-.5.68a1.68,1.68,0,0,1-2.33-.51c0-.07-.08-.17-.14-.2-1.07-.57-1.35-1.71-1.9-2.64a4.22,4.22,0,0,1-.62-1.45,3.93,3.93,0,0,1,.11-1.74c.07-.23.69-.46,1-.39a1.85,1.85,0,0,1,1.59,2.08,3.49,3.49,0,0,0,.8,2.16,11.9,11.9,0,0,0,.86,1c.14.14.38.19.53.33A8.18,8.18,0,0,1,84.18,99.33Z"/><path d="M76,83a1.93,1.93,0,0,1,1.67.7c.38.43.87.77,1.2,1.23a10.37,10.37,0,0,1,1,1.75.75.75,0,0,1-.14.58c-.31,0-.79,0-.92-.13a3.62,3.62,0,0,0-2.19-1.23,6,6,0,0,1-1.31-.53c-.9-.54-.84-1-.73-1.57S75.28,83,76,83Z"/></g></g></svg>
  )
}
