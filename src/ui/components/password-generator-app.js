import {PasswordGeneratorService} from "../../services/password-generator.service.js";

export class PasswordGeneratorApp {
    /**
     * @type {Element}
     */
    root = null;

    /**
     * @type {PasswordGeneratorService}
     */
    passwordGenerator = null;

    /**
     * @param {Element} rootElement
     * @param {PasswordGeneratorService} passwordGenerator
     */
    constructor(rootElement, passwordGenerator) {
        this.root = rootElement;
        this.passwordGenerator = passwordGenerator;
    }
}
