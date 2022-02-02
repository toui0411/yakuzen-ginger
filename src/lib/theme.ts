import { createBreakpoints } from "@chakra-ui/theme-tools"
import { Box, extendTheme } from '@chakra-ui/react'

const styles = {
  global: (props: any) => ({
    "body": {
      color: "black",
      fontFamily: '"游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", "MS P明朝", "MS PMincho", serif',
      bgColor: "red",
      minH: "100vh",
      fontWeight:500,
      lineHeight:1.71,
    },
  })
}

const breakpoints = createBreakpoints({
  sm: "38em",
  md: "50em",
  lg: "70em",
  xl: "80em",
})

export const theme = extendTheme({
  styles: styles,
  colors: {
    red: "#e01f19",
    black: "#231815",
  },
  breakpoints,
  components: {
    Drawer: {
      defaultProps: {
        size: "xs",
        variant: "",
      },
      sizes: {
        "xs": { dialog: { maxW: "70vw", h: "100vh" } }
      },
    },
    Button: {
      baseStyle: {
        
      },
      // 3. We can add a new visual variant
      variants: {
        "original": {
          bg: "rgba(255,255,255,0.3)",
          boxShadow: "0 0 2px 2px #efdfde",
        },
      },
    },
  },
})

