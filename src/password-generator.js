import {lowerLetters, upperLetters, numbers, specialSymbols} from "./password-builder.js";
import {Password} from "./ui/password.js";
import {PasswordBuilderBySets} from "./password-builder-by-sets.js";
import {SymbolsSet} from "./SymbolsSet.js";
import {UseSetIndicator} from "./ui/UseSetIndicator.js";

export class PasswordGenerator {
    /**
     *
     * @type {PasswordBuilderBySets}
     */
    passwordBuilder = null;
    /**
     *
     * @type {Password}
     */
    mainPassword = null;

    defaultLength = 5;

    useLowerByDefault = true;

    useUpperByDefault = false;

    useNumbersByDefault = false;
    useSpecialByDefault = false;

    /**
     *
     * @type {UseSetIndicator}
     */
    useLower = null;

    /**
     *
     * @type {UseSetIndicator}
     */
    useUpper = null;

    /**
     *
     * @type {UseSetIndicator}
     */
    useNumbers = null;

    /**
     *
     * @type {UseSetIndicator}
     */
    useSpecial = null;

    setOfLower = new SymbolsSet('lower-set',lowerLetters);
    setOfUpper = new SymbolsSet('upper-set',upperLetters);
    setOfNumbers = new SymbolsSet('numbers-set',numbers);
    setOfSpecial = new SymbolsSet('special-set',specialSymbols);

    constructor() {
        this.passwordBuilder = new PasswordBuilderBySets();
        this.passwordBuilder.setLength(this.defaultLength);

        this.mainPassword = new Password(document.querySelector('.main-password'),this.passwordBuilder);
        this.useLower = new UseSetIndicator(document.querySelector('.use-lower'));
        this.useUpper = new UseSetIndicator(document.querySelector('.use-upper'));
        this.useNumbers = new UseSetIndicator(document.querySelector('.use-numbers'));
        this.useSpecial = new UseSetIndicator(document.querySelector('.use-special'));


        if(this.useLowerByDefault){
            this.useLower.markActive();
        }else{
            this.useLower.markInactive();
        }

        this.useLower.getElement().addEventListener('click',() => {
            this.updateSetsToUse();
            this.mainPassword.renew();
        });

        if(this.useUpperByDefault){
            this.useUpper.markActive();
        }else{
            this.useUpper.markInactive();
        }

        this.useUpper.getElement().addEventListener('click',() => {
            this.updateSetsToUse();
            this.mainPassword.renew();
        });

        if(this.useNumbersByDefault){
            this.useNumbers.markActive();
        }else{
            this.useNumbers.markInactive();
        }

        this.useNumbers.getElement().addEventListener('click',() => {
            this.updateSetsToUse();
            this.mainPassword.renew();
        });

        if(this.useSpecialByDefault){
            this.useSpecial.markActive();
        }else{
            this.useSpecial.markInactive();
        }

        this.useSpecial.getElement().addEventListener('click',() => {
            this.updateSetsToUse();
            this.mainPassword.renew();
        });

        this.updateSetsToUse();
        this.mainPassword.renew();
    }

    updateSetsToUse(){
        if(this.useLower.active()){
            this.passwordBuilder.useSymbolsSet(this.setOfLower);
        }else{
            this.passwordBuilder.doNotUseSymbolsSet(this.setOfLower);
        }

        if(this.useUpper.active()){
            this.passwordBuilder.useSymbolsSet(this.setOfUpper);
        }else{
            this.passwordBuilder.doNotUseSymbolsSet(this.setOfUpper);
        }

        if(this.useNumbers.active()){
            this.passwordBuilder.useSymbolsSet(this.setOfNumbers);
        }else{
            this.passwordBuilder.doNotUseSymbolsSet(this.setOfNumbers);
        }

        if(this.useSpecial.active()){
            this.passwordBuilder.useSymbolsSet(this.setOfSpecial);
        }else{
            this.passwordBuilder.doNotUseSymbolsSet(this.setOfSpecial);
        }
    }
}
