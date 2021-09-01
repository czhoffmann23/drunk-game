export type BoardProps = {
  board: Game[][]
}

export type Game = {
  active: boolean
  name: string
  desc: string
  dice: boolean
  type: number
}
