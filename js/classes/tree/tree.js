import { snowTree, desertTree, forestTree } from '../../providers/frames.js';

export class Tree {

    static _refs = [];

    constructor() {
        this._refs = [
            document.querySelector(".tree-1"),
            document.querySelector(".tree-2"),
            document.querySelector(".tree-3"),
            document.querySelector(".tree-4")
        ];
    }

    hide() {
        this._refs.style["display"] = 'none';
    }

    show() {
        this._refs.style["display"] = 'block';
    }

    setStyle(style) {
        switch (style) {
            case 'forest':
                for (let tree of this._refs) tree.style["boxShadow"] = forestTree;
                break;
            case 'icy':
                for (let tree of this._refs) tree.style["boxShadow"] = snowTree;
                break;
            case 'desert':
                for (let tree of this._refs) tree.style["boxShadow"] = desertTree;
                break;
        }
    }

    setSpeed(speed) {

        switch (speed) {
            case 'slow':
                this._refs[0].style["animation"] = 'move 4s linear 3s infinite';
                this._refs[1].style["animation"] = 'move 4s linear 9s infinite';
                this._refs[2].style["animation"] = 'move 4s linear 6s infinite';
                this._refs[3].style["animation"] = 'move 4s linear 12s infinite';
                break;

            case 'medium':
                this._refs[0].style["animation"] = 'move 2s linear 2.5s infinite';
                this._refs[1].style["animation"] = 'move 2s linear 3.5s infinite';
                this._refs[2].style["animation"] = 'move 2s linear 3s infinite';
                this._refs[3].style["animation"] = 'move 2s linear 4s infinite';
                break;

            case 'fast':
                this._refs[0].style["animation"] = 'move 1s linear 2.5s infinite';
                this._refs[1].style["animation"] = 'move 1s linear 3.5s infinite';
                this._refs[2].style["animation"] = 'move 1s linear 3s infinite';
                this._refs[3].style["animation"] = 'move 1s linear 4s infinite';
                break;

        }

    }

}