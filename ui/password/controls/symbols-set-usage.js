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

    activatedCallback = () => {};
    deactivatedCallback = () => {};

    constructor(element, symbolsSet, password, activeByDefault = false, activatedCallback = ()=>{}, deactivatedCallback = ()=>{}, ) {
        super(element);
        this.symbolsSet = symbolsSet;
        this.password = password;
        if(this.password.passwordBuilder.uses(this.symbolsSet)){
            this.markActive();
        }
        this.activatedCallback = activatedCallback;
        this.deactivatedCallback = deactivatedCallback;
        this.element.addEventListener('click',()=>{
            this.toggle();
            this.element.dispatchEvent(new Event('changed'));
        });
    }

    getElement(){
        return this.element;
    }

    markActive(){
        this.element.classList.add('active');
        this.activatedCallback();
    }

    markInactive(){
        this.element.classList.remove('active');
        this.deactivatedCallback();
    }

    active(){
        return this.element.classList.contains('active');
    }

    toggle(){
        if(!this.active()){
            this.markActive();
        }else{
            this.markInactive();
        }
    }
}
