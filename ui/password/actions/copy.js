import {Component} from "../../../src/ui-framework/component.js";
import {Password} from "../password.js";

export class Copy extends Component{
    /**
     * @type {Password}
     */
    password = null;

    /**
     * @type {string}
     */
    toCopySymbol = '⎘';

    /**
     * @type {string}
     */
    copiedSymbol = '✅';

    /**
     * @param {Element} button
     * @param {Password} password
     */
    constructor(button, password) {
        super(button);
        this.password = password;
        this.element.innerHTML = this.toCopySymbol;
        this.element.onclick = () => this.copy();
    }

    copy() {
        this.password.copy();
        this.element.innerHTML = this.copiedSymbol;
        setTimeout(() => this.element.innerHTML = this.toCopySymbol, 500);
    }
}
