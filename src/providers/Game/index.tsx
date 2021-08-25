import { createContext, useContext, useEffect, useState } from 'react'

const GameContext = createContext<
  | {
      dices: Dice | undefined
      setDices: DispatchDice
      players: Player[] | undefined
      setPlayers: DispatchPlayer
      addToLocalStorage: DispatchAddLocal
      round: number
      setRound: DispatchRound
    }
  | undefined
>(undefined)

type Dice = {
  left: number
  right: number
}

type Player = {
  name: string
}

export type DispatchDice = (action: Dice) => void
export type DispatchPlayer = (action: Player[]) => void
export type DispatchAddLocal = (action: Player[]) => void
export type DispatchRound = (action: number) => void

export const GameProvider: React.FC = ({ children }) => {
  const [dices, setDices] = useState<Dice>()
  const [players, setPlayers] = useState<Player[]>([])
  const [round, setRound] = useState<number>(0)

  const localStorageExist = (name: string) => {
    return localStorage.getItem(name)
  }

  const addToLocalStorage = (p: Player[]) => {
    localStorage.setItem('playersData', JSON.stringify(p))
  }

  // check players data
  useEffect(() => {
    const response = localStorageExist('playersData')
    if (response) {
      const playersData = localStorage.getItem('playersData')
      if (playersData) {
        const data = JSON.parse(playersData)
        setPlayers(data)
      }
    }
  }, [])

  // check round
  useEffect(() => {
    const response = localStorageExist('roundData')
    if (response) {
      const round = localStorage.getItem('roundData')
      if (round) {
        const actualRound = JSON.parse(round)
        setRound(actualRound)
      }
    }
  }, [])

  const values = {
    dices,
    setDices,
    players,
    setPlayers,
    addToLocalStorage,
    round,
    setRound,
  }

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useGame = () => {
  const context = useContext(GameContext)

  if (context === undefined)
    throw new Error('useGame must be used within a GameProvider')

  return context
}
