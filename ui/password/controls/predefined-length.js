import {Component} from "../../../src/ui-framework/component.js";
import {Password} from "../password.js";

export class PredefinedLength extends Component{
    /**
     * @type {Password}
     */
    password = null;

    /**
     * @param {Element} element
     * @param {Password} password
     */
    constructor(element, password) {
        super(element);
        this.password = password;

        this.element.onclick = () => this.password.setLength(this.element.innerHTML);
    }
}
