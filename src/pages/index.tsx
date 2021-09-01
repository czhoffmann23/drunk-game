import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { useGame } from 'providers/Game'
import {
  Authors,
  Board,
  CurrentPlayerSlide,
  ModalGame,
  Players,
  RollDice,
} from 'screens/Main'
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

  const renderContent = () => {
    if (loading) return <Loader />

    return (
      <>
        <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
          <Flex flexDir="column" flex="1" h="100%">
            <RollDice />
            <Players />
            <Authors />
          </Flex>
          <Board board={board} />
        </Flex>
        <ModalGame game={actualGame} isOpen={modal} onClose={onClose} />
        <CurrentPlayerSlide openSlide={openSlide} />
      </>
    )
  }

  return (
    <Container>
      <>{renderContent()}</>
    </Container>
  )
}

export default Index
