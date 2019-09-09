import { sun1, sun2, sun3 } from '../../providers/frames.js';

export class Sun {

    static _ref = null;

    constructor() {
        this._ref = document.querySelector(".sun");
        this.animate();
    }

    animate(frame = 1) {

        if (frame == 1) {
            this._ref.style["boxShadow"] = sun1;
            frame++;
        } else if (frame == 2) {
            this._ref.style["boxShadow"] = sun2;
            frame++;
        } else {
            this._ref.style["boxShadow"] = sun3;
            frame = 1;
        }

        setTimeout(() => this.animate(frame), 100);
    }

    hide() {
        this._ref.style["display"] = 'none';
    }

    show() {
        this._ref.style["display"] = 'block';
    }

}