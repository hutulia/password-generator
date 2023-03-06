import {PasswordBuilderService} from "../../../services/password-builder.service.js";
import {PasswordAsText} from "./views/password-as-text.js";
import {Renew} from "./actions/renew.js";
import {Copy} from "./actions/copy.js";
import {Component} from "../../lib/component.js";
import {PasswordEvents} from "./constants.js";
import CopyTextToClipboardService from "../../../services/copy-text-to-clipboard.service.js";
import {CustomLength} from "./controls/custom-length.js";
import {PredefinedLength} from "./controls/predefined-length.js";

export class Password extends Component{
    password = '';

    length = 8;

    customLength = null;

    /**
     * @type {PasswordAsText}
     */
    passwordAsText = null;

    /**
     * @type {PasswordBuilderService}
     */
    passwordBuilder = null;

    /**
     * @type {Copy}
     */
    copyButton = null;

    /**
     * @type {Renew}
     */
    renewButton = null;

    constructor(element, passwordBuilder) {
        super(element);
        this.passwordBuilder = passwordBuilder;
        this.passwordAsText = new PasswordAsText(this.element.querySelector('.password-as-text'),this);
        this.copyButton = new Copy(this.element.querySelector('.copy'), this);
        this.renewButton = new Renew(this.element.querySelector('.renew'), this);
        this.customLength = new CustomLength(this.element.querySelector('.custom-length'), this);
        
        this.predefinedLength4 = new PredefinedLength(this.element.querySelector('.pl4'), this);
        this.predefinedLength8 = new PredefinedLength(this.element.querySelector('.pl8'), this);
        this.predefinedLength12 = new PredefinedLength(this.element.querySelector('.pl12'), this);
        this.predefinedLength16 = new PredefinedLength(this.element.querySelector('.pl16'), this);
        this.predefinedLength24 = new PredefinedLength(this.element.querySelector('.pl24'), this);
        this.predefinedLength32 = new PredefinedLength(this.element.querySelector('.pl32'), this);

        this.setLength(this.length);
        this.renew();
    }

    setPassword(password){
        this.password = password;
        this.element.dispatchEvent(new CustomEvent(PasswordEvents.UPDATED));
    }

    getPassword(){
        return this.password;
    }

    renew(){
        this.setPassword(this.passwordBuilder.build());
    }

    copy(){
        CopyTextToClipboardService.copy(this.getPassword());
        this.element.dispatchEvent(new CustomEvent(PasswordEvents.COPIED));
    }

    getLength(){
        return this.length;
    }

    setLength(length){
        this.length = length;
        this.passwordBuilder.setLength(this.length);
        this.renew();
    }
}
