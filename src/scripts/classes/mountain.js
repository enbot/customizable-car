import { forestMontain, icyMountain } from '../../provider.js'
import { Abstract } from './abstract.js'

export class Mountain extends Abstract {

    constructor() {
        super()._ref = document.querySelector(".mountain")
    }

    forest() {
        this.style('boxShadow', forestMontain)
    }

    icy() {
        this.style('boxShadow', icyMountain)
    }
}