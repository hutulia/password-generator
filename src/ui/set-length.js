export class SetLength{
    /**
     *
     * @type {Element}
     */
    element = null;

    constructor(element) {
        this.element = element;
    }

    setLength(length){
        this.element.value = length;
    }

    getElement(){
        return this.element;
    }
}
