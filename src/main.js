import {PasswordBuilderBySetsService} from "./password-builder/password-builder-by-sets.service.js";
import {Password} from "../ui/password/password.js";
import {SymbolsSetService} from "./symbols-set/symbols-set.service.js";
import {lowerLetters, numbers, specialSymbols, upperLetters} from "./symbols-set/symbols-lists.js";
import {SymbolsSetRegistry} from "./symbols-set/symbols-set-registry.js";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

window.symbolsSetRegistry = new SymbolsSetRegistry();
symbolsSetRegistry.register(
    new SymbolsSetService('lower', lowerLetters),
    new SymbolsSetService('upper', upperLetters),
    new SymbolsSetService('numbers', numbers),
    new SymbolsSetService('special', specialSymbols),
);

window.mainPassword = new Password(document.querySelector('.main-password'), new PasswordBuilderBySetsService(),window.symbolsSetRegistry);

import {LikeButton} from "../ui/react/like-button.js";
const rootNode = document.getElementById('like-button-root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));

ReactDOM.render(<App />, document.getElementById('app'));