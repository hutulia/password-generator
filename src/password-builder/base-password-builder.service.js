export class BasePasswordBuilderService {
    password = '';

    length = 0;

    constructor() {
        this.reset()
    }

    reset(){
        this.setLength(0);
        this.password = '';
    }

    setLength(length){
        this.length = Number.parseInt(length);
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
