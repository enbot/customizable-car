import { Sun } from './sun.js'
import { Moon } from './moon.js'
import { Mountain } from './mountain.js'
import { Tree } from './tree.js'
import { Island } from './island.js'
import { Cloud } from './cloud.js'
import { Car } from './car.js'
import { Fence } from './fence.js'
import { Ink } from './ink.js'
import { Indicator } from './indicator.js'

import { Background } from '../controller/background.js'
import { Scenery } from '../controller/scenery.js'
import { Speed } from '../controller/speed.js'

export default class Screen {

    tree = new Tree()
    sun = new Sun()
    moon = new Moon()
    mountain = new Mountain()
    island = new Island()
    cloud = new Cloud()
    car = new Car()
    fence = new Fence()
    ink = new Ink()
    indicator = new Indicator()

    BACKGROUND_CONTROLLER = new Background(
        this.sun,
        this.moon,
        this.mountain,
        this.island,
        this.cloud
    )

    SCENERY_CONTROLLER = new Scenery(
        this.tree
    )

    SPEED_CONTROLLER = new Speed(
        this.fence,
        this.tree,
        this.cloud,
        this.ink,
        this.car,
        this.indicator
    )

    constructor() { this.init() }

    init() {

        this.nextBackground()

        this.nextSpeed()

        this.nextScenery()
    }

    nextColor = () => this.car.nextColor()

    nextSpeed = () => this.SPEED_CONTROLLER.next()

    nextScenery = () => this.SCENERY_CONTROLLER.next()

    nextBackground = () => this.BACKGROUND_CONTROLLER.next()

}
