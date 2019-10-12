import { snowTree, desertTree, forestTree } from '../providers/providers.js'
import { Abstract } from './abstract.js'

export class Tree extends Abstract {

    constructor() {
        super()._ref = [
            document.querySelector(".tree-1"),
            document.querySelector(".tree-2"),
            document.querySelector(".tree-3"),
            document.querySelector(".tree-4")
        ]
    }

    setStyle(style) {
        switch (style) {

            case 'forest':
                this.style('boxShadow', forestTree)
                break

            case 'icy':
                this.style('boxShadow', snowTree)
                break

            case 'desert':
                this.style('boxShadow', desertTree)
                break
        }
    }

    setSpeed(speed) {

        switch (speed) {
            case 'slow':
                this._ref[0].style["animation"] = 'move 4s linear 3s infinite'
                this._ref[1].style["animation"] = 'move 4s linear 9s infinite'
                this._ref[2].style["animation"] = 'move 4s linear 6s infinite'
                this._ref[3].style["animation"] = 'move 4s linear 12s infinite'
                break

            case 'medium':
                this._ref[0].style["animation"] = 'move 2s linear 2.5s infinite'
                this._ref[1].style["animation"] = 'move 2s linear 3.5s infinite'
                this._ref[2].style["animation"] = 'move 2s linear 3s infinite'
                this._ref[3].style["animation"] = 'move 2s linear 4s infinite'
                break

            case 'fast':
                this._ref[0].style["animation"] = 'move 1s linear 2.5s infinite'
                this._ref[1].style["animation"] = 'move 1s linear 3.5s infinite'
                this._ref[2].style["animation"] = 'move 1s linear 3s infinite'
                this._ref[3].style["animation"] = 'move 1s linear 4s infinite'
                break
        }
    }

}