export class Indicator {

    static _ref = null;

    constructor() {
        this._ref = document.querySelector(".speed");
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
                this._ref.style["animation"] = 'moveSpeed 1s infinite';
                this._ref.textContent = '0.5x';
                break;
            case 'medium':
                this._ref.style["animation"] = 'moveSpeed .6s infinite';
                this._ref.textContent = '1x';
                break;
            case 'fast':
                this._ref.style["animation"] = 'moveSpeed .3s infinite';
                this._ref.textContent = '2x';
                break;
        }
    }

}