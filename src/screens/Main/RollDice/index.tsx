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
  Beers as BeersIcon,
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
        return <DiceOne w="80px" h="80px" />
      case 2:
        return <DiceTwo w="80px" h="80px" />
      case 3:
        return <DiceThree w="80px" h="80px" />
      case 4:
        return <DiceFour w="80px" h="80px" />
      case 5:
        return <DiceFive w="80px" h="80px" />
      default:
        return <DiceSix w="80px" h="80px" />
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
          <BeersIcon w="55px" h="55px" />
          <Heading
            as="h1"
            ml="8px"
            textTransform="uppercase"
            fontSize="25px"
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
      <Box
        flex="4"
        p="10px 0"
        d="flex"
        justifyContent="center"
        alignItems="center">
        <Box
          w="100%"
          h="95%"
          minH="90px"
          m="10px 0"
          borderRadius="20px"
          bg="#FF7888"
          d="flex"
          justifyContent="center"
          alignItems="center">
          <Box
            w="90%"
            h="90%"
            borderRadius="20px"
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
