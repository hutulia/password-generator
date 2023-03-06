export class Component {
    /**
     * @type {Element}
     */
    element = null;

    /**
     * @type {Component}
     */
    parent = null;

    /**
     * @type {[...Component]}
     */
    children = {};

    /**
     * @param {Element} element
     */
    constructor(element, parent = null, children = {}) {
        this.element = element;
        this.parent = parent;
        this.children = children;
    }

    getElement(){
        return this.element;
    }
}
