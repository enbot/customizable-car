


import { car1, car2 } from './frames/car/_car.js'

import cloudFrame from './frames/unique/_cloud.js'

import { Sun } from './classes/sun/sun.js';

import { Moon } from './classes/moon/moon.js';

import { Mountain } from './classes/mountain/mountain.js';

import { Tree } from './classes/tree/tree.js';

import { setForestGround, setIcyGround, setDesertGround } from './functions/ground.js';

import { Island } from './classes/island/island.js';

const tree = new Tree();

const sun = new Sun();

const moon = new Moon();

const mountain = new Mountain();

const island = new Island();

var currentScenery = 2;
var currentColor = 2;
var currentBackground = 2;
var currentSpeed = 2;
var carSpeed = 50;

var car = document.querySelector(".car");



document.querySelector("#button-speed").addEventListener("click", speed, false);
document.querySelector("#button-scenery").addEventListener("click", scenery, false);
document.querySelector("#button-background").addEventListener("click", background, false);
document.querySelector("#button-carcolor").addEventListener("click", carcolor, false);

var clouds = [
    document.querySelector(".cloud-1"),
    document.querySelector(".cloud-2"),
    document.querySelector(".cloud-3")
];

function main() {
    setOnInit();
    carcolor();
    scenery();
    background();
    speed();
}

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

            for (let cloud of clouds) {
                cloud.style["display"] = 'none';
            }

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

            for (let cloud of clouds) {
                cloud.style["display"] = 'block';
            }

            currentBackground = 3;
            break;
        case 3:

            mountain.forest();

            document.documentElement.style.setProperty('--sea-border', 'solid 2px #1D4F11');
            document.documentElement.style.setProperty('--sky', 'linear-gradient(45deg, rgb(29, 72, 210),rgb(29, 72, 210),rgb(0, 174, 255))');
            document.documentElement.style.setProperty('--sea', 'linear-gradient(180deg, rgb(29, 63, 175), rgb(11, 96, 255), rgb(12, 178, 255))');


            island.hide();

            mountain.show();

            sun.show();

            moon.hide();

            for (let cloud of clouds) {
                cloud.style["display"] = 'block';
            }
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

            for (let cloud of clouds) {
                cloud.style["display"] = 'block';
            }

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

            clouds[0].style["animation"] = 'initFirstCloud 60s linear 1, moveCloud 60s linear 59s infinite';
            clouds[1].style["animation"] = 'initSecondCloud 45s linear 1, moveCloud 50s linear 44s infinite';
            clouds[2].style["animation"] = 'initThirdCloud 40s linear 1, moveCloud 60s linear 39s infinite';

            ink.style["animation"] = 'move 2s linear 2s infinite';
            car.style["animation"] = 'start 2s linear 1, speedup 10s linear 2s infinite, shake 0.5s linear infinite';
            carSpeed = 150;

            speed.textContent = '0.5x';
            currentSpeed = 2;
            break;
        case 2:

            speed.style["animation"] = 'moveSpeed .6s infinite';

            fence.style["animation"] = 'moveFence .1s linear 2s infinite';

            tree.setSpeed('medium');

            clouds[0].style["animation"] = 'initFirstCloud 50s linear 1, moveCloud 50s linear 49s infinite';
            clouds[1].style["animation"] = 'initSecondCloud 35s linear 1, moveCloud 40s linear 34s infinite';
            clouds[2].style["animation"] = 'initThirdCloud 30s linear 1, moveCloud 50s linear 29s infinite';

            ink.style["animation"] = 'move 1s linear 2s infinite';

            car.style["animation"] = 'start 2s linear 1, speedup 5s linear 2s infinite, shake 0.1s linear infinite';

            carSpeed = 70;

            speed.textContent = '1x';
            currentSpeed = 3;
            break;

        case 3:

            speed.style["animation"] = 'moveSpeed .3s infinite';

            fence.style["animation"] = 'moveFence .09s linear 2s infinite';

            tree.setSpeed('fast');

            clouds[0].style["animation"] = 'initFirstCloud 40s linear 1, moveCloud 40s linear 39s infinite';
            clouds[1].style["animation"] = 'initSecondCloud 25s linear 1, moveCloud 30s linear 24s infinite';
            clouds[2].style["animation"] = 'initThirdCloud 20s linear 1, moveCloud 40s linear 19s infinite';

            ink.style["animation"] = 'move .5s linear 2s infinite';
            car.style["animation"] = 'start 2s linear 1, speedup 5s linear 2s infinite, shake 0.05s linear infinite';
            carSpeed = 30;

            speed.textContent = '2x';
            currentSpeed = 1;
            break;
    }
}

