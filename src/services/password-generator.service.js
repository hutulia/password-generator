import {lowerLetters, upperLetters, numbers, specialSymbols} from "./password-builder.service.js";
import {Password} from "../ui/components/password/password.js";
import {PasswordBuilderBySetsService} from "./password-builder-by-sets.service.js";
import {SymbolsSetService} from "./symbols-set.service.js";
import {UseSet} from "../ui/components/password/controls/use-set.js";

export class PasswordGeneratorService {
    /**
     *
     * @type {PasswordBuilderBySetsService}
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
     * @type {UseSet}
     */
    useLower = null;

    /**
     *
     * @type {UseSet}
     */
    useUpper = null;

    /**
     *
     * @type {UseSet}
     */
    useNumbers = null;

    /**
     *
     * @type {UseSet}
     */
    useSpecial = null;

    setOfLower = new SymbolsSetService('lower-set',lowerLetters);
    setOfUpper = new SymbolsSetService('upper-set',upperLetters);
    setOfNumbers = new SymbolsSetService('numbers-set',numbers);
    setOfSpecial = new SymbolsSetService('special-set',specialSymbols);

    constructor() {
        this.passwordBuilder = new PasswordBuilderBySetsService();
        this.passwordBuilder.setLength(this.defaultLength);

        this.mainPassword = new Password(document.querySelector('.main-password'),this.passwordBuilder);
        this.useLower = new UseSet(document.querySelector('.use-lower'));
        this.useUpper = new UseSet(document.querySelector('.use-upper'));
        this.useNumbers = new UseSet(document.querySelector('.use-numbers'));
        this.useSpecial = new UseSet(document.querySelector('.use-special'));


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
