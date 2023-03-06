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
    constructor(element, parentComponent = null, childrenComponents = {}) {
        this.element = element;
        this.parentComponent = parentComponent;
        this.childrenComponents = childrenComponents;
    }

    getElement(){
        return this.element;
    }
}
