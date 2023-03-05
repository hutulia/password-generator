export class UseSetIndicator {
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
