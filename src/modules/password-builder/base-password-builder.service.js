export class BasePasswordBuilderService {
    password = '';

    defaultLength = 8;

    length = 8;

    constructor() {
        this.reset()
    }

    reset(){
        this.setLength(this.defaultLength);
    }

    setLength(length){
        this.length = length;
    }

    build(){
        this.password = this.calcPassword();
    }

    calcPassword(){
        return '';
    }

    getPassword(){
        return this.password;
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
