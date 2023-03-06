import {PasswordBuilderService} from "../../../services/password-builder.service.js";
import {PasswordAsText} from "./views/password-as-text.js";
import {Renew} from "./actions/renew.js";
import {Copy} from "./actions/copy.js";
import {Component} from "../../lib/component.js";
import {PasswordEvents} from "./constants.js";
import CopyTextToClipboardService from "../../../services/copy-text-to-clipboard.service.js";
import {CustomLength} from "./controls/custom-length.js";

export class Password extends Component{
    password = '';

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

    setLength(length){
        this.passwordBuilder.setLength(length);
        this.renew();
    }
}
