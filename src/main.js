import {PasswordBuilderBySetsService} from "./modules/password-builder/password-builder-by-sets.service.js";
import {SymbolsSetService} from "./modules/symbols-set/symbols-set.service.js";
import {lowerLetters, numbers, specialSymbols, upperLetters} from "./modules/symbols-set/symbols-lists.js";
import {SymbolsSetRegistry} from "./modules/symbols-set/symbols-set-registry.js";
import React from 'react';
import ReactDOM from "react-dom/client";
import {App} from "./ui/App";

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

ReactDOM.createRoot(document.querySelector('#app')).render(React.createElement(App, {passwordBuilder: window.passwordBuilder}));
