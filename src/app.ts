import { Player, Game } from './gameAi'
import { Dice } from './gameUtil'
class DiceGame implements Game {
    playerNames = ['Alfons', 'Bert', 'Connie', 'Doris']
    playerCount : number
    winner: Player
    players = new Array<Player>()
    activePlayer : number
    constructor(playerCount : number) {
        this.playerCount = playerCount
        this.activePlayer = -1
    }
    setupGame() {
        for (let i = 0; i < this.playerCount; i++) {
            this.players[i] = {
                position: i,
                name: this.playerNames[i],
                data: {
                    position: 0
                },
                chooseAction: (game : DiceGame) => {
                    return (player : Player) => {
                            const dice = new Dice(1, 6)
                            const rolled = dice.roll()
                            player.data.position += rolled
                            console.log(`${player.name} rolled ${rolled}. moves to (${player.data.position})`)
                        }

                }
            }
        }

    }
    next() : Player {
        this.activePlayer = (this.activePlayer + 1) % this.playerCount
        if (this.players[this.activePlayer].data.position > 1000) {
            console.log(this.players[this.activePlayer].name + ' has won.')
            this.winner = this.players[this.activePlayer]
        }

        return this.players[this.activePlayer]
    }

}

const game = new DiceGame(4)
game.setupGame()
let player : Player
while ((player = game.next()) && !game.winner) {
    // console.log(`${player.name} (${player.data.position}) starts his move`)
    player.chooseAction(game)(player)
    // console.log(`${player.name} (${player.data.position}) ends his move`)
}