import { sun1, sun2, sun3 } from '../providers/providers.js'
import { Abstract } from './abstract.js'

export class Sun extends Abstract {

    constructor() {
        super()._ref = document.querySelector(".sun")
        this.animate()
    }

    animate(frame = 1) {
        if (frame == 1) {
            this._ref.style["boxShadow"] = sun1
            frame++
        } else if (frame == 2) {
            this._ref.style["boxShadow"] = sun2
            frame++
        } else {
            this._ref.style["boxShadow"] = sun3
            frame = 1
        }
        setTimeout(() => this.animate(frame), 100)
    }
}