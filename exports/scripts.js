class Abstract {

    style(attribute, value) {
        if (Array.isArray(this._ref)) {
            for (const ref of this._ref) {
                ref.style[attribute] = value
            }
        } else {
            this._ref.style[attribute] = value
        }
    }

    hide() {
        this.style('display', 'none')
    }

    show() {
        this.style('display', 'block')
    }
}

class Car extends Abstract {

    constructor() {
        super()._ref = document.querySelector(".car")
        this.color = 2
        this.speed = 50
        this.nextColor()
        this.nextFrame()
    }

    nextFrame(frameIndex = 1) {
        this.style('boxShadow', frameIndex === 1 ? __frames.car1 : __frames.car2)
        setTimeout(() =>
            this.nextFrame(
                frameIndex == 1 ?
                    ++frameIndex :
                    --frameIndex
            ), this.speed)
    }

    setSpeed(speed) {

        switch (speed) {
            case 'slow':
                this.style('animation', 'start 2s linear 1, speedup 10s linear 2s infinite, shake 0.5s linear infinite')
                this.speed = 150
                break

            case 'medium':
                this.style('animation', 'start 2s linear 1, speedup 5s linear 2s infinite, shake 0.1s linear infinite')
                this.speed = 70
                break

            case 'fast':
                this.style('animation', 'start 2s linear 1, speedup 5s linear 2s infinite, shake 0.05s linear infinite')
                this.speed = 30
                break
        }
    }

    nextColor() {
        switch (this.color) {
            case 1:
                document.documentElement.style.setProperty('--main-color', '#26526d')
                document.documentElement.style.setProperty('--dark-main', '#1d4055')
                document.documentElement.style.setProperty('--light-main', '#53819e')
                document.documentElement.style.setProperty('--bright-main', '#80a8c0')
                this.color = 2
                break
            case 2:
                document.documentElement.style.setProperty('--main-color', '#6F0000')
                document.documentElement.style.setProperty('--dark-main', '#560D0D')
                document.documentElement.style.setProperty('--light-main', '#940000')
                document.documentElement.style.setProperty('--bright-main', '#C30101')
                this.color = 3
                break
            case 3:
                document.documentElement.style.setProperty('--main-color', '#36421C')
                document.documentElement.style.setProperty('--dark-main', '#2a3511')
                document.documentElement.style.setProperty('--light-main', '#44581D')
                document.documentElement.style.setProperty('--bright-main', '#658226')
                this.color = 4
                break
            case 4:
                document.documentElement.style.setProperty('--main-color', '#DAB600')
                document.documentElement.style.setProperty('--dark-main', '#A98600')
                document.documentElement.style.setProperty('--light-main', '#E9D700')
                document.documentElement.style.setProperty('--bright-main', '#f4e538')
                this.color = 5
                break
            case 5:
                document.documentElement.style.setProperty('--main-color', '#004cc6')
                document.documentElement.style.setProperty('--dark-main', '#153e7f')
                document.documentElement.style.setProperty('--light-main', '#206eea')
                document.documentElement.style.setProperty('--bright-main', '#3d87ff')
                this.color = 6
                break
            case 6:
                document.documentElement.style.setProperty('--main-color', '#bf00ac')
                document.documentElement.style.setProperty('--dark-main', '#8e0080')
                document.documentElement.style.setProperty('--light-main', '#e031ce')
                document.documentElement.style.setProperty('--bright-main', '#ff6bf0')
                this.color = 7
                break
            case 7:
                document.documentElement.style.setProperty('--main-color', '#00c964')
                document.documentElement.style.setProperty('--dark-main', '#008e49')
                document.documentElement.style.setProperty('--light-main', '#00f47e')
                document.documentElement.style.setProperty('--bright-main', '#4fffa9')
                this.color = 8
                break
            case 8:
                document.documentElement.style.setProperty('--main-color', '#e08e00')
                document.documentElement.style.setProperty('--dark-main', '#965f00')
                document.documentElement.style.setProperty('--light-main', '#ffa100')
                document.documentElement.style.setProperty('--bright-main', '#ffc45e')
                this.color = 1
                break
        }
    }

}

class Cloud extends Abstract {

    constructor() {
        super()._ref = [
            document.querySelector(".cloud-1"),
            document.querySelector(".cloud-2"),
            document.querySelector(".cloud-3")
        ]
        this.style('boxShadow', __frames.cloudFrame)
    }

