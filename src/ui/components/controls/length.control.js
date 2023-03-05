import {PasswordGeneratorAppBlock} from "../blocks/password-generator-app.block.js";

export class LengthControl {
    /**
     * @type {Element}
     */
    element = null;


    /**
     * @type {PasswordGeneratorAppBlock}
     */
    passwordGeneratorUi = null;

    /**
     * @param {Element} element
     * @param {PasswordGeneratorAppBlock} passwordGeneratorUi
     */
    constructor(element, passwordGeneratorUi) {
        this.element = element;
        this.passwordGeneratorUi = passwordGeneratorUi;
        this.setLength(this.passwordGeneratorUi.passwordGenerator.defaultLength);
        this.element.addEventListener('change',()=>{
            this.passwordGeneratorUi.passwordGenerator.passwordBuilder.setLength(this.element.value);
            this.passwordGeneratorUi.passwordGenerator.mainPassword.setPassword(this.passwordGeneratorUi.passwordGenerator.passwordBuilder.build());
        });
    }

    setLength(length){
        this.element.value = length;
    }

    getElement(){
        return this.element;
    }
}
