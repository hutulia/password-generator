import {BasePasswordBuilderService} from "./base-password-builder.service.js";

export class PasswordBuilderBySetsService extends BasePasswordBuilderService{
    setsToUse = [];

    constructor() {
        super();
    }

    reset() {
        super.reset();
        this.setsToUse = [];
    }

    uses(symbolsSet){
        return this.setsToUse.includes(symbolsSet);
    }

    useSymbolsSet(setOfSymbols){
        if(!this.setsToUse.includes(setOfSymbols)){
            this.setsToUse.push(setOfSymbols);
        }
    }

    doNotUseSymbolsSet(setOfSymbols){
        if(this.setsToUse.includes(setOfSymbols)){
            this.setsToUse.splice(this.setsToUse.indexOf(setOfSymbols),1);
        }
    }

    calcPassword(){
        if(!this.setsToUse.length || this.length < 1){
            return '';
        }

        let password = Array(this.length).fill('');
        let indexes = password.map((element, index) => index);

        while(indexes.length > 0){
            this.setsToUse.map(set => {
                const indexOfIndexesToUse = 0;
                indexes = indexes.sort(() => Math.random() - 0.5);
                password[indexes[indexOfIndexesToUse]] = set.getRandomSymbol();
                indexes.splice(indexOfIndexesToUse, 1);
            });
        }

        return password.join('');
    }

    getRandomSet(){
        return this.setsToUse[Math.floor(Math.random()*this.setsToUse.length)];
    }
}
