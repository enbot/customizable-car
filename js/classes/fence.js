import { Abstract } from './abstract.js'

export class Fence extends Abstract {

    constructor() {
        super()._ref = document.querySelector(".fence")
    }

    setSpeed(speed) {
        switch (speed) {
            case 'slow':
                this.style('animation', 'moveFence .15s linear 2s infinite')
                break
            case 'medium':
                this.style('animation', 'moveFence .1s linear 2s infinite')
                break
            case 'fast':
                this.style('animation', 'moveFence .09s linear 2s infinite')
                break
        }
    }

}