import {PasswordBuilderBySetsService} from "./password-builder/password-builder-by-sets.service.js";
import {Password} from "../ui/password/password.js";

window.mainPassword = new Password(document.querySelector('.main-password'), new PasswordBuilderBySetsService());