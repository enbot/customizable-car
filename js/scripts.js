import Screen from './classes/screen.js';

const screen = new Screen();

document.querySelector("#button-speed").addEventListener("click", screen.nextSpeed, false);

document.querySelector("#button-scenery").addEventListener("click", screen.nextScenery, false);

document.querySelector("#button-background").addEventListener("click", screen.nextBackground, false);

document.querySelector("#button-carcolor").addEventListener("click", screen.nextColor, false);