    setSpeed(speed) {

        switch (speed) {
            case 'slow':
                this._ref[0].style["animation"] = 'initFirstCloud 60s linear 1, moveCloud 60s linear 59s infinite'
                this._ref[1].style["animation"] = 'initSecondCloud 45s linear 1, moveCloud 50s linear 44s infinite'
                this._ref[2].style["animation"] = 'initThirdCloud 40s linear 1, moveCloud 60s linear 39s infinite'
                break

            case 'medium':
                this._ref[0].style["animation"] = 'initFirstCloud 50s linear 1, moveCloud 50s linear 49s infinite'
                this._ref[1].style["animation"] = 'initSecondCloud 35s linear 1, moveCloud 40s linear 34s infinite'
                this._ref[2].style["animation"] = 'initThirdCloud 30s linear 1, moveCloud 50s linear 29s infinite'
                break

            case 'fast':
                this._ref[0].style["animation"] = 'initFirstCloud 40s linear 1, moveCloud 40s linear 39s infinite'
                this._ref[1].style["animation"] = 'initSecondCloud 25s linear 1, moveCloud 30s linear 24s infinite'
                this._ref[2].style["animation"] = 'initThirdCloud 20s linear 1, moveCloud 40s linear 19s infinite'
                break
        }
    }

}

class Fence extends Abstract {

    constructor() {
        super()._ref = document.querySelector(".fence")
    }

    setSpeed(speed) {
        switch (speed) {
            case 'slow':
                this.style('animation', 'moveFence .15s linear 2s infinite')
                break
            case 'medium':
                this.style('animation', 'moveFence .1s linear 2s infinite')
                break
            case 'fast':
                this.style('animation', 'moveFence .09s linear 2s infinite')
                break
        }
    }
}

class Indicator extends Abstract {

    constructor() {
        super()._ref = document.querySelector('.speed')
    }

    setSpeed(speed) {
        switch (speed) {
            case 'slow':
                this.style('animation', 'moveSpeed 1s infinite')
                this.setText('0.5x')
                break
            case 'medium':
                this.style('animation', 'moveSpeed .6s infinite')
                this.setText('1x')
                break
            case 'fast':
                this.style('animation', 'moveSpeed .3s infinite')
                this.setText('2x')
                break
        }
    }

    setText(newText) {
        this._ref.textContent = newText
    }
}

class Ink extends Abstract {

    constructor() {
        super()._ref = document.querySelector(".ink")
    }

    setSpeed(speed) {
        switch (speed) {
            case 'slow':
                this.style('animation', 'move 2s linear 2s infinite')
                break
            case 'medium':
                this.style('animation', 'move 1s linear 2s infinite')
                break
            case 'fast':
                this.style('animation', 'move .5s linear 2s infinite')
                break
        }
    }
}

class Island extends Abstract {

    constructor() {
        super()._ref = document.querySelector(".island")
        this.style('boxShadow', __frames.islandFrame)
    }
}

class Moon extends Abstract {

    constructor() {
        super()._ref = document.querySelector(".moon")
        this.style('boxShadow', __frames.moonFrame)
    }
}

class Mountain extends Abstract {

    constructor() {
        super()._ref = document.querySelector(".mountain")
    }

    forest() {
        this.style('boxShadow', __frames.forestMontain)
    }

    icy() {
        this.style('boxShadow', __frames.icyMountain)
    }
}

class Sun extends Abstract {

    constructor() {
        super()._ref = document.querySelector(".sun")
        this.animate()
    }

    animate(frame = 1) {
        if (frame == 1) {
            this._ref.style["boxShadow"] = __frames.sun1
            frame++
        } else if (frame == 2) {
            this._ref.style["boxShadow"] = __frames.sun2
            frame++
        } else {
            this._ref.style["boxShadow"] = __frames.sun3
            frame = 1
        }
        setTimeout(() => this.animate(frame), 100)
    }
}

class Tree extends Abstract {

    constructor() {
        super()._ref = [
            document.querySelector(".tree-1"),
            document.querySelector(".tree-2"),
            document.querySelector(".tree-3"),
            document.querySelector(".tree-4")
        ]
    }

    setStyle(style) {
        switch (style) {
            case 'forest':
                this.style('boxShadow', __frames.forestTree)
                break
            case 'icy':
                this.style('boxShadow', __frames.snowTree)
                break
            case 'desert':
                this.style('boxShadow', __frames.desertTree)
                break
        }
    }

