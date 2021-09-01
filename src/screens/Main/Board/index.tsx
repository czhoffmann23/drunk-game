import { Box, Flex, Heading, Text, useTheme } from '@chakra-ui/react'
import {
  DiceFive,
  DiceFour,
  DiceOne,
  DiceSix,
  DiceThree,
  DiceTwo,
  Fire as FireIcon,
} from 'assets/svg'

import { BoardProps, Game } from './types'

const Board: React.FC<BoardProps> = ({ board }) => {
  const theme = useTheme()
  const bgB = theme.colors.green.normal
  const bgS = theme.colors.orange.normal
  const bgBox = theme.colors.blue.darker
  const txtC = theme.colors.white.normal

  const renderCase = (num: number) => {
    switch (num) {
      case 1:
        return <DiceOne w="50px" h="50px" />
      case 2:
        return <DiceTwo w="50px" h="50px" />
      case 3:
        return <DiceThree w="50px" h="50px" />
      case 4:
        return <DiceFour w="50px" h="50px" />
      case 5:
        return <DiceFive w="50px" h="50px" />
      default:
        return <DiceSix w="50px" h="50px" />
    }
  }

  return (
    <Box
      d={{ base: 'none', lg: 'initial' }}
      bg={bgBox}
      maxW="100%"
      h="100%"
      m="10px"
      flex="4"
      borderRadius="20px"
      p="10px">
      <Flex flexDir="column" w="100%" h="100%" position="relative">
        <Box
          h="100%"
          borderRadius="20px"
          p="10px"
          d="flex"
          justifyContent="center"
          alignItems="center">
          <Box w="100%">
            {board.map((b, index: number) => {
              return (
                <Box key={`${index + 1}`} d="flex">
                  {b.map((g: Game, indexG: number) => {
                    const bgColor = g.active
                      ? g.type === 2
                        ? bgS
                        : bgB
                      : 'transparent'
                    if (g.dice && g.name === '0')
                      return (
                        <Box m="10px" w="14%" h="80px" key={`${indexG + 1}`} />
                      )
                    if (g.dice && g.name !== '0')
                      return (
                        <Box
                          m="10px"
                          w="14%"
                          h="60px"
                          d="flex"
                          justifyContent="center"
                          alignItems="center"
                          key={`${indexG + 1}`}>
                          {renderCase(parseInt(g.name))}
                        </Box>
                      )
                    else
                      return (
                        <Box
                          m="10px"
                          w="14%"
                          h="60px"
                          border="2px solid rgba(149, 120, 223, 0.2)"
                          borderRadius="16px"
                          d="flex"
                          justifyContent="center"
                          boxShadow={
                            g.active
                              ? 'box-shadow: 0px 0px 20px #927BCC;'
                              : 'none'
                          }
                          bg={bgColor}
                          alignItems="center"
                          key={`${indexG + 1}`}>
                          {g.type === 2 ? (
                            <Box d="flex" flexDir="column" alignItems="center">
                              <FireIcon w="25px" h="25px" />
                              <Heading
                                marginTop="5px"
                                color={txtC}
                                fontSize="13px">
                                SHOT
                              </Heading>
                            </Box>
                          ) : (
                            <Text
                              fontSize="10px"
                              color={txtC}
                              textAlign="center"
                              fontWeight="bold"
                              noOfLines={1}>
                              {g.name}
                            </Text>
                          )}
                        </Box>
                      )
                  })}
                </Box>
              )
            })}
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Board
