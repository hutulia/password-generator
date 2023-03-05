import {PasswordGenerator} from "./password-generator.js";
import {LengthControl} from "./ui/password/controls/length.control.js";
import {PredefinedLengthControl} from "./ui/password/controls/predefined-length.control.js";

export class PasswordGeneratorUi {
    /**
     * @type {Element}
     */
    root = null;

    /**
     * @type {PasswordGenerator}
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
     * @param {PasswordGenerator} passwordGenerator
     */
    constructor(rootElement, passwordGenerator) {
        this.root = rootElement;
        this.passwordGenerator = passwordGenerator;
        this.controls.length = new LengthControl(this.root.querySelector('.set-length'), this);
        this.controls.predefinedLength4 = new PredefinedLengthControl(this.root.querySelector('.pl4'), this);
        this.controls.predefinedLength8 = new PredefinedLengthControl(this.root.querySelector('.pl8'), this);
        this.controls.predefinedLength12 = new PredefinedLengthControl(this.root.querySelector('.pl12'), this);
        this.controls.predefinedLength16 = new PredefinedLengthControl(this.root.querySelector('.pl16'), this);
        this.controls.predefinedLength24 = new PredefinedLengthControl(this.root.querySelector('.pl24'), this);
        this.controls.predefinedLength32 = new PredefinedLengthControl(this.root.querySelector('.pl32'), this);
    }
}
