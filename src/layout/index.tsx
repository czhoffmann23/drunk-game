import { Box, Flex } from '@chakra-ui/react'

import Styles from './styles'
import { LayoutProps } from './types'

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { container, content } = Styles
  return (
    <Flex w="100%" h="100%" p={container.p} bgGradient={container.bg}>
      <Box
        flex={content.f}
        d={content.d}
        justifyContent={content.jC}
        alignItems={content.aI}
        borderRadius={content.bR}
        p={content.p}>
        {children}
      </Box>
    </Flex>
  )
}

export default Layout
