import { setForestGround, setIcyGround, setDesertGround } from './functions/ground.js';

import { Sun } from './classes/sun/sun.js';
import { Moon } from './classes/moon/moon.js';
import { Mountain } from './classes/mountain/mountain.js';
import { Tree } from './classes/tree/tree.js';
import { Island } from './classes/island/island.js';
import { Cloud } from './classes/cloud/cloud.js';
import { Car } from './classes/car/car.js';

const tree = new Tree();
const sun = new Sun();
const moon = new Moon();
const mountain = new Mountain();
const island = new Island();
const cloud = new Cloud();
const car = new Car();

var currentScenery = 2;
var currentBackground = 2;
var currentSpeed = 2;

document.querySelector("#button-speed").addEventListener("click", speed, false);
document.querySelector("#button-scenery").addEventListener("click", scenery, false);
document.querySelector("#button-background").addEventListener("click", background, false);
document.querySelector("#button-carcolor").addEventListener("click", nextcolor, false);

nextcolor = () => car.nextColor();

function background() {
    switch (currentBackground) {
        case 1:

            document.documentElement.style.setProperty('--sea-border', 'solid 2px #661AFF');
            document.documentElement.style.setProperty('--sky', 'linear-gradient(0deg, rgba(254, 107, 239, 1) 0%, rgba(254, 107, 239, 1) 11%, rgba(255, 88, 240, 1) 12%, rgba(255, 88, 240, 1) 24%, rgba(239, 66, 254, 1) 25%, rgba(239, 66, 254, 1) 36%, rgba(199, 66, 255, 1) 37%, rgba(199, 66, 255, 1) 49%, rgba(173, 50, 255, 1) 50%, rgba(173, 50, 255, 1) 61%, rgba(155, 33, 254, 1) 62%, rgba(155, 33, 254, 1) 74%, rgba(121, 33, 254, 1) 75%, rgba(121, 33, 254, 1) 86%, rgba(100, 0, 255, 1) 87%, rgba(100, 0, 255, 1) 100%)');
            document.documentElement.style.setProperty('--sea', 'linear-gradient(180deg, rgb(120, 1, 255), rgb(0, 174, 255), rgb(12, 255, 133))');

            island.show();
            mountain.hide();
            sun.hide();
            moon.hide();
            cloud.hide();

            currentBackground = 2;

            break;
        case 2:
            document.documentElement.style.setProperty('--sea-border', 'solid 4px #4B4C4D');
            document.documentElement.style.setProperty('--sky', 'linear-gradient(45deg, #8DD6DE, #C2ECE5, #8DD6DE )');
            document.documentElement.style.setProperty('--sea', 'linear-gradient(180deg, rgb(137, 212, 255), rgb(88, 194, 255))');

            mountain.icy();
            mountain.show();
            island.hide();
            sun.hide();
            moon.hide();
            cloud.show();

            currentBackground = 3;
            break;
        case 3:

            document.documentElement.style.setProperty('--sea-border', 'solid 2px #1D4F11');
            document.documentElement.style.setProperty('--sky', 'linear-gradient(45deg, rgb(29, 72, 210),rgb(29, 72, 210),rgb(0, 174, 255))');
            document.documentElement.style.setProperty('--sea', 'linear-gradient(180deg, rgb(29, 63, 175), rgb(11, 96, 255), rgb(12, 178, 255))');

            mountain.forest();
            mountain.show();
            island.hide();
            sun.show();
            moon.hide();
            cloud.show();

            currentBackground = 4;

            break;
        case 4:
            document.documentElement.style.setProperty('--sea-border', 'solid 2px rgb(0, 32, 83)');
            document.documentElement.style.setProperty('--sky', 'linear-gradient(315deg, rgb(7, 7, 7),rgb(24, 24, 24), rgb(36, 36, 36) )');
            document.documentElement.style.setProperty('--sea', 'linear-gradient(180deg, rgb(8, 27, 92), rgb(12, 60, 148), rgb(7, 81, 116))');

            island.hide();
            mountain.hide();
            sun.hide();
            moon.show();
            cloud.show();

            currentBackground = 1;

            break;
    }
}

function speed() {

    var speed = document.querySelector(".speed");

    var fence = document.querySelector(".fence");

    var ink = document.querySelector(".ink");

    switch (currentSpeed) {
        case 1:

            speed.style["animation"] = 'moveSpeed 1s infinite';

            fence.style["animation"] = 'moveFence .15s linear 2s infinite';

            tree.setSpeed('slow');

            cloud.setSpeed('slow');

            ink.style["animation"] = 'move 2s linear 2s infinite';

            car.setSpeed("slow");

            speed.textContent = '0.5x';

            currentSpeed = 2;

            break;
        case 2:

            speed.style["animation"] = 'moveSpeed .6s infinite';

            fence.style["animation"] = 'moveFence .1s linear 2s infinite';

            tree.setSpeed('medium');

            cloud.setSpeed('medium');

            ink.style["animation"] = 'move 1s linear 2s infinite';

            car.setSpeed('medium');

            speed.textContent = '1x';

            currentSpeed = 3;

            break;

        case 3:

            speed.style["animation"] = 'moveSpeed .3s infinite';

            fence.style["animation"] = 'moveFence .09s linear 2s infinite';

            tree.setSpeed('fast');

            cloud.setSpeed('fast');

            ink.style["animation"] = 'move .5s linear 2s infinite';

            car.setSpeed('fast');

            speed.textContent = '2x';

            currentSpeed = 1;

            break;
    }
}

function scenery() {
    switch (currentScenery) {
        case 1:
            tree.setStyle('desert');
            setDesertGround();
            currentScenery = 2;
            break;
        case 2:
            tree.setStyle('icy');
            setIcyGround();
            currentScenery = 3;
            break;
        case 3:
            tree.setStyle('forest');
            setForestGround();
            currentScenery = 1;
            break;
    }
}


(function main() {

    scenery();

    background();

    speed();

})();