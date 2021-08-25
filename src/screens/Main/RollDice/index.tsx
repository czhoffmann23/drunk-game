import { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react'
import {
  DiceFive,
  DiceFour,
  DiceOne,
  DiceSix,
  DiceThree,
  DiceTwo,
} from 'assets/svg'
import { useGame } from 'providers/Game'

const RollDice: React.FC = () => {
  const { dices, setDices, players, round } = useGame()
  const toast = useToast()

  const [loading, setLoading] = useState<boolean>(false)

  const showToast = () => {
    toast({
      title: `Deben existir jugadores 😎🍺`,
      position: 'top',
      status: 'error',
      isClosable: true,
    })
  }

  const onRollTheDice = () => {
    if (!players) {
      showToast()
      return
    }
    if (players && players.length === 0) {
      showToast()
      return
    }

    setLoading(true)
    const left = Math.floor(Math.random() * 6) + 1
    const right = Math.floor(Math.random() * 6) + 1
    setDices({
      left,
      right,
    })
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }

  const renderCase = (num: number) => {
    switch (num) {
      case 1:
        return <DiceOne w="84px" h="84px" />
      case 2:
        return <DiceTwo w="84px" h="84px" />
      case 3:
        return <DiceThree w="84px" h="84px" />
      case 4:
        return <DiceFour w="84px" h="84px" />
      case 5:
        return <DiceFive w="84px" h="84px" />
      default:
        return <DiceSix w="84px" h="84px" />
    }
  }

  const renderDices = () => {
    if (loading) return <Spinner size="lg" color="purple" />

    if (dices)
      return (
        <>
          <Box p="5px">{renderCase(dices.left)}</Box>
          <Box p="5px">{renderCase(dices.right)}</Box>
        </>
      )
    return (
      <Text fontSize="13px" color="white">
        Por favor tira los dados
      </Text>
    )
  }

  return (
    <Flex flexDir="column" w="100%" h="100%">
      <Box
        flex="1"
        d="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center">
        <Box d="flex" justifyContent="center" alignItems="center">
          <Heading
            as="h1"
            textTransform="uppercase"
            fontSize="30px"
            color="white">
            DRUNK APP
          </Heading>
        </Box>
        <Text mt="10px" fontSize="18px" color="white">
          Es el turno de
        </Text>
        <Heading textTransform="uppercase" fontSize="30px" color="white">
          {players && players[round] && players[round].name}
        </Heading>
      </Box>
      <Box flex="4" d="flex" justifyContent="center" alignItems="center">
        <Box
          w="100%"
          h="160px"
          m="10px 0"
          borderRadius="30px"
          bg="#FF7888"
          d="flex"
          justifyContent="center"
          alignItems="center">
          <Box
            w="90%"
            h="140px"
            borderRadius="30px"
            bg="linear-gradient(180deg, #EC5566 0%, rgba(255, 120, 136, 0) 100%);"
            filter="drop-shadow(0px 4px 24px rgba(149, 120, 223, 0.2))"
            d="flex"
            justifyContent="center"
            alignItems="center">
            {renderDices()}
          </Box>
        </Box>
      </Box>
      <Box flex="1" d="flex" justifyContent="center" alignItems="center">
        <Button
          w="100%"
          onClick={onRollTheDice}
          colorScheme="whatsapp"
          variant="solid">
          Tira los dados
        </Button>
      </Box>
    </Flex>
  )
}

export default RollDice
