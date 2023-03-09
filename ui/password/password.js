import React from 'react';
import ReactDOM from 'react-dom/client';
import {Component} from "../../src/ui-framework/component.js";
import {PasswordEvents} from "../../src/password-generator-app/password-events.js";
import {CustomLength} from "../react/controls/custom-length";
import {SymbolsSetRegistry} from "../../src/symbols-set/symbols-set-registry.js";
import {PasswordBuilderBySetsService} from "../../src/password-builder/password-builder-by-sets.service.js";
import {PasswordComponent} from "../react/password-component";

export class Password extends Component {
    length = 8;

    /**
     * @type {PasswordBuilderBySetsService}
     */
    passwordBuilder = null;

    /**
     * @type {SymbolsSetRegistry}
     */
    symbolsSetRegistry = null;

    constructor(element, passwordBuilder, symbolsSetRegitry) {
        super(element);
        this.symbolsSetRegistry = symbolsSetRegitry;
        this.passwordBuilder = passwordBuilder;
        this.passwordBuilder.setLength(this.length);
        this.passwordBuilder.useSymbolsSets(...this.symbolsSetRegistry.getAll());
        this.renew();

        ReactDOM.createRoot(document.querySelector('.p')).render(React.createElement(PasswordComponent, {password: this}));
    }

    getPassword() {
        return this.passwordBuilder.getPassword();
    }

    renew() {
        this.passwordBuilder.build();
        this.element.dispatchEvent(new CustomEvent(PasswordEvents.UPDATED));
    }

    getLength() {
        return this.length;
    }

    setLength(length) {
        this.length = length;
        this.passwordBuilder.setLength(this.length);
        this.renew();
    }
}
