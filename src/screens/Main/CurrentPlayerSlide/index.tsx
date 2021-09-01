import { Box, Heading, Slide, useTheme } from '@chakra-ui/react'
import { useGame } from 'providers/Game'

import { CurrentPlayerSlideProps } from './types'

const CurrentPlayerSlide: React.FC<CurrentPlayerSlideProps> = ({
  openSlide,
}) => {
  const theme = useTheme()
  const { players, round } = useGame()
  const txtC = theme.colors.white.normal
  const bgC = theme.colors.pink.normal
  return (
    <Slide direction="top" in={openSlide} style={{ zIndex: 10 }}>
      <Box p="40px" color={txtC} bg={bgC} rounded="md" shadow="md">
        <Heading fontSize="30px" textAlign="center" textTransform="uppercase">
          {players && players[round] && `es el turno de ${players[round].name}`}
        </Heading>
      </Box>
    </Slide>
  )
}

export default CurrentPlayerSlide
