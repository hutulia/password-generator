import {PasswordGeneratorService} from "./services/password-generator.service.js";
import {PasswordGeneratorAppComponent} from "./ui/components/password-generator-app.component.js";

window.passwordGenerator = new PasswordGeneratorService();
window.passwordGeneratorUi = new PasswordGeneratorAppComponent(document.getElementById('password-generator'), window.passwordGenerator);