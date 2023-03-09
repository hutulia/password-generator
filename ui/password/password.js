import React from 'react';
import ReactDOM from 'react-dom/client';
import {Component} from "../../src/ui-framework/component.js";
import {PasswordEvents} from "../../src/password-generator-app/password-events.js";
import {SymbolsSetRegistry} from "../../src/symbols-set/symbols-set-registry.js";
import {PasswordBuilderBySetsService} from "../../src/password-builder/password-builder-by-sets.service.js";
import {PasswordComponent} from "../react/password-component";
import {App} from "../react/App";
export class Password extends Component {
    length = 8;

    /**
     * @type {PasswordBuilderBySetsService}
     */
    passwordBuilder = null;

    constructor(element, passwordBuilder, symbolsSetRegitry) {
        super(element);
        this.symbolsSetRegistry = symbolsSetRegitry;
        this.passwordBuilder = passwordBuilder;
    }

    getPassword() {
        return this.passwordBuilder.getPassword();
    }

    renew() {
        this.passwordBuilder.build();
    }

    getLength() {
        return this.passwordBuilder.getLength();
    }

    setLength(length) {
        this.length = length;
        this.passwordBuilder.setLength(this.length);
        this.renew();
    }
}
