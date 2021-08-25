import { Box, useTheme } from '@chakra-ui/react'

import { ContainerProps } from './types'
const Container: React.FC<ContainerProps> = ({ children }) => {
  const theme = useTheme()
  const { scroll } = theme
  return (
    <Box
      w="100%"
      h="100%"
      overflowY={{ base: 'auto', md: 'hidden' }}
      css={scroll}>
      {children}
    </Box>
  )
}

export default Container
