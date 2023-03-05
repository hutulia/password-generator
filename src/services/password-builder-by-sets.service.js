import {PasswordBuilderService} from "./password-builder.service.js";

export class PasswordBuilderBySetsService extends PasswordBuilderService{
    setsToUse = [];

    constructor() {
        super();

    }

    reset() {
        super.reset();
        this.setsToUse = [];
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

    build(){
        if(!this.setsToUse.length || this.length < 1){
            return '';
        }

        let password = [];

        for (let i = 0; i < this.length; i++) {
            password.push(this.getRandomSet().getRandomSymbol());
        }

        let indexesCanBeForce = [];
        password.map((item, index) => {
            indexesCanBeForce.push(index);
        });

        if(this.setsToUse.length){
            while(indexesCanBeForce.length){
                //this.setsToUse.sort(() => Math.random() - 0.5);
                this.setsToUse.map(set => {
                    if(indexesCanBeForce.length < 1){
                        return;
                    }

                    indexesCanBeForce = indexesCanBeForce.sort(() => Math.random() - 0.5);

                    let indexToForce = indexesCanBeForce[0];
                    indexesCanBeForce.splice(0, 1);

                    let forcedSymbol = set.getRandomSymbol();
                    password[indexToForce] = forcedSymbol;
                    console.log(set.name,indexToForce+1,forcedSymbol);
                });
            }
        }

        return password.join('');
    }

    getRandomIndex(arrayInstance){
        return arrayInstance[Math.floor(Math.random()*arrayInstance.length)];
    }

    getRandomSet(){
        return this.setsToUse[Math.floor(Math.random()*this.setsToUse.length)];
    }
}
