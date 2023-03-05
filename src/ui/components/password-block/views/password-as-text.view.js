import {Component} from "../../../lib/component.js";

export class PasswordAsTextView extends Component{
    /**
     * @param {Element} element
     */
    constructor(element) {
        super(element);
    }

    /**
     * @param {string} password
     */
    setPassword(password){
        this.element.innerHTML = password;
    }

    getPasswordText(){
        return this.element.innerHTML;
    }
}
