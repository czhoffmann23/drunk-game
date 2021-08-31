import { useEffect, useState } from 'react'
import { Box, Flex, Heading, Slide, Text } from '@chakra-ui/react'
import { useGame } from 'providers/Game'
import { Board, ModalGame, Players, RollDice } from 'screens/Main'
import { BOARD_1 } from 'screens/Main/constant'

import { Container } from 'components/Container'
import Loader from 'components/Loader'

type Game = {
  active: boolean
  name: string
  desc: string
  dice: boolean
  type: number
  random: string[]
}

const Index: React.FC = () => {
  const { dices, players, round, setRound } = useGame()
  const [board, setBoard] = useState<Game[][]>(BOARD_1)
  const [modal, setModal] = useState<boolean>(false)
  const [actualGame, setActualGame] = useState<Game>()
  const [openSlide, setOpenSlide] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const onClose = () => {
    setModal(false)
    setOpenSlide(true)
    if (players) {
      const totalPlayers = players.length
      const actualRound = round + 1 >= totalPlayers ? 0 : round + 1
      setRound(actualRound)
      setTimeout(() => {
        setOpenSlide(false)
      }, 1300)
    }
  }

  const handleActive = (left: number, right: number) => {
    setTimeout(() => {
      const tempBoard = [...board]
      const newBoard = tempBoard.map((b: Game[], i: number) => {
        return b.map((b2: Game, i2: number) => {
          if (i === left && i2 === right)
            return {
              ...b2,
              active: true,
            }
          else
            return {
              ...b2,
              active: false,
            }
        })
      })
      setActualGame(board[left][right])
      setBoard(newBoard)
      setModal(true)
    }, 800)
  }

  useEffect(() => {
    if (dices) handleActive(dices.left, dices.right)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dices])

  useEffect(() => {
    if (loading)
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
              <Flex flexDir="column" flex="1" h="100%">
                <Box h={{ base: '100%', sm: '50%' }} m="10px" flex="1" p="10px">
                  <RollDice />
                </Box>
                <Box
                  bg="#2E1F55"
                  h={{ base: '100%', sm: '50%' }}
                  m="10px"
                  flex="1"
                  borderRadius="20px"
                  p="10px">
                  <Players />
                </Box>
                <Box flex="1">
                  <Text
                    mt="5px"
                    fontSize="11px"
                    textAlign="center"
                    color="white">
                    Powered by: {`Un grupo de curaos 🥴🍻`}
                  </Text>
                </Box>
              </Flex>
              <Box
                d={{ base: 'none', md: 'initial' }}
                bg="#2E1F55"
                maxW="100%"
                h="100%"
                m="10px"
                flex="4"
                borderRadius="20px"
                p="10px">
                <Board board={board} />
              </Box>
            </Flex>
            <ModalGame game={actualGame} isOpen={modal} onClose={onClose} />
            <Slide direction="top" in={openSlide} style={{ zIndex: 10 }}>
              <Box p="40px" color="white" bg="#FF7888" rounded="md" shadow="md">
                <Heading
                  fontSize="30px"
                  textAlign="center"
                  textTransform="uppercase">
                  {players &&
                    players[round] &&
                    `es el turno de ${players[round].name}`}
                </Heading>
              </Box>
            </Slide>
          </>
        )}
      </>
    </Container>
  )
}

export default Index
