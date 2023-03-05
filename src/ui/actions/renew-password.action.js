import {PasswordBuilderService} from "../../services/password-builder.service.js";
import {PasswordAsText} from "../views/password-as-text.js";

export class RenewPasswordAction {
    /**
     * @type {Element}
     */
    button = null;

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
    constructor(button, passwordBuilder, passwordAsText) {
        this.button = button;
        this.passwordBuilder = passwordBuilder;
        this.passwordAsText = passwordAsText;
        this.button.onclick = () => this.passwordAsText.setPassword(this.passwordBuilder.build());
    }
}
