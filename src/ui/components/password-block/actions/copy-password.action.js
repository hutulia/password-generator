import {PasswordAsTextView} from "../views/password-as-text.view.js";
import CopyTextToClipboardService from "../../../../services/copy-text-to-clipboard.service.js";
import {Component} from "../../../lib/component.js";

export class CopyPasswordAction extends Component{
    /**
     * @type {string}
     */
    toCopySymbol = '⎘';

    /**
     * @type {string}
     */
    copiedSymbol = '✅';

    /**
     * @type {PasswordAsTextView}
     */
    passwordAsText = null;

    /**
     * @param {Element} button
     * @param {PasswordAsTextView} passwordAsText
     */
    constructor(button, passwordAsText) {
        super(button);
        this.passwordAsText = passwordAsText;
        this.element.innerHTML = this.toCopySymbol;
        this.element.onclick = () => this.copy();
    }

    copy() {
        CopyTextToClipboardService.copy(this.passwordAsText.getPasswordText());
        this.element.innerHTML = this.copiedSymbol;
        setTimeout(() => {
            this.element.innerHTML = this.toCopySymbol
        }, 500);
    }
}
