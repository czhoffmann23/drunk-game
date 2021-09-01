import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
    blue: {
      normal: '#2D2851',
      lighter: '#341E64',
      darker: '#2E1F55',
    },
    green: {
      normal: '#49D88B',
    },
    orange: {
      normal: '#FCAF3D',
    },
    pink: {
      normal: '#FF7888',
      darker: '#EC5566',
    },
    white: {
      normal: 'white',
    },
  },
  scroll: {
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#7750C7',
      borderRadius: '24px',
    },
  },
  fonts: {
    body: 'Inter',
  },
  breakpoints,
})

export default theme
