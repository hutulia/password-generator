import {PasswordBuilder} from "../../password-builder.js";
import {PasswordAsText} from "./password-as-text.js";
import {lowerLetters} from "../../password-builder.js";

export class UseSpecial{
    /**
     *
     * @type {Element}
     */
    element = null;

    constructor(element) {
        this.element = element;
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
    }

    markInactive(){
        this.element.classList.remove('active');
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