    setSpeed(speed) {
        switch (speed) {
            case 'slow':
                this._ref[0].style["animation"] = 'move 4s linear 3s infinite'
                this._ref[1].style["animation"] = 'move 4s linear 9s infinite'
                this._ref[2].style["animation"] = 'move 4s linear 6s infinite'
                this._ref[3].style["animation"] = 'move 4s linear 12s infinite'
                break
            case 'medium':
                this._ref[0].style["animation"] = 'move 2s linear 2.5s infinite'
                this._ref[1].style["animation"] = 'move 2s linear 3.5s infinite'
                this._ref[2].style["animation"] = 'move 2s linear 3s infinite'
                this._ref[3].style["animation"] = 'move 2s linear 4s infinite'
                break
            case 'fast':
                this._ref[0].style["animation"] = 'move 1s linear 2.5s infinite'
                this._ref[1].style["animation"] = 'move 1s linear 3.5s infinite'
                this._ref[2].style["animation"] = 'move 1s linear 3s infinite'
                this._ref[3].style["animation"] = 'move 1s linear 4s infinite'
                break
        }
    }
}

const setIsle = () => setCssProperties([
    { p: '--sea-border', v: 'solid 2px #661AFF' },
    { p: '--sky', v: 'linear-gradient(0deg, rgba(254, 107, 239, 1) 0%, rgba(254, 107, 239, 1) 11%, rgba(255, 88, 240, 1) 12%, rgba(255, 88, 240, 1) 24%, rgba(239, 66, 254, 1) 25%, rgba(239, 66, 254, 1) 36%, rgba(199, 66, 255, 1) 37%, rgba(199, 66, 255, 1) 49%, rgba(173, 50, 255, 1) 50%, rgba(173, 50, 255, 1) 61%, rgba(155, 33, 254, 1) 62%, rgba(155, 33, 254, 1) 74%, rgba(121, 33, 254, 1) 75%, rgba(121, 33, 254, 1) 86%, rgba(100, 0, 255, 1) 87%, rgba(100, 0, 255, 1) 100%)' },
    { p: '--sea', v: 'linear-gradient(180deg, rgb(120, 1, 255), rgb(0, 174, 255), rgb(12, 255, 133))' },
])

const setForest = () => setCssProperties([
    { p: '--sea-border', v: 'solid 2px #1D4F11' },
    { p: '--sky', v: 'linear-gradient(45deg, rgb(29, 72, 210),rgb(29, 72, 210),rgb(0, 174, 255))' },
    { p: '--sea', v: 'linear-gradient(180deg, rgb(29, 63, 175), rgb(11, 96, 255), rgb(12, 178, 255))' },
])

const setIcy = () => setCssProperties([
    { p: '--sea-border', v: 'solid 4px #4B4C4D' },
    { p: '--sky', v: 'linear-gradient(45deg, #8DD6DE, #C2ECE5, #8DD6DE )' },
    { p: '--sea', v: 'linear-gradient(180deg, rgb(137, 212, 255), rgb(88, 194, 255))' }
])

const setNight = () => setCssProperties([
    { p: '--sea-border', v: 'solid 2px rgb(0, 32, 83)' },
    { p: '--sky', v: 'linear-gradient(315deg, rgb(7, 7, 7),rgb(24, 24, 24), rgb(36, 36, 36) )' },
    { p: '--sea', v: 'linear-gradient(180deg, rgb(8, 27, 92), rgb(12, 60, 148), rgb(7, 81, 116))' }
])

function create() {

    let
        characters = [
            '=', ' ', 'b', 'y', ' ',
            'N', 'a', 't', 'h', 'a', 'n', ' ',
            'B', 'o', 't', 'e', 'l', 'h', 'o'
        ],
        buttons = [
            { id: 'button-scenery', text: 'Scenery' },
            { id: 'button-background', text: 'Background' },
            { id: 'button-carcolor', text: 'Car color' },
            { id: 'button-speed', text: 'Speed' }
        ],
        text = [],
        elements = [
            'speed', 'sky', 'sea', 'cloud-1', 'cloud-2', 'cloud-3',
            'mountain', 'sun', 'moon', 'island', 'fence', 'road', 'ink',
            'tree-1', 'tree-2', 'tree-3', 'tree-4', 'car'
        ],
        log = ''

    for (let i = 0; i < characters.length; i++) {
        log += (i === 0) ?
            new Array(27)
                .fill(characters[i])
                .join('') :
            characters[i]
    }

    const hud = document.getElementById('hud')

    for (let button of buttons) {
        let div = document.createElement('div');
        div.id = button.id
        div.innerHTML = button.text
        div.classList = 'button hidden'
        hud.appendChild(div)
    }

    for (let element of elements) {
        let div = document.createElement('div');
        div.classList = element
        hud.appendChild(div)
    }

    console.log(log)

}

