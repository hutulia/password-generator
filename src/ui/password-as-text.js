import {PasswordBuilder} from "../../password-builder.js";

export class PasswordAsText {
    /**
     * @type {Element}
     */
    holder = null;

    constructor(holder) {
        this.holder = holder;
    }

    setPassword(password){
        this.holder.innerHTML = password;
    }

    getPasswordText(){
        return this.holder.innerHTML;
    }
}
