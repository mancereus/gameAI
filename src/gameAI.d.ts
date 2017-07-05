interface Player {
    position: number
    name: String
    data: PlayerData
    chooseAction(game : Game) : (player: Player) => void
}

interface Game {
    winner: Player
}

interface PlayerData {
    position: number
}

export { Player, Game }