function setCssProperties(props) {
    if (Array.isArray(props)) {
        for (let prop of props) {
            setCssProperty(prop.p, prop.v)
        }
    } else {
        setCssProperty(props.p, props.v)
    }
}

function setCssProperty(prop, value) {
    document.documentElement.style.setProperty(prop, value)
}

const setForestGround = () => setCssProperties([
    { p: '--ground-color', v: '#1D4F11' },
    { p: '--ground', v: 'linear-gradient( 45deg, #1D4F11 25%, transparent 25%, transparent 75%, #1D4F11 75%, #1D4F11 ), linear-gradient(-45deg, #1D4F11 25%, #1b4c10 25%, #1b4c10 77%, #1D4F11 77%, #1D4F11)' }
])

const setIcyGround = () => setCssProperties([
    { p: '--ground-color', v: '#fafafa' },
    { p: '--ground', v: 'linear-gradient(45deg, #fafafa 25%, transparent 25%, transparent 75%, #fafafa 75%, #fafafa), linear-gradient(-45deg, #fafafa 25%, #f2efef 25%, #f2efef 77%, #fafafa 77%, #fafafa)' }
])

const setDesertGround = () => setCssProperties([
    { p: '--ground-color', v: '#e0a03e' },
    { p: '--ground', v: 'linear-gradient(45deg, #e0a03e 25%, transparent 25%, transparent 75%, #e0a03e 75%, #e0a03e), linear-gradient(-45deg, #e0a03e 25%, #db9c3d 25%, #db9c3d 77%, #e0a03e 77%, #e0a03e)' }
])

class Background {

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

class Scenery {

    constructor(tree) {
        this.scenery = 2
        this._tree = tree
    }

    next() {
        switch (this.scenery) {
            case 1:
                setDesertGround()
                this._tree.setStyle('desert')
                this.scenery = 2
                break
            case 2:
                setIcyGround()
                this._tree.setStyle('icy')
                this.scenery = 3
                break
            case 3:
                setForestGround()
                this._tree.setStyle('forest')
                this.scenery = 1
                break
        }
    }
}

class Speed {

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

class Screen {

    constructor() {

        create()

        this.tree = new Tree()
        this.sun = new Sun()
        this.moon = new Moon()
        this.mountain = new Mountain()
        this.island = new Island()
        this.cloud = new Cloud()
        this.car = new Car()
        this.fence = new Fence()
        this.ink = new Ink()
        this.indicator = new Indicator()

        this.BACKGROUND_CONTROLLER = new Background(
            this.sun,
            this.moon,
            this.mountain,
            this.island,
            this.cloud
        )

        this.SCENERY_CONTROLLER = new Scenery(
            this.tree
        )

        this.SPEED_CONTROLLER = new Speed(
            this.fence,
            this.tree,
            this.cloud,
            this.ink,
            this.car,
            this.indicator
        )

        this.init()
    }

    init() {
        this.nextBackground()
        this.nextSpeed()
        this.nextScenery()
    }

    nextColor() {
        this.car.nextColor()
    }

    nextSpeed() {
        this.SPEED_CONTROLLER.next()
    }

    nextScenery() {
        this.SCENERY_CONTROLLER.next()
    }

    nextBackground() {
        this.BACKGROUND_CONTROLLER.next()
    }
}

const screen = new Screen()

function demo() {

    let chain = [
        ['nextBackground', 'nextBackground', 'nextScenery', 'nextColor', 'nextColor',],
        ['nextBackground', 'nextScenery', 'nextColor', 'nextColor',],
        ['nextBackground', 'nextScenery', 'nextColor', 'nextColor', 'nextColor', 'nextColor',],
    ]

    let start = 3000
    let frames = 2000
    let timer = start

    for (let commands of chain) {
        setTimeout(() => {
            for (let command of commands)
                screen[command]()
        }, timer)
        timer += frames
    }

    setTimeout(() => {

        let speed = document.querySelector("#button-speed")
        speed.classList.toggle('hidden')
        speed.addEventListener("click", () => screen.nextSpeed(), false)

        let scenery = document.querySelector("#button-scenery")
        scenery.classList.toggle('hidden')
        scenery.addEventListener("click", () => screen.nextScenery(), false)

        let background = document.querySelector("#button-background")
        background.classList.toggle('hidden')
        background.addEventListener("click", () => screen.nextBackground(), false)

        let carcolor = document.querySelector("#button-carcolor")
        carcolor.classList.toggle('hidden')
        carcolor.addEventListener("click", () => screen.nextColor(), false)

    }, start + (frames * (chain.length - 1)))

}

demo()