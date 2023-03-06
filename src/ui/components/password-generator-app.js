import {PasswordGeneratorService} from "../../services/password-generator.service.js";
import {PredefinedLength} from "./password/controls/predefined-length.js";

export class PasswordGeneratorApp {
    /**
     * @type {Element}
     */
    root = null;

    /**
     * @type {PasswordGeneratorService}
     */
    passwordGenerator = null;

    controls = {
        predefinedLength4: null,
        predefinedLength8: null,
        predefinedLength12: null,
        predefinedLength16: null,
        predefinedLength24: null,
        predefinedLength32: null,
    };

    /**
     * @param {Element} rootElement
     * @param {PasswordGeneratorService} passwordGenerator
     */
    constructor(rootElement, passwordGenerator) {
        this.root = rootElement;
        this.passwordGenerator = passwordGenerator;
        this.controls.predefinedLength4 = new PredefinedLength(this.root.querySelector('.pl4'), this.passwordGenerator.mainPassword);
        this.controls.predefinedLength8 = new PredefinedLength(this.root.querySelector('.pl8'), this.passwordGenerator.mainPassword);
        this.controls.predefinedLength12 = new PredefinedLength(this.root.querySelector('.pl12'), this.passwordGenerator.mainPassword);
        this.controls.predefinedLength16 = new PredefinedLength(this.root.querySelector('.pl16'), this.passwordGenerator.mainPassword);
        this.controls.predefinedLength24 = new PredefinedLength(this.root.querySelector('.pl24'), this.passwordGenerator.mainPassword);
        this.controls.predefinedLength32 = new PredefinedLength(this.root.querySelector('.pl32'), this.passwordGenerator.mainPassword);
    }
}
