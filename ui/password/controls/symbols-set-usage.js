import {Component} from "../../../src/ui-framework/component.js";
import {Password} from "../password.js";
import {SymbolsSetService} from "../../../src/symbols-set/symbols-set.service.js";

export class SymbolsSetUsage extends Component{
    /**
     * @type {SymbolsSetService}
     */
    symbolsSet = null;

    /**
     * @type {Password}
     */
    password = null;

    constructor(element, symbolsSet, password) {
        super(element);
        this.symbolsSet = symbolsSet;
        this.password = password;

        if(this.password.passwordBuilder.uses(this.symbolsSet)){
            this.markActive();
        }

        this.element.addEventListener('click',()=>{
            this.toggle();
            this.handleState();
        });
    }

    getElement(){
        return this.element;
    }

    markActive(){
        this.element.classList.add('active');
    }

    markInactive(){
        this.element.classList.remove('active');
    }

    activate(){
        this.password.passwordBuilder.useSymbolsSet(this.symbolsSet);
        this.password.renew();
    }

    deactivate(){
        this.password.passwordBuilder.doNotUseSymbolsSet(this.symbolsSet);
        this.password.renew();
    }

    active(){
        return this.element.classList.contains('active');
    }

    handleState(){
        if(this.active()){
            this.activate();
        }else{
            this.deactivate();
        }
    }

    toggle(){
        if(!this.active()){
            this.markActive();
        }else{
            this.markInactive();
        }

        this.handleState();
    }
}
