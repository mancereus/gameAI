export class Dice {
    min: number
    max: number
    constructor(min: number, max: number) {
        this.max = max
        this.min = min
    }
    roll() : number {
        return Math.floor(Math.random() * (this.max - this.min +1)) + this.min
    }
}
