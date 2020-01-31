export function setCssProperties(props) {

    if (Array.isArray(props)) {

        for (let prop of props) {

            setCssProperty(prop.p, prop.v)
        }

    } else {

        setCssProperty(props.p, props.v)
    }
}

export function setCssProperty(prop, value) {

    document.documentElement.style.setProperty(prop, value)
}