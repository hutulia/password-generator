import {PasswordGenerator} from "./password-generator.js";
import {PasswordGeneratorUi} from "./password-generator-ui.js";

window.passwordGenerator = new PasswordGenerator();
window.passwordGeneratorUi = new PasswordGeneratorUi(document.getElementById('password-generator'), window.passwordGenerator);