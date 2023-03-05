import {lowerLetters, upperLetters, numbers, specialSymbols} from "./password-builder.service.js";
import {PasswordBlockComponent} from "../ui/components/password-block/password-block.component.js";
import {PasswordBuilderBySetsService} from "./password-builder-by-sets.service.js";
import {SymbolsSetService} from "./symbols-set.service.js";
import {UseSetIndicatorControl} from "../ui/components/password-block/controls/use-set-indicator.control.js";

export class PasswordGeneratorService {
    /**
     *
     * @type {PasswordBuilderBySetsService}
     */
    passwordBuilder = null;
    /**
     *
     * @type {PasswordBlockComponent}
     */
    mainPassword = null;

    defaultLength = 5;

    useLowerByDefault = true;

    useUpperByDefault = false;

    useNumbersByDefault = false;
    useSpecialByDefault = false;

    /**
     *
     * @type {UseSetIndicatorControl}
     */
    useLower = null;

    /**
     *
     * @type {UseSetIndicatorControl}
     */
    useUpper = null;

    /**
     *
     * @type {UseSetIndicatorControl}
     */
    useNumbers = null;

    /**
     *
     * @type {UseSetIndicatorControl}
     */
    useSpecial = null;

    setOfLower = new SymbolsSetService('lower-set',lowerLetters);
    setOfUpper = new SymbolsSetService('upper-set',upperLetters);
    setOfNumbers = new SymbolsSetService('numbers-set',numbers);
    setOfSpecial = new SymbolsSetService('special-set',specialSymbols);

    constructor() {
        this.passwordBuilder = new PasswordBuilderBySetsService();
        this.passwordBuilder.setLength(this.defaultLength);

        this.mainPassword = new PasswordBlockComponent(document.querySelector('.main-password'),this.passwordBuilder);
        this.useLower = new UseSetIndicatorControl(document.querySelector('.use-lower'));
        this.useUpper = new UseSetIndicatorControl(document.querySelector('.use-upper'));
        this.useNumbers = new UseSetIndicatorControl(document.querySelector('.use-numbers'));
        this.useSpecial = new UseSetIndicatorControl(document.querySelector('.use-special'));


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
