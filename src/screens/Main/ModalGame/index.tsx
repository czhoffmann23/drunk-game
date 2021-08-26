import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useTheme,
} from '@chakra-ui/react'
import { Fire as FireIcon } from 'assets/svg'
import { useGame } from 'providers/Game'

type Game = {
  active: boolean
  name: string
  desc: string
  dice: boolean
  type: number
  random: string[]
}

type ModalGameProps = {
  game: Game | undefined
  isOpen: boolean
  onClose: () => void
}

const ModalGame: React.FC<ModalGameProps> = ({ game, isOpen, onClose }) => {
  const { players, round } = useGame()
  const theme = useTheme()
  const [getRandom, setGetRandom] = useState<string>('')
  const bgColor =
    game && game.type === 2
      ? theme.colors.orange.normal
      : theme.colors.green.normal
  const txtColor = theme.colors.blue.lighter

  const renderIcon = () => {
    if (game && game.type === 2) return <FireIcon w="150px" h="150px" />
  }

  useEffect(() => {
    if (game && game.random.length > 0) {
      const totalRandom = game.random.length
      const rand = Math.floor(Math.random() * totalRandom)
      setGetRandom(game.random[rand])
    }
  }, [game])
  return (
    <Modal
      closeOnOverlayClick={false}
      size="xl"
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={bgColor}>
        <ModalBody>
          <Box
            minH="300px"
            d="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column">
            {renderIcon()}

            <Heading
              as="h1"
              textTransform="uppercase"
              fontSize={{ base: '40px', md: '60px' }}
              textAlign="center"
              color="white">
              {players && players[round] && `🔥 ${players[round].name} 🔥`}
            </Heading>

            <Heading
              as="h1"
              mt="50px"
              textTransform="uppercase"
              fontSize={{ base: '20px', md: '40px' }}
              textAlign="center"
              color="white">
              {game && game.name}
            </Heading>

            <Text mt="10px" fontSize="20px" textAlign="center" color={txtColor}>
              {game && game.desc}
            </Text>

            {getRandom !== '' && (
              <>
                <br />
                <Text
                  mt="20px"
                  color={txtColor}
                  fontSize="20px"
                  fontWeight="bold"
                  textAlign="center">
                  {game && game.random.length > 0 && getRandom}
                </Text>
              </>
            )}
          </Box>
        </ModalBody>
        <ModalFooter d="flex" justifyContent="center" alignItems="center">
          <Button w="80%" colorScheme="purple" mr={3} onClick={onClose}>
            Siguiente
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalGame
