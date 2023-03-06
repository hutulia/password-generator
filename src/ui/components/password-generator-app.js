import {PasswordGeneratorService} from "../../services/password-generator.service.js";
import {CustomLength} from "./password/controls/custom-length.js";
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
        length: null,
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
        this.controls.length = new CustomLength(this.root.querySelector('.set-length'), this);
        this.controls.predefinedLength4 = new PredefinedLength(this.root.querySelector('.pl4'), this);
        this.controls.predefinedLength8 = new PredefinedLength(this.root.querySelector('.pl8'), this);
        this.controls.predefinedLength12 = new PredefinedLength(this.root.querySelector('.pl12'), this);
        this.controls.predefinedLength16 = new PredefinedLength(this.root.querySelector('.pl16'), this);
        this.controls.predefinedLength24 = new PredefinedLength(this.root.querySelector('.pl24'), this);
        this.controls.predefinedLength32 = new PredefinedLength(this.root.querySelector('.pl32'), this);
    }
}