function carcolor() {
    switch (currentColor) {
        case 1:
            document.documentElement.style.setProperty('--main-color', '#26526d');
            document.documentElement.style.setProperty('--dark-main', '#1d4055');
            document.documentElement.style.setProperty('--light-main', '#53819e');
            document.documentElement.style.setProperty('--bright-main', '#80a8c0');
            currentColor = 2;
            break;
        case 2:
            document.documentElement.style.setProperty('--main-color', '#6F0000');
            document.documentElement.style.setProperty('--dark-main', '#560D0D');
            document.documentElement.style.setProperty('--light-main', '#940000');
            document.documentElement.style.setProperty('--bright-main', '#C30101');
            currentColor = 3;
            break;
        case 3:
            document.documentElement.style.setProperty('--main-color', '#36421C');
            document.documentElement.style.setProperty('--dark-main', '#2a3511');
            document.documentElement.style.setProperty('--light-main', '#44581D');
            document.documentElement.style.setProperty('--bright-main', '#658226');
            currentColor = 4;
            break;
        case 4:
            document.documentElement.style.setProperty('--main-color', '#DAB600');
            document.documentElement.style.setProperty('--dark-main', '#A98600');
            document.documentElement.style.setProperty('--light-main', '#E9D700');
            document.documentElement.style.setProperty('--bright-main', '#f4e538');
            currentColor = 5;
            break;
        case 5:
            document.documentElement.style.setProperty('--main-color', '#004cc6');
            document.documentElement.style.setProperty('--dark-main', '#153e7f');
            document.documentElement.style.setProperty('--light-main', '#206eea');
            document.documentElement.style.setProperty('--bright-main', '#3d87ff');
            currentColor = 6;
            break;
        case 6:
            document.documentElement.style.setProperty('--main-color', '#bf00ac');
            document.documentElement.style.setProperty('--dark-main', '#8e0080');
            document.documentElement.style.setProperty('--light-main', '#e031ce');
            document.documentElement.style.setProperty('--bright-main', '#ff6bf0');
            currentColor = 7;
            break;
        case 7:
            document.documentElement.style.setProperty('--main-color', '#00c964');
            document.documentElement.style.setProperty('--dark-main', '#008e49');
            document.documentElement.style.setProperty('--light-main', '#00f47e');
            document.documentElement.style.setProperty('--bright-main', '#4fffa9');
            currentColor = 8;
            break;
        case 8:
            document.documentElement.style.setProperty('--main-color', '#e08e00');
            document.documentElement.style.setProperty('--dark-main', '#965f00');
            document.documentElement.style.setProperty('--light-main', '#ffa100');
            document.documentElement.style.setProperty('--bright-main', '#ffc45e');
            currentColor = 1;
            break;
    }
}

function setOnInit() {

    for (let cloud of clouds) cloud.style["boxShadow"] = cloudFrame;

    frameCarStart();

}

function frameCarStart() {
    car.style["boxShadow"] = car1;
    setTimeout(function () {
        frameCarEnd();
    }, carSpeed);
}

