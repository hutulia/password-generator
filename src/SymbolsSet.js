export class SymbolsSet{
    name = '';

    items = [];

    constructor(name, items = []) {
        this.name = name;
        this.items = items;
    }

    getName(){
        return this.name();
    }

    getRandomSymbol(){
        if(!this.items.length){
            return '';
        }

        return this.items[Math.floor(Math.random()*this.items.length)];
    }
}