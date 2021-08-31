import { useState } from 'react'
import { AddIcon, CloseIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useTheme,
} from '@chakra-ui/react'
import { useGame } from 'providers/Game'

type Player = {
  name: string
}

const Players: React.FC = () => {
  const theme = useTheme()
  const { scroll } = theme
  const { players, setPlayers, addToLocalStorage } = useGame()
  const [newName, setNewName] = useState<string>('')

  const handleAdd = () => {
    if (newName === '' || !players) return
    const p = [...players]
    p.push({ name: newName })
    addToLocalStorage(p)
    setPlayers(p)
    setNewName('')
  }

  const handleDelete = (i: number) => {
    if (!players) return
    const p = [...players]
    const newP = p.filter((_, index: number) => {
      return index !== i
    })
    addToLocalStorage(newP)
    setPlayers(newP)
  }

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAdd()
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value)
  }

  return (
    <Flex flexDir="column" w="100%" h="100%">
      <Box h="15%" d="flex" justifyContent="center" alignItems="center">
        <Heading as="h1" color="white" fontWeight="400" fontSize="23px">
          JUGADORES
        </Heading>
      </Box>
      <Box h="85%" borderRadius="20px" p="10px">
        <Box w="100%" h="100%">
          <Box
            h="20%"
            p="5px"
            d="flex"
            justifyContent="center"
            alignItems="center">
            <InputGroup size="md">
              <Input
                placeholder="Nuevo jugador"
                variant="flushed"
                color="white"
                value={newName}
                onKeyPress={handleOnKeyPress}
                onChange={onChange}
              />
              <InputRightElement width="4.5rem">
                <Button
                  size="xs"
                  colorScheme="purple"
                  onClick={handleAdd}
                  leftIcon={<AddIcon />}>
                  Add
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box maxH="80%" p="5px" overflowY="auto" css={scroll}>
            {players &&
              players.map((p: Player, index: number) => {
                return (
                  <Flex
                    m="5px"
                    h="50px"
                    p="5px"
                    alignItems="center"
                    key={`${index + 1}`}
                    justifyContent="space-between">
                    <Heading
                      as="h1"
                      color="white"
                      fontSize="18px"
                      textTransform="uppercase">
                      {p.name}
                    </Heading>
                    <IconButton
                      colorScheme="purple"
                      size="xs"
                      aria-label="Delete"
                      onClick={() => handleDelete(index)}
                      icon={<CloseIcon />}
                    />
                  </Flex>
                )
              })}
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default Players
