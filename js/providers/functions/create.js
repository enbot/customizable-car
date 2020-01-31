export function create() {

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
        div.classList = 'button'
        hud.appendChild(div)
    }

    for (let element of elements) {
        let div = document.createElement('div');
        div.classList = element
        hud.appendChild(div)
    }

    console.log(log)

}