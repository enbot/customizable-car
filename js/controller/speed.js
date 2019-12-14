export class Speed {

    constructor(fence, tree, cloud, ink, car, indicator) {
        this.speed = 2
        this._fence = fence
        this._tree = tree
        this._cloud = cloud
        this._ink = ink
        this._car = car
        this._indicator = indicator
    }

    next() {

        switch (this.speed) {
            case 1:
                this._fence.setSpeed('slow')
                this._tree.setSpeed('slow')
                this._cloud.setSpeed('slow')
                this._ink.setSpeed('slow')
                this._car.setSpeed("slow")
                this._indicator.setSpeed('slow')
                this.speed = 2
                break

            case 2:
                this._fence.setSpeed('medium')
                this._tree.setSpeed('medium')
                this._cloud.setSpeed('medium')
                this._ink.setSpeed('medium')
                this._car.setSpeed('medium')
                this._indicator.setSpeed('medium')
                this.speed = 3
                break

            case 3:
                this._fence.setSpeed('fast')
                this._tree.setSpeed('fast')
                this._cloud.setSpeed('fast')
                this._ink.setSpeed('fast')
                this._car.setSpeed('fast')
                this._indicator.setSpeed('fast')
                this.speed = 1
                break
        }
    }
}