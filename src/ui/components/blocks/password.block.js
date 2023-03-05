import {PasswordBuilderService} from "../../../services/password-builder.service.js";
import {PasswordAsTextView} from "../views/password-as-text.view.js";
import {RenewPasswordAction} from "../actions/renew-password.action.js";
import {CopyPasswordAction} from "../actions/copy-password.action.js";

export class PasswordBlock {
    /**
     *
     * @type {Element}
     */
    otterElement = null;

    /**
     *
     * @type {PasswordAsTextView}
     */
    passwordAsText = null;

    /**
     *
     * @type {PasswordBuilderService}
     */
    passwordBuilder = null;

    /**
     *
     * @type {CopyPasswordAction}
     */
    renewButton = null;

    constructor(otterElement, passwordBuilder) {
        this.passwordBuilder = passwordBuilder;
        this.otterElement = otterElement;
        this.passwordAsText = new PasswordAsTextView(this.otterElement.querySelector('.password-as-text'));

        this.renewButton = new RenewPasswordAction(this.otterElement.querySelector('.renew'), this.passwordBuilder, this.passwordAsText);
        this.renewButton = new CopyPasswordAction(this.otterElement.querySelector('.copy'), this.passwordAsText);
    }

    setPassword(password){
        this.passwordAsText.setPassword(password);
    }

    renew(){
        this.passwordAsText.setPassword(this.passwordBuilder.build());
    }
}
