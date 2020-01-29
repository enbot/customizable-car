import Screen from './classes/screen.js'

const screen = new Screen()

document.querySelector("#button-speed")
    .addEventListener("click", () => screen.nextSpeed(), false)

document.querySelector("#button-scenery")
    .addEventListener("click", () => screen.nextScenery(), false)

document.querySelector("#button-background")
    .addEventListener("click", () => screen.nextBackground(), false)

document.querySelector("#button-carcolor")
    .addEventListener("click", () => screen.nextColor(), false)

function demo() {

    let chain = [
        ['nextBackground', 'nextScenery', 'nextColor', 'nextColor',],
        ['nextBackground', 'nextBackground', 'nextScenery', 'nextColor', 'nextColor',],
        ['nextBackground', 'nextScenery', 'nextColor', 'nextColor', 'nextColor', 'nextColor',],
    ]

    let timer = 2000

    for (let commands of chain) {
        setTimeout(() => {
            for (let command of commands)
                screen[command]()
        }, timer)
        timer += 2000
    }

}

demo()