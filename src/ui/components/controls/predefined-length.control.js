export class PredefinedLengthControl {
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

        this.element.onclick = () => {
            const value = this.element.innerHTML;
            this.passwordGeneratorUi.passwordGenerator.passwordBuilder.setLength(value);
            this.passwordGeneratorUi.controls.length.setLength(value);
            this.passwordGeneratorUi.passwordGenerator.mainPassword.renew();
        };
    }
}
