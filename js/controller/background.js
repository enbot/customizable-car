import { setIsle, setForest, setIcy, setNight } from '../providers/providers.js'

export class Background {



    constructor(sun, moon, mountain, island, cloud) {
        this.background = 2
        this._sun = sun
        this._moon = moon
        this._mountain = mountain
        this._island = island
        this._cloud = cloud
    }

    next() {

        switch (this.background) {
            case 1:
                setIsle()
                this._island.show()
                this._mountain.hide()
                this._sun.hide()
                this._moon.hide()
                this._cloud.hide()
                this.background = 2
                break
            case 2:
                setIcy()
                this._mountain.icy()
                this._mountain.show()
                this._island.hide()
                this._sun.hide()
                this._moon.hide()
                this._cloud.show()
                this.background = 3
                break

            case 3:
                setForest()
                this._mountain.forest()
                this._mountain.show()
                this._island.hide()
                this._sun.show()
                this._moon.hide()
                this._cloud.show()
                this.background = 4
                break

            case 4:
                setNight()
                this._island.hide()
                this._mountain.hide()
                this._sun.hide()
                this._moon.show()
                this._cloud.show()
                this.background = 1
                break
        }
    }

}