export class Fence {

    static _ref = null;

    constructor() {
        this._ref = document.querySelector(".fence");
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
                this._ref.style["animation"] = 'moveFence .15s linear 2s infinite';
                break;
            case 'medium':
                this._ref.style["animation"] = 'moveFence .1s linear 2s infinite';
                break;
            case 'fast':
                this._ref.style["animation"] = 'moveFence .09s linear 2s infinite';
                break;
        }
    }

}