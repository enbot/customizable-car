import Screen from './classes/screen.js'

const screen = new Screen()

function demo() {

    let chain = [
        ['nextBackground', 'nextScenery', 'nextColor', 'nextColor',],
        ['nextBackground', 'nextBackground', 'nextScenery', 'nextColor', 'nextColor',],
        ['nextBackground', 'nextScenery', 'nextColor', 'nextColor', 'nextColor', 'nextColor',],
    ]

    let frames = 1500
    let timer = frames

    for (let commands of chain) {
        setTimeout(() => {
            for (let command of commands)
                screen[command]()
        }, timer)
        timer += frames
    }

    setTimeout(() => {

        document.querySelector("#button-speed")
            .addEventListener("click", () => screen.nextSpeed(), false)

        document.querySelector("#button-scenery")
            .addEventListener("click", () => screen.nextScenery(), false)

        document.querySelector("#button-background")
            .addEventListener("click", () => screen.nextBackground(), false)

        document.querySelector("#button-carcolor")
            .addEventListener("click", () => screen.nextColor(), false)

    }, frames * chain.length)

}

demo()