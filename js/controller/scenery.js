import { setForestGround, setIcyGround, setDesertGround } from '../providers/functions.js';

export class Scenery {

    _tree = null;

    scenery = 2;

    constructor(tree) {
        this._tree = tree;
    }

    next() {
        switch (this.scenery) {
            case 1:
                this._tree.setStyle('desert');
                setDesertGround();
                this.scenery = 2;
                break;
            case 2:
                this._tree.setStyle('icy');
                setIcyGround();
                this.scenery = 3;
                break;
            case 3:
                this._tree.setStyle('forest');
                setForestGround();
                this.scenery = 1;
                break;
        }
    }
}