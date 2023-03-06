import {PasswordGeneratorService} from "./services/password-generator.service.js";
import {PasswordGeneratorApp} from "./ui/components/password-generator-app.js";

window.passwordGenerator = new PasswordGeneratorService();
window.passwordGeneratorUi = new PasswordGeneratorApp(document.getElementById('password-generator'), window.passwordGenerator);