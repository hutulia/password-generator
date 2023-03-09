import {PasswordBuilderBySetsService} from "./password-builder/password-builder-by-sets.service.js";
import {Password} from "../ui/password/password.js";
import {SymbolsSetService} from "./symbols-set/symbols-set.service.js";
import {lowerLetters, numbers, specialSymbols, upperLetters} from "./symbols-set/symbols-lists.js";
import {SymbolsSetRegistry} from "./symbols-set/symbols-set-registry.js";

import React from 'react';
import ReactDOM from "react-dom/client";
import {App} from "../ui/react/App";

window.symbolsSetRegistry = new SymbolsSetRegistry();
window.symbolsSetRegistry.register(
    new SymbolsSetService('lower', lowerLetters),
    new SymbolsSetService('upper', upperLetters),
    new SymbolsSetService('numbers', numbers),
    new SymbolsSetService('special', specialSymbols),
);

window.passwordBuilder = new PasswordBuilderBySetsService();
window.passwordBuilder.setLength(4);
window.passwordBuilder.useSymbolsSets(...window.symbolsSetRegistry.getAll());
window.passwordBuilder.build();

window.mainPassword = new Password(
    document.querySelector('.main-password'),
    window.passwordBuilder,
    window.symbolsSetRegistry
);

ReactDOM.createRoot(document.querySelector('#app')).render(React.createElement(App, {password: window.mainPassword}));
