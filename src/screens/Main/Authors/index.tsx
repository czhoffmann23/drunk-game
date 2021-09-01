import { Box, Text, useTheme } from '@chakra-ui/react'

const Authors: React.FC = () => {
  const theme = useTheme()
  const txtC = theme.colors.white.normal
  return (
    <Box flex="1">
      <Text mt="5px" fontSize="11px" textAlign="center" color={txtC}>
        {`By: Pilyclix 👽 Ellalabuscona ⚡ Jellyfish 🌊`}
      </Text>
    </Box>
  )
}

export default Authors
