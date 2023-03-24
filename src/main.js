import React from 'react';
import ReactDOM from "react-dom/client";
import {App} from "./App";
import {lowerLetters, numbers, specialSymbols, upperLetters} from "../modules/symbols-set/symbols-lists.js";
import {SymbolsSetService} from "../modules/symbols-set/symbols-set.service.js";
import {SymbolsSetRegistry} from "../modules/symbols-set/symbols-set-registry.js";

window.symbolsSetRegistry = new SymbolsSetRegistry();
window.symbolsSetRegistry.register(
    new SymbolsSetService('lower', lowerLetters),
    new SymbolsSetService('upper', upperLetters),
    new SymbolsSetService('numbers', numbers),
    new SymbolsSetService('special', specialSymbols),
);

ReactDOM.createRoot(document.querySelector('#app')).render(React.createElement(App, {passwordBuilder: window.passwordBuilder}));
