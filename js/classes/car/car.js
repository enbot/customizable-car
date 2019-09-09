import { car1, car2 } from '../../providers/frames.js';

export class Car {

    static _ref = null;

    color = 2;

    speed = 50;

    constructor() {

        this._ref = document.querySelector(".car");

        this.nextColor();

        this.nextFrame();

    }

    nextFrame(f = 1) {
        this._ref.style["boxShadow"] = f == 1 ? car1 : car2;
        setTimeout(() => this.nextFrame(f > 1 ? --f : ++f), this.speed);
    }

    hide() {
        this._ref.style["display"] = 'none';
    }

    show() {
        this._ref.style["display"] = 'block';
    }

    setSpeed(speed) {

        switch (speed) {
            case 'slow':
                this._ref.style["animation"] = 'start 2s linear 1, speedup 10s linear 2s infinite, shake 0.5s linear infinite';
                this.speed = 150;
                break;

            case 'medium':
                this._ref.style["animation"] = 'start 2s linear 1, speedup 5s linear 2s infinite, shake 0.1s linear infinite';
                this.speed = 70;
                break;

            case 'fast':
                this._ref.style["animation"] = 'start 2s linear 1, speedup 5s linear 2s infinite, shake 0.05s linear infinite';
                this.speed = 30;
                break;

        }
    }

    nextColor() {
        switch (this.color) {
            case 1:
                document.documentElement.style.setProperty('--main-color', '#26526d');
                document.documentElement.style.setProperty('--dark-main', '#1d4055');
                document.documentElement.style.setProperty('--light-main', '#53819e');
                document.documentElement.style.setProperty('--bright-main', '#80a8c0');
                this.color = 2;
                break;
            case 2:
                document.documentElement.style.setProperty('--main-color', '#6F0000');
                document.documentElement.style.setProperty('--dark-main', '#560D0D');
                document.documentElement.style.setProperty('--light-main', '#940000');
                document.documentElement.style.setProperty('--bright-main', '#C30101');
                this.color = 3;
                break;
            case 3:
                document.documentElement.style.setProperty('--main-color', '#36421C');
                document.documentElement.style.setProperty('--dark-main', '#2a3511');
                document.documentElement.style.setProperty('--light-main', '#44581D');
                document.documentElement.style.setProperty('--bright-main', '#658226');
                this.color = 4;
                break;
            case 4:
                document.documentElement.style.setProperty('--main-color', '#DAB600');
                document.documentElement.style.setProperty('--dark-main', '#A98600');
                document.documentElement.style.setProperty('--light-main', '#E9D700');
                document.documentElement.style.setProperty('--bright-main', '#f4e538');
                this.color = 5;
                break;
            case 5:
                document.documentElement.style.setProperty('--main-color', '#004cc6');
                document.documentElement.style.setProperty('--dark-main', '#153e7f');
                document.documentElement.style.setProperty('--light-main', '#206eea');
                document.documentElement.style.setProperty('--bright-main', '#3d87ff');
                this.color = 6;
                break;
            case 6:
                document.documentElement.style.setProperty('--main-color', '#bf00ac');
                document.documentElement.style.setProperty('--dark-main', '#8e0080');
                document.documentElement.style.setProperty('--light-main', '#e031ce');
                document.documentElement.style.setProperty('--bright-main', '#ff6bf0');
                this.color = 7;
                break;
            case 7:
                document.documentElement.style.setProperty('--main-color', '#00c964');
                document.documentElement.style.setProperty('--dark-main', '#008e49');
                document.documentElement.style.setProperty('--light-main', '#00f47e');
                document.documentElement.style.setProperty('--bright-main', '#4fffa9');
                this.color = 8;
                break;
            case 8:
                document.documentElement.style.setProperty('--main-color', '#e08e00');
                document.documentElement.style.setProperty('--dark-main', '#965f00');
                document.documentElement.style.setProperty('--light-main', '#ffa100');
                document.documentElement.style.setProperty('--bright-main', '#ffc45e');
                this.color = 1;
                break;
        }
    }

}