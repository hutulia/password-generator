import {PasswordBuilderService} from "../../../services/password-builder.service.js";
import {PasswordAsTextView} from "../views/password-as-text.view.js";

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
     * @type {PasswordAsTextView}
     */
    passwordAsText = null;

    /**
     * @param {Element} button
     * @param {PasswordBuilderService} passwordBuilder
     * @param {PasswordAsTextView} passwordAsText
     */
    constructor(button, passwordBuilder, passwordAsText) {
        this.button = button;
        this.passwordBuilder = passwordBuilder;
        this.passwordAsText = passwordAsText;
        this.button.onclick = () => this.passwordAsText.setPassword(this.passwordBuilder.build());
    }
}
