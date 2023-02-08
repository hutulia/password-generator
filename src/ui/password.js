import {PasswordBuilder} from "../../password-builder.js";
import {PasswordAsText} from "./password-as-text.js";
import {RenewButton} from "./renew-button.js";
import {CopyButton} from "./copy-button.js";

export class Password{
    /**
     *
     * @type {Element}
     */
    otterElement = null;

    /**
     *
     * @type {PasswordAsText}
     */
    passwordAsText = null;

    /**
     *
     * @type {PasswordBuilder}
     */
    passwordBuilder = null;

    /**
     *
     * @type {CopyButton}
     */
    renewButton = null;

    constructor(otterElement, passwordBuilder) {
        this.passwordBuilder = passwordBuilder;
        this.otterElement = otterElement;
        this.passwordAsText = new PasswordAsText(this.otterElement.querySelector('.password-as-text'));

        this.renewButton = new RenewButton(this.otterElement.querySelector('.renew'), this.passwordBuilder, this.passwordAsText);
        this.renewButton = new CopyButton(this.otterElement.querySelector('.copy'), this.passwordAsText);
    }

    setPassword(password){
        this.passwordAsText.setPassword(password);
    }

    renew(){
        this.passwordAsText.setPassword(this.passwordBuilder.build());
    }
}
