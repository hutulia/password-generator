import {PasswordBuilder} from "./password-builder.js";
import {Password} from "./ui/password.js";
import {SetLength} from "./ui/set-length.js";

export class PasswordGeneratorApp {
    /**
     *
     * @type {PasswordBuilder}
     */
    passwordBuilder = null;
    /**
     *
     * @type {Password}
     */
    mainPassword = null;

    /**
     *
     * @type {SetLength}
     */
    setLength = null;

    defaultLength = 4;

    constructor() {
        this.passwordBuilder = new PasswordBuilder();
        this.setLength = new SetLength(document.querySelector('.set-length'))
        this.mainPassword = new Password(document.querySelector('.main-password'),this.passwordBuilder);

        this.passwordBuilder.setLength(this.defaultLength);
        this.setLength.setLength(this.defaultLength);

        this.mainPassword.setPassword(this.passwordBuilder.build());

        this.setLength.getElement().addEventListener('change',()=>{
            console.log('length changed');
            this.passwordBuilder.setLength(this.setLength.getElement().value);
            this.mainPassword.setPassword(this.passwordBuilder.build());
        });

        document.querySelectorAll('.predefined-length').forEach((element) => {
            element.addEventListener('click',() => {
                const value = element.innerHTML;
                this.passwordBuilder.setLength(value);
                this.setLength.setLength(value);
                this.mainPassword.renew();
            });
        });
    }
}
