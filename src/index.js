import {PasswordBuilderBySetsService} from "./password-builder/password-builder-by-sets.service.js";
import {Password} from "../ui/password/password.js";
import {SymbolsSetService} from "./symbols-set/symbols-set.service.js";
import {lowerLetters, numbers, specialSymbols, upperLetters} from "./symbols-set/symbols-lists.js";
import {SymbolsSetRegistry} from "./symbols-set/symbols-set-registry.js";

const setOfLower = new SymbolsSetService('lower-set', lowerLetters);
const setOfUpper = new SymbolsSetService('upper-set', upperLetters);
const setOfNumbers = new SymbolsSetService('numbers-set', numbers);
const setOfSpecial = new SymbolsSetService('special-set', specialSymbols);

window.symbolsSetRegistry = new SymbolsSetRegistry();
symbolsSetRegistry.register(setOfLower,setOfUpper,setOfNumbers,setOfSpecial);

window.mainPassword = new Password(document.querySelector('.main-password'), new PasswordBuilderBySetsService(),window.symbolsSetRegistry);