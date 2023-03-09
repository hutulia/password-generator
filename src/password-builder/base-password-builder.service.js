import {PasswordEvents} from "../password-generator-app/password-events";

const events = require('events');

export class BasePasswordBuilderService {
    password = '';

    length = 0;

    events = new events.EventEmitter();

    constructor() {
        this.reset()
    }

    reset(){
        this.setLength(0);
        this.password = '';
    }

    setLength(length){
        this.length = Number.parseInt(length);
        this.events.emit(PasswordEvents.LENGTH_UPDATED);
        return this;
    }

    getLength(){
        return this.length;
    }

    getEvents(){
        return this.events;
    }

    build(){
        this.password = this.calcPassword();
        this.events.emit(PasswordEvents.UPDATED);
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
