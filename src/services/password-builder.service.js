export const lowerLetters = ['a','b','c','d','e','f','g'];
export const upperLetters = lowerLetters.map((symbol)=>symbol.toUpperCase());
export const numbers = ['1','2','3','4'];
export const specialSymbols = ['!','@','#','$','-','_'];

export class PasswordBuilderService {
    symbolsToUse = [];

    symbolsToNotUse = [];

    length = 16;

    constructor(length = 16, useSymbols = [], doNotUseSymbols = [], ) {
        this.setLength(length);

        if(useSymbols.lenth){
            this.useSymbols(useSymbols);
        }else{
            this.useSymbols(lowerLetters);
            this.useSymbols(numbers);
        }

        if(doNotUseSymbols.lenth){
            this.doNotUseSymbols(doNotUseSymbols);
        }
    }

    reset(){
        this.setLength(4);
        this.setSymbolsToUse([]);
        this.setSymbolsToNotUse([]);
    }

    setSymbolsToUse(symbols){
        this.symbolsToUse = symbols;
    }

    setSymbolsToNotUse(symbols){
        this.symbolsToNotUse = symbols;
    }

    setLength(length){
        this.length = length;
    }

    useSymbols(symbols){
        this.symbolsToUse = [...new Set(this.symbolsToUse.concat(symbols))];
    }

    doNotUseSymbols(symbols){
        this.symbolsToNotUse = [...new Set(this.symbolsToNotUse.concat(symbols))];
    }

    calcSymbolsToUse(){
        return this.symbolsToUse.filter(item => !this.symbolsToNotUse.includes(item));
    }

    build(){
        if(this.length < 1 || !this.symbolsToUse.length){
            return '';
        }

        let password = '';
        const symbolsToUse = this.calcSymbolsToUse();

        for (let i = 1; i <= this.length; i++) {
            password += this.getRandomSymbol(symbolsToUse);
        }

        return password;
    }

    /**
     *
     * @returns {*}
     * @param symbols
     */
    getRandomSymbol(symbols){
        return symbols[Math.floor(Math.random()*symbols.length)];
    }
}
