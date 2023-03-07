export class SymbolsSetRegistry {
    items = [];

    findByName(name){
        return this.items.find(item => item.name === name);
    }

    /**
     * @param items
     */
    register(...items){
        items.map((item)=>{
            if(!this.items.includes(item)){
                this.items.push(item);
            }
        });
    }

    /**
     * @param items
     */
    delete(...items){
        items.map((item)=>{
            if(this.items.includes(item)){
                this.items.splice(this.items.indexOf(item),1);
            }
        });
    }
}