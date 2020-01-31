import { islandFrame } from '../providers/providers.js'
import { Abstract } from './abstract.js'

export class Island extends Abstract {

    constructor() {
        super()._ref = document.querySelector(".island")
        this.style('boxShadow', islandFrame)
    }
}