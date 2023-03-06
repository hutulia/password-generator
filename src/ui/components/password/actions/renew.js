import {PasswordBuilderService} from "../../../../services/password-builder.service.js";
import {PasswordAsText} from "../views/password-as-text.js";
import {Component} from "../../../lib/component.js";

export class Renew extends Component{
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
     * @param {PasswordBuilderService} passwordBuilder
     * @param {PasswordAsText} passwordAsText
     */
    constructor(button, passwordBuilder, passwordAsText){
        super(button);
        this.passwordBuilder = passwordBuilder;
        this.passwordAsText = passwordAsText;
        this.element.onclick = () => this.passwordAsText.setPassword(this.passwordBuilder.build());
    }
}
