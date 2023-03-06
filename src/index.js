import {PasswordBuilderBySetsService} from "./services/password-builder-by-sets.service.js";
import {Password} from "./ui/components/password/password.js";

window.mainPassword = new Password(document.querySelector('.main-password'), new PasswordBuilderBySetsService());