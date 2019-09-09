import { cloudFrame } from '../../providers/frames.js';

export class Cloud {

    static _refs = [];

    constructor() {
        this._refs = [
            document.querySelector(".cloud-1"),
            document.querySelector(".cloud-2"),
            document.querySelector(".cloud-3")
        ];

        for (let cloud of this._refs) cloud.style["boxShadow"] = cloudFrame;
    }

    hide() {
        for (let cloud of this._refs) cloud.style["display"] = 'none';
    }

    show() {
        for (let cloud of this._refs) cloud.style["display"] = 'block';
    }

    setSpeed(speed) {

        switch (speed) {
            case 'slow':
                this._refs[0].style["animation"] = 'initFirstCloud 60s linear 1, moveCloud 60s linear 59s infinite';
                this._refs[1].style["animation"] = 'initSecondCloud 45s linear 1, moveCloud 50s linear 44s infinite';
                this._refs[2].style["animation"] = 'initThirdCloud 40s linear 1, moveCloud 60s linear 39s infinite';
                break;

            case 'medium':
                this._refs[0].style["animation"] = 'initFirstCloud 50s linear 1, moveCloud 50s linear 49s infinite';
                this._refs[1].style["animation"] = 'initSecondCloud 35s linear 1, moveCloud 40s linear 34s infinite';
                this._refs[2].style["animation"] = 'initThirdCloud 30s linear 1, moveCloud 50s linear 29s infinite';
                break;

            case 'fast':
                this._refs[0].style["animation"] = 'initFirstCloud 40s linear 1, moveCloud 40s linear 39s infinite';
                this._refs[1].style["animation"] = 'initSecondCloud 25s linear 1, moveCloud 30s linear 24s infinite';
                this._refs[2].style["animation"] = 'initThirdCloud 20s linear 1, moveCloud 40s linear 19s infinite';
                break;

        }

    }

}