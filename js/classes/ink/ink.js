export class Ink {

    static _ref = [];

    constructor() {
        this._ref = document.querySelector(".ink");
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
                this._ref.style["animation"] = 'move 2s linear 2s infinite';
                break;
            case 'medium':
                this._ref.style["animation"] = 'move 1s linear 2s infinite';
                break;
            case 'fast':
                this._ref.style["animation"] = 'move .5s linear 2s infinite';
                break;
        }
    }

}