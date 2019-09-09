import { islandFrame } from '../../providers/frames/_island.js';

export class Island {

    static _ref = null;

    constructor() {
        this._ref = document.querySelector(".island");
        this._ref.style["boxShadow"] = islandFrame;
    }

    hide() {
        this._ref.style["display"] = 'none';
    }

    show() {
        this._ref.style["display"] = 'block';
    }

}