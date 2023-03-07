import {Component} from "../../../src/ui-framework/component.js";

export class UseSet extends Component{

    activatedCallback = () => {};
    deactivatedCallback = () => {};

    constructor(element, activeByDefault = false, activatedCallback = ()=>{}, deactivatedCallback = ()=>{}, ) {
        super(element);
        if(activeByDefault){
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
