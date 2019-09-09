import { moonFrame } from '../../providers/frames.js';

export class Moon {

    static _ref = null;

    constructor() {
        this._ref = document.querySelector(".moon");
        this._ref.style["boxShadow"] = moonFrame;
    }

    hide() {
        this._ref.style["display"] = 'none';
    }

    show() {
        this._ref.style["display"] = 'block';
    }

}