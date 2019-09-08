import { forestMontain, icyMountain } from '../../frames/frames.js';

export class Mountain {

    static _ref = null;

    constructor() {
        this._ref = document.querySelector(".mountain");
    }

    forest() {
        this._ref.style["boxShadow"] = forestMontain;
    }

    icy() {
        this._ref.style["boxShadow"] = icyMountain;
    }

    hide() {
        this._ref.style["display"] = 'none';
    }

    show() {
        this._ref.style["display"] = 'block';
    }

}