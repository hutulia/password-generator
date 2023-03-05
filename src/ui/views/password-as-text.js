export class PasswordAsText {
    /**
     * @type {Element}
     */
    holder = null;

    /**
     * @param {Element} holder
     */
    constructor(holder) {
        this.holder = holder;
    }

    /**
     * @param {string} password
     */
    setPassword(password){
        this.holder.innerHTML = password;
    }

    getPasswordText(){
        return this.holder.innerHTML;
    }
}
