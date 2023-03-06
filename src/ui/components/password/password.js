import {PasswordBuilderService} from "../../../services/password-builder.service.js";
import {PasswordAsText} from "./views/password-as-text.js";
import {Renew} from "./actions/renew.js";
import {Copy} from "./actions/copy.js";
import {Component} from "../../lib/component.js";
import {PasswordEvents} from "./constants.js";

export class Password extends Component{
    password = '';

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
    renewButton = null;

    constructor(element, passwordBuilder) {
        super(element);
        this.passwordBuilder = passwordBuilder;
        this.passwordAsText = new PasswordAsText(this.element.querySelector('.password-as-text'));

        this.renewButton = new Renew(this.element.querySelector('.renew'), this.passwordBuilder, this.passwordAsText);

        this.children.copyBtn = new Copy(this.element.querySelector('.copy'), this);
    }

    setPassword(password){
        const passwordUpdatedEvent = new CustomEvent(PasswordEvents.UPDATED,{detail:{newPassword: password}});
        this.element.dispatchEvent(passwordUpdatedEvent);
        this.passwordAsText.setPassword(password);
    }

    getPassword(){
        return this.passwordAsText.getPasswordText();
    }

    renew(){
        this.passwordAsText.setPassword(this.passwordBuilder.build());
    }
}
