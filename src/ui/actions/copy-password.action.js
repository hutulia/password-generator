import {PasswordAsText} from "../views/password-as-text.js";
import CopyTextToClipboardService from "../../services/copy-text-to-clipboard.service.js";

export class CopyPasswordAction {
    /**
     * @type {Element}
     */
    button = null;

    /**
     * @type {string}
     */
    toCopySymbol = '⎘';

    /**
     * @type {string}
     */
    copiedSymbol = '✅';

    /**
     * @type {PasswordAsText}
     */
    passwordAsText = null;

    /**
     * @param {Element} button
     * @param {PasswordAsText} passwordAsText
     */
    constructor(button, passwordAsText) {
        this.button = button;
        this.passwordAsText = passwordAsText;
        this.button.innerHTML = this.toCopySymbol;
        this.button.onclick = () => this.copy();
    }

    copy() {
        CopyTextToClipboardService.copy(this.passwordAsText.getPasswordText());
        this.button.innerHTML = this.copiedSymbol;
        setTimeout(() => {
            this.button.innerHTML = this.toCopySymbol
        }, 500);
    }
}
