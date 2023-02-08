import {PasswordBuilder} from "../../password-builder.js";
import {PasswordAsText} from "./password-as-text.js";

export class CopyButton{
    /**
     *
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
     *
     * @type {PasswordAsText}
     */
    passwordAsText = null;

    constructor(button, passwordAsText) {
        this.button = button;
        this.passwordAsText = passwordAsText;
        this.button.innerHTML = this.toCopySymbol;
        this.button.addEventListener('click',()=>{this.copy()});
    }

    copy(){
        let input = document.createElement('input');
        //document.body.appendChild(input);
        input.value = this.passwordAsText.getPasswordText();
        input.select();
        input.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(input.value);

        input.remove();

        this.button.innerHTML = this.copiedSymbol;
        setTimeout(()=>{this.button.innerHTML = this.toCopySymbol},500);
    }
}
