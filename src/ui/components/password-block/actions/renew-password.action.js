import {PasswordBuilderService} from "../../../../services/password-builder.service.js";
import {PasswordAsTextView} from "../views/password-as-text.view.js";
import {Component} from "../../../lib/component.js";

export class RenewPasswordAction extends Component{
    /**
     * @type {PasswordBuilderService}
     */
    passwordBuilder = null;

    /**
     * @type {PasswordAsTextView}
     */
    passwordAsText = null;

    /**
     * @param {Element} button
     * @param {PasswordBuilderService} passwordBuilder
     * @param {PasswordAsTextView} passwordAsText
     */
    constructor(button, passwordBuilder, passwordAsText){
        super(button);
        this.passwordBuilder = passwordBuilder;
        this.passwordAsText = passwordAsText;
        this.element.onclick = () => this.passwordAsText.setPassword(this.passwordBuilder.build());
    }
}
