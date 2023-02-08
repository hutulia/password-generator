import {lowerLetters, upperLetters, PasswordBuilder, numbers, specialSymbols} from "./password-builder.js";
import {Password} from "./ui/password.js";
import {SetLength} from "./ui/set-length.js";
import {UseLower} from "./ui/UseLower.js";
import {UseUpper} from "./ui/UseUpper.js";
import {UseNumbers} from "./ui/UseNumbers.js";
import {UseSpecial} from "./ui/UseSpecial.js";

export class PasswordGeneratorApp {
    /**
     *
     * @type {PasswordBuilder}
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

    constructor() {
        this.passwordBuilder = new PasswordBuilder();
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
            this.passwordBuilder.setSymbolsToUse(this.calcSymbolsForPasswordBuilderToUse());
            this.mainPassword.renew();
        });

        if(this.useUpperByDefault){
            this.useUpper.markActive();
        }else{
            this.useUpper.markInactive();
        }

        this.useUpper.getElement().addEventListener('click',() => {
            this.passwordBuilder.setSymbolsToUse(this.calcSymbolsForPasswordBuilderToUse());
            this.mainPassword.renew();
        });

        if(this.useNumbersByDefault){
            this.useNumbers.markActive();
        }else{
            this.useNumbers.markInactive();
        }

        this.useNumbers.getElement().addEventListener('click',() => {
            this.passwordBuilder.setSymbolsToUse(this.calcSymbolsForPasswordBuilderToUse());
            this.mainPassword.renew();
        });

        if(this.useSpecialByDefault){
            this.useSpecial.markActive();
        }else{
            this.useSpecial.markInactive();
        }

        this.useSpecial.getElement().addEventListener('click',() => {
            this.passwordBuilder.setSymbolsToUse(this.calcSymbolsForPasswordBuilderToUse());
            this.mainPassword.renew();
        });

        this.passwordBuilder.setSymbolsToUse(this.calcSymbolsForPasswordBuilderToUse());
        this.mainPassword.renew();
    }

    calcSymbolsForPasswordBuilderToUse(){
        let symbols = [];

        if(this.useLower.active()){
            symbols = symbols.concat(lowerLetters);
        }

        if(this.useUpper.active()){
            symbols = symbols.concat(upperLetters);
        }

        if(this.useNumbers.active()){
            symbols = symbols.concat(numbers);
        }

        if(this.useSpecial.active()){
            symbols = symbols.concat(specialSymbols);
        }

        return symbols;
    }
}
