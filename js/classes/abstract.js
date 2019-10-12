export class Abstract {

    style = (attribute, value) => {

        if (Array.isArray(this._ref)) {

            for (const ref of this._ref) {

                ref.style[attribute] = value

            }

        } else {

            this._ref.style[attribute] = value

        }
    }

    hide = () => this.style('display', 'none')

    show = () => this.style('display', 'block')

} 