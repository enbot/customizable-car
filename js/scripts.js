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

function run(command, time = 15) {
    return new Promise(
        resolve => setTimeout(resolve, time)
    ).then(() => screen[command]())
}

function demo() {

    // let chain = [
    //     [],
    //     [],
    //     [],
    // ]

    // for (let commands of chain) {

    //     for (let command of commands) {



    //     }

    // }

    // nextScenery
    // nextBackground
    // nextColor

    setTimeout(async () => {

        await run('nextBackground')
        await run('nextScenery')
        await run('nextColor')
        await run('nextColor')

        setTimeout(async () => {

            await run('nextBackground')
            await run('nextBackground')
            await run('nextScenery')
            await run('nextColor')
            await run('nextColor')

            setTimeout(async () => {

                await run('nextBackground')
                await run('nextScenery')
                await run('nextColor')
                await run('nextColor')
                await run('nextColor')
                await run('nextColor')

            }, 2000)

        }, 2000)

    }, 2000)



    // 3 car color 1bg 1

}

demo()