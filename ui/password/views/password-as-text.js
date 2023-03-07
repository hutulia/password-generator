import {Component} from "../../../src/ui-framework/component.js";
import{Password} from "../password.js";
import {PasswordEvents} from "../../../src/password-generator-app/password-events.js";

export class PasswordAsText extends Component{
    /**
     * @param {Password} password
     */
    password = null;

    /**
     * @param {Element} element
     * @param {Password} password
     */
    constructor(element, password) {
        super(element);
        this.password = password;
        this.password.getElement().addEventListener(PasswordEvents.UPDATED,()=>this.setPassword(this.password.getPassword()));
    }

    /**
     * @param {string} password
     */
    setPassword(password){
        this.element.innerHTML = password;
    }
}
