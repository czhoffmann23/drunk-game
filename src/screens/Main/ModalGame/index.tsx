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

type Game = {
  active: boolean
  name: string
  desc: string
  dice: boolean
  type: number
}

type ModalGameProps = {
  game: Game | undefined
  isOpen: boolean
  onClose: () => void
}

const ModalGame: React.FC<ModalGameProps> = ({ game, isOpen, onClose }) => {
  const theme = useTheme()
  const bgColor =
    game && game.type === 2
      ? theme.colors.orange.normal
      : theme.colors.green.normal
  const txtColor = theme.colors.blue.lighter

  const renderIcon = () => {
    if (game && game.type === 2) return <FireIcon w="150px" h="150px" />
  }
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
              {game && game.name}
            </Heading>

            <Text mt="10px" fontSize="20px" textAlign="center" color={txtColor}>
              {game && game.desc}
            </Text>
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
