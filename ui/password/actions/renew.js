import {Component} from "../../../src/ui-framework/component.js";
import {Password} from "../password.js";

export class Renew extends Component{
    /**
     * @type {Password}
     */
    password = null;

    /**
     * @type {PasswordBuilderService}
     */
    passwordBuilder = null;

    /**
     * @type {PasswordAsText}
     */
    passwordAsText = null;

    /**
     * @param {Element} button
     * @param {Password} password
     */
    constructor(button, password) {
        super(button);
        this.password = password;
        this.element.onclick = () => this.password.renew();
    }
}
