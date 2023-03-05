import {PasswordGenerator} from "./password-generator.js";
import {SetLength} from "./ui/set-length.js";

export class PasswordGeneratorUi {
    /**
     * @type {Element}
     */
    rootElement = null;

    /**
     * @type {PasswordGenerator}
     */
    passwordGenerator = null;

    controls = {
        length: null,
    };

    defaultLength = 8;
    /**
     * @param {Element} rootElement
     * @param {PasswordGenerator} passwordGenerator
     */
    constructor(rootElement, passwordGenerator) {
        this.rootElement = rootElement;
        this.passwordGenerator = passwordGenerator;
        this.defaultLength = this.passwordGenerator.defaultLength;
        this.controls.length = new SetLength(document.querySelector('.set-length'));
        this.controls.length.setLength(this.defaultLength);

        this.controls.length.getElement().addEventListener('change',()=>{
            this.passwordGenerator.passwordBuilder.setLength(this.controls.length.getElement().value);
            this.passwordGenerator.mainPassword.setPassword(this.passwordGenerator.passwordBuilder.build());
        });

        document.querySelectorAll('.predefined-length').forEach((element) => {
            element.addEventListener('click',() => {
                const value = element.innerHTML;
                this.passwordGenerator.passwordBuilder.setLength(value);
                this.controls.length.setLength(value);
                this.passwordGenerator.mainPassword.renew();
            });
        });
    }
}
