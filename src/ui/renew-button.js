import {PasswordBuilder} from "../password-builder.js";
import {PasswordAsText} from "./password-as-text.js";

export class RenewButton {
    /**
     * @type {Element}
     */
    button = null;

    /**
     * @type {PasswordBuilder}
     */
    passwordBuilder = null;

    /**
     * @type {PasswordAsText}
     */
    passwordAsText = null;

    /**
     * @param {Element} button
     * @param {PasswordBuilder} passwordBuilder
     * @param {PasswordAsText} passwordAsText
     */
    constructor(button, passwordBuilder, passwordAsText) {
        this.button = button;
        this.passwordBuilder = passwordBuilder;
        this.passwordAsText = passwordAsText;
        this.button.onclick = () => this.passwordAsText.setPassword(this.passwordBuilder.build());
    }
}
