import { Sun } from './classes/sun/sun.js';
import { Moon } from './classes/moon/moon.js';
import { Mountain } from './classes/mountain/mountain.js';
import { Tree } from './classes/tree/tree.js';
import { Island } from './classes/island/island.js';
import { Cloud } from './classes/cloud/cloud.js';
import { Car } from './classes/car/car.js';
import { Fence } from './classes/fence/fence.js';
import { Ink } from './classes/ink/ink.js';
import { Indicator } from './classes/indicator/indicator.js';

import { Background } from './controller/background.js';
import { Scenery } from './controller/scenery.js';
import { Speed } from './controller/speed.js';

export class Main {

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

const main = new Main();

const nextcolor = () => main.nextColor();
const nextSpeed = () => main.nextSpeed();
const nextScenery = () => main.nextScenery();
const nextBackground = () => main.nextBackground();

document.querySelector("#button-speed").addEventListener("click", nextSpeed, false);
document.querySelector("#button-scenery").addEventListener("click", nextScenery, false);
document.querySelector("#button-background").addEventListener("click", nextBackground, false);
document.querySelector("#button-carcolor").addEventListener("click", nextcolor, false);