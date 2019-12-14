import { Abstract } from './abstract.js'

export class Ink extends Abstract {

    constructor() {
        super()._ref = document.querySelector(".ink")
    }

    setSpeed(speed) {
        switch (speed) {
            case 'slow':
                this.style('animation', 'move 2s linear 2s infinite')
                break
            case 'medium':
                this.style('animation', 'move 1s linear 2s infinite')
                break
            case 'fast':
                this.style('animation', 'move .5s linear 2s infinite')
                break
        }
    }
}