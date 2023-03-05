import {PasswordAsText} from "./password-as-text.js";
import CopyTextToClipboard from "../CopyTextToClipboard.js";

export class CopyButton {
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
        CopyTextToClipboard.copy(this.passwordAsText.getPasswordText());
        this.button.innerHTML = this.copiedSymbol;
        setTimeout(() => {
            this.button.innerHTML = this.toCopySymbol
        }, 500);
    }
}
