import {PasswordGeneratorService} from "./services/password-generator.service.js";
import {PasswordGeneratorAppBlock} from "./ui/components/blocks/password-generator-app.block.js";

window.passwordGenerator = new PasswordGeneratorService();
window.passwordGeneratorUi = new PasswordGeneratorAppBlock(document.getElementById('password-generator'), window.passwordGenerator);