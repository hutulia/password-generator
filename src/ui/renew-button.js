import {PasswordBuilder} from "../../password-builder.js";
import {PasswordAsText} from "./password-as-text.js";

export class RenewButton{
    /**
     *
     * @type {Element}
     */
    button = null;

    /**
     *
     * @type {PasswordBuilder}
     */
    passwordBuilder = null;

    /**
     *
     * @type {PasswordAsText}
     */
    passwordAsText = null;

    constructor(button, passwordBuilder, passwordAsText) {
        this.button = button;
        this.passwordBuilder = passwordBuilder;
        this.passwordAsText = passwordAsText;

        this.button.addEventListener('click',()=>{this.passwordAsText.setPassword(this.passwordBuilder.build())});
    }
}
