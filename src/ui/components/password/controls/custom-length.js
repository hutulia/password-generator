import {Component} from "../../../lib/component.js";
import {Password} from "../password.js";
import {PasswordEvents} from "../constants.js";

export class CustomLength extends Component{
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
        this.element.addEventListener('change',()=>{this.password.setLength(this.element.value)});
        this.password.getElement().addEventListener(PasswordEvents.UPDATED,()=>{this.element.value = this.password.getLength()});
    }
}
