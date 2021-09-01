export type Game = {
  active: boolean
  name: string
  desc: string
  dice: boolean
  type: number
  random: string[]
}

export type ModalGameProps = {
  game: Game | undefined
  isOpen: boolean
  onClose: () => void
}
