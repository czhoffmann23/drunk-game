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
    },
    green: {
      normal: '#49D88B',
    },
    orange: {
      normal: '#FCAF3D',
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
    mono: 'Monospace',
  },
  breakpoints,
})

export default theme
