import { Sun } from './sun/sun.js';
import { Moon } from './moon/moon.js';
import { Mountain } from './mountain/mountain.js';
import { Tree } from './tree/tree.js';
import { Island } from './island/island.js';
import { Cloud } from './cloud/cloud.js';
import { Car } from './car/car.js';
import { Fence } from './fence/fence.js';
import { Ink } from './ink/ink.js';
import { Indicator } from './indicator/indicator.js';

import { Background } from '../controller/background.js';
import { Scenery } from '../controller/scenery.js';
import { Speed } from '../controller/speed.js';

export default class Screen {

    tree = new Tree();
    sun = new Sun();
    moon = new Moon();
    mountain = new Mountain();
    island = new Island();
    cloud = new Cloud();
    car = new Car();
    fence = new Fence();
    ink = new Ink();
    indicator = new Indicator();

    BACKGROUND_CONTROLLER = new Background(
        this.sun,
        this.moon,
        this.mountain,
        this.island,
        this.cloud
    );

    SCENERY_CONTROLLER = new Scenery(
        this.tree
    );

    SPEED_CONTROLLER = new Speed(
        this.fence,
        this.tree,
        this.cloud,
        this.ink,
        this.car,
        this.indicator
    );

    constructor() { this.init() }

    init() {

        this.nextBackground();

        this.nextSpeed();

        this.nextScenery();
    }

    nextColor = () => this.car.nextColor();

    nextSpeed = () => this.SPEED_CONTROLLER.next();

    nextScenery = () => this.SCENERY_CONTROLLER.next();

    nextBackground = () => this.BACKGROUND_CONTROLLER.next();

}
