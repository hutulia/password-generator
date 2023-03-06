import {Password} from "../ui/components/password/password.js";
import {PasswordBuilderBySetsService} from "./password-builder-by-sets.service.js";

export class PasswordGeneratorService {
    /**
     * @type {PasswordBuilderBySetsService}
     */
    passwordBuilder = null;

    /**
     * @type {Password}
     */
    mainPassword = null;

    defaultLength = 5;

    constructor() {
        this.passwordBuilder = new PasswordBuilderBySetsService();
        this.passwordBuilder.setLength(this.defaultLength);
        this.mainPassword = new Password(document.querySelector('.main-password'),this.passwordBuilder, this);
    }
}
