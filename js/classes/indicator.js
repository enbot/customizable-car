import { Abstract } from './abstract.js'

export class Indicator extends Abstract {

    constructor() {
        super()._ref = document.querySelector('.speed')
    }

    setSpeed(speed) {
        switch (speed) {
            case 'slow':
                this.style('animation', 'moveSpeed 1s infinite')
                this.setText('0.5x')
                break
            case 'medium':
                this.style('animation', 'moveSpeed .6s infinite')
                this.setText('1x')
                break
            case 'fast':
                this.style('animation', 'moveSpeed .3s infinite')
                this.setText('2x')
                break
        }
    }

    setText = (newText) => this._ref.textContent = newText

}