import Screen from './classes/screen.js'

const screen = new Screen()

function demo() {

    let chain = [
        ['nextBackground', 'nextScenery', 'nextColor', 'nextColor',],
        ['nextBackground', 'nextBackground', 'nextScenery', 'nextColor', 'nextColor',],
        ['nextBackground', 'nextScenery', 'nextColor', 'nextColor', 'nextColor', 'nextColor',],
    ]

    let start = 3000
    let frames = 2000
    let timer = frames

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

    }, frames * chain.length)

}

demo()