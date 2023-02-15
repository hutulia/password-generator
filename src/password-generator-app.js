import {lowerLetters, upperLetters, PasswordBuilder, numbers, specialSymbols} from "./password-builder.js";
import {Password} from "./ui/password.js";
import {SetLength} from "./ui/set-length.js";
import {UseLower} from "./ui/UseLower.js";
import {UseUpper} from "./ui/UseUpper.js";
import {UseNumbers} from "./ui/UseNumbers.js";
import {UseSpecial} from "./ui/UseSpecial.js";
import {PasswordBuilderBySets} from "./password-builder-by-sets.js";
import {SymbolsSet} from "./SymbolsSet.js";

export class PasswordGeneratorApp {
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

    /**
     *
     * @type {SetLength}
     */
    setLength = null;

    defaultLength = 8;

    useLowerByDefault = true;

    useUpperByDefault = false;

    useNumbersByDefault = false;
    useSpecialByDefault = false;

    /**
     *
     * @type {UseLower}
     */
    useLower = null;

    /**
     *
     * @type {UseUpper}
     */
    useUpper = null;

    /**
     *
     * @type {UseNumbers}
     */
    useNumbers = null;

    /**
     *
     * @type {UseSpecial}
     */
    useSpecial = null;

    setOfLower = new SymbolsSet('lower-set',lowerLetters);
    setOfUpper = new SymbolsSet('upper-set',upperLetters);
    setOfNumbers = new SymbolsSet('numbers-set',numbers);
    setOfSpecial = new SymbolsSet('special-set',specialSymbols);

    constructor() {
        this.passwordBuilder = new PasswordBuilderBySets();
        this.setLength = new SetLength(document.querySelector('.set-length'));
        this.mainPassword = new Password(document.querySelector('.main-password'),this.passwordBuilder);
        this.useLower = new UseLower(document.querySelector('.use-lower'));
        this.useUpper = new UseUpper(document.querySelector('.use-upper'));
        this.useNumbers = new UseNumbers(document.querySelector('.use-numbers'));
        this.useSpecial = new UseSpecial(document.querySelector('.use-special'));

        this.passwordBuilder.setLength(this.defaultLength);
        this.setLength.setLength(this.defaultLength);

        this.setLength.getElement().addEventListener('change',()=>{
            console.log('length changed');
            this.passwordBuilder.setLength(this.setLength.getElement().value);
            this.mainPassword.setPassword(this.passwordBuilder.build());
        });

        document.querySelectorAll('.predefined-length').forEach((element) => {
            element.addEventListener('click',() => {
                const value = element.innerHTML;
                this.passwordBuilder.setLength(value);
                this.setLength.setLength(value);
                this.mainPassword.renew();
            });
        });

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