function frameCarEnd() {
    car.style["boxShadow"] = car2;
    setTimeout(function () {
        frameCarStart();
    }, carSpeed);
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

main();


// var frame8 = '40px 5px 0 #000000,45px 5px 0 #000000,35px 10px 0 #000000,40px 10px 0 #FFFF00,45px 10px 0 #FFFF00,50px 10px 0 #000000,35px 15px 0 #000000,40px 15px 0 #FFFF00,45px 15px 0 #FFFF00,50px 15px 0 #000000,30px 20px 0 #000000,35px 20px 0 #FFFF00,40px 20px 0 #FFFF00,45px 20px 0 #FFFF00,50px 20px 0 #FFFF00,55px 20px 0 #000000,5px 25px 0 #000000,10px 25px 0 #000000,15px 25px 0 #000000,20px 25px 0 #000000,25px 25px 0 #000000,30px 25px 0 #000000,35px 25px 0 #FFFF00,40px 25px 0 #FFFF00,45px 25px 0 #FFFF00,50px 25px 0 #FFFF00,55px 25px 0 #000000,60px 25px 0 #000000,65px 25px 0 #000000,70px 25px 0 #000000,75px 25px 0 #000000,80px 25px 0 #000000,5px 30px 0 #000000,10px 30px 0 #FFFF00,15px 30px 0 #FFFF00,20px 30px 0 #FFFF00,25px 30px 0 #FFFF00,30px 30px 0 #FFFF00,35px 30px 0 #FFFF00,40px 30px 0 #FFFF00,45px 30px 0 #FFFF00,50px 30px 0 #FFFF00,55px 30px 0 #FFFF00,60px 30px 0 #FFFF00,65px 30px 0 #FFFF00,70px 30px 0 #FFFF00,75px 30px 0 #FFFF00,80px 30px 0 #000000,10px 35px 0 #000000,15px 35px 0 #FFFF00,20px 35px 0 #FFFF00,25px 35px 0 #FFFF00,30px 35px 0 #FFFF00,35px 35px 0 #FFFF00,40px 35px 0 #FFFF00,45px 35px 0 #FFFF00,50px 35px 0 #FFFF00,55px 35px 0 #FFFF00,60px 35px 0 #FFFF00,65px 35px 0 #FFFF00,70px 35px 0 #FFFF00,75px 35px 0 #000000,15px 40px 0 #000000,20px 40px 0 #FFFF00,25px 40px 0 #FFFF00,30px 40px 0 #FFFF00,35px 40px 0 #FFFF00,40px 40px 0 #FFFF00,45px 40px 0 #FFFF00,50px 40px 0 #FFFF00,55px 40px 0 #FFFF00,60px 40px 0 #FFFF00,65px 40px 0 #FFFF00,70px 40px 0 #000000,75px 40px 0 #FFFF00,80px 40px 0 #FFFF00,85px 40px 0 #FFFF00,90px 40px 0 #FFFF00,95px 40px 0 #FFFF00,100px 40px 0 #FFFF00,105px 40px 0 #FFFF00,110px 40px 0 #FFFF00,115px 40px 0 #FFFF00,120px 40px 0 #FFFF00,125px 40px 0 #FFFF00,130px 40px 0 #FFFF00,135px 40px 0 #FFFF00,140px 40px 0 #FFFF00,145px 40px 0 #FFFF00,150px 40px 0 #FFFF00,155px 40px 0 #FFFF00,160px 40px 0 #FFFF00,165px 40px 0 #FFFF00,170px 40px 0 #FFFF00,175px 40px 0 #FFFF00,180px 40px 0 #FFFF00,185px 40px 0 #FFFF00,190px 40px 0 #FFFF00,195px 40px 0 #FFFF00,200px 40px 0 #FFFF00,20px 45px 0 #000000,25px 45px 0 #FFFF00,30px 45px 0 #FFFF00,35px 45px 0 #FFFF00,40px 45px 0 #FFFF00,45px 45px 0 #FFFF00,50px 45px 0 #FFFF00,55px 45px 0 #FFFF00,60px 45px 0 #FFFF00,65px 45px 0 #000000,70px 45px 0 #FFFF00,75px 45px 0 #FFFF00,80px 45px 0 #FFFF00,85px 45px 0 #FFFF00,90px 45px 0 #FFFF00,95px 45px 0 #FFFF00,100px 45px 0 #FFFF00,105px 45px 0 #FFFF00,110px 45px 0 #FFFF00,115px 45px 0 #FFFF00,120px 45px 0 #FFFF00,125px 45px 0 #FFFF00,130px 45px 0 #FFFF00,135px 45px 0 #FFFF00,140px 45px 0 #FFFF00,145px 45px 0 #FFFF00,150px 45px 0 #FFFF00,155px 45px 0 #FFFF00,160px 45px 0 #FFFF00,165px 45px 0 #FFFF00,170px 45px 0 #FFFF00,175px 45px 0 #FFFF00,180px 45px 0 #FFFF00,185px 45px 0 #FFFF00,190px 45px 0 #FFFF00,195px 45px 0 #FFFF00,20px 50px 0 #000000,25px 50px 0 #FFFF00,30px 50px 0 #FFFF00,35px 50px 0 #FFFF00,40px 50px 0 #FFFF00,45px 50px 0 #FFFF00,50px 50px 0 #FFFF00,55px 50px 0 #FFFF00,60px 50px 0 #FFFF00,65px 50px 0 #000000,70px 50px 0 #FFFF00,75px 50px 0 #FFFF00,80px 50px 0 #FFFF00,85px 50px 0 #FFFF00,90px 50px 0 #FFFF00,95px 50px 0 #FFFF00,100px 50px 0 #FFFF00,105px 50px 0 #FFFF00,110px 50px 0 #FFFF00,115px 50px 0 #FFFF00,120px 50px 0 #FFFF00,125px 50px 0 #FFFF00,130px 50px 0 #FFFF00,135px 50px 0 #FFFF00,140px 50px 0 #FFFF00,145px 50px 0 #FFFF00,150px 50px 0 #FFFF00,155px 50px 0 #FFFF00,160px 50px 0 #FFFF00,165px 50px 0 #FFFF00,170px 50px 0 #FFFF00,175px 50px 0 #FFFF00,180px 50px 0 #FFFF00,185px 50px 0 #FFFF00,190px 50px 0 #FFFF00,15px 55px 0 #000000,20px 55px 0 #FFFF00,25px 55px 0 #FFFF00,30px 55px 0 #FFFF00,35px 55px 0 #FFFF00,40px 55px 0 #FFFF00,45px 55px 0 #FFFF00,50px 55px 0 #FFFF00,55px 55px 0 #FFFF00,60px 55px 0 #FFFF00,65px 55px 0 #FFFF00,70px 55px 0 #000000,75px 55px 0 #FFFF00,80px 55px 0 #FFFF00,85px 55px 0 #FFFF00,90px 55px 0 #FFFF00,95px 55px 0 #FFFF00,100px 55px 0 #FFFF00,105px 55px 0 #FFFF00,110px 55px 0 #FFFF00,115px 55px 0 #FFFF00,120px 55px 0 #FFFF00,125px 55px 0 #FFFF00,130px 55px 0 #FFFF00,135px 55px 0 #FFFF00,140px 55px 0 #FFFF00,145px 55px 0 #FFFF00,150px 55px 0 #FFFF00,155px 55px 0 #FFFF00,160px 55px 0 #FFFF00,165px 55px 0 #FFFF00,170px 55px 0 #FFFF00,175px 55px 0 #FFFF00,180px 55px 0 #FFFF00,185px 55px 0 #FFFF00,15px 60px 0 #000000,20px 60px 0 #FFFF00,25px 60px 0 #FFFF00,30px 60px 0 #FFFF00,35px 60px 0 #FFFF00,40px 60px 0 #FFFF00,45px 60px 0 #FFFF00,50px 60px 0 #FFFF00,55px 60px 0 #FFFF00,60px 60px 0 #FFFF00,65px 60px 0 #FFFF00,70px 60px 0 #000000,10px 65px 0 #000000,15px 65px 0 #FFFF00,20px 65px 0 #FFFF00,25px 65px 0 #FFFF00,30px 65px 0 #FFFF00,35px 65px 0 #FFFF00,40px 65px 0 #000000,45px 65px 0 #000000,50px 65px 0 #FFFF00,55px 65px 0 #FFFF00,60px 65px 0 #FFFF00,65px 65px 0 #FFFF00,70px 65px 0 #FFFF00,75px 65px 0 #000000,10px 70px 0 #000000,15px 70px 0 #FFFF00,20px 70px 0 #FFFF00,25px 70px 0 #FFFF00,30px 70px 0 #000000,35px 70px 0 #000000,50px 70px 0 #000000,55px 70px 0 #000000,60px 70px 0 #FFFF00,65px 70px 0 #FFFF00,70px 70px 0 #FFFF00,75px 70px 0 #000000,5px 75px 0 #000000,10px 75px 0 #FFFF00,15px 75px 0 #FFFF00,20px 75px 0 #000000,25px 75px 0 #000000,60px 75px 0 #000000,65px 75px 0 #000000,70px 75px 0 #FFFF00,75px 75px 0 #FFFF00,80px 75px 0 #000000,5px 80px 0 #000000,10px 80px 0 #000000,15px 80px 0 #000000,70px 80px 0 #000000,75px 80px 0 #000000,80px 80px 0 #000000';

