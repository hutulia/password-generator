import {PasswordAsText} from "../views/password-as-text.js";
import CopyTextToClipboardService from "../../../../services/copy-text-to-clipboard.service.js";
import {Password} from "../password.js";

import {Component} from "../../../lib/component.js";

export class Copy extends Component{
    /**
     * @type {Password}
     */
    password = null;

    /**
     * @type {string}
     */
    toCopySymbol = '⎘';

    /**
     * @type {string}
     */
    copiedSymbol = '✅';

    /**
     * @param {Element} button
     * @param {Password} password
     */
    constructor(button, password) {
        super(button);
        this.password = password;
        this.element.innerHTML = this.toCopySymbol;
        this.element.onclick = () => this.copy();
    }

    copy() {
        CopyTextToClipboardService.copy(this.password.getPassword());
        this.element.innerHTML = this.copiedSymbol;
        setTimeout(() => {
            this.element.innerHTML = this.toCopySymbol
        }, 500);
    }
}
