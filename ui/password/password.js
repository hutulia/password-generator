import React from 'react';
import ReactDOM from 'react-dom/client';
import {PasswordAsText} from "../react/views/password-as-text.js";
import {Actions} from "../react/actions/actions.js";
import {Component} from "../../src/ui-framework/component.js";
import {PasswordEvents} from "../../src/password-generator-app/password-events.js";
import CopyTextToClipboardService from "../../src/copy-text-to-clipboard.service.js";
import {CustomLength} from "../react/controls/custom-length";
import {SymbolsSetRegistry} from "../../src/symbols-set/symbols-set-registry.js";
import {PasswordBuilderBySetsService} from "../../src/password-builder/password-builder-by-sets.service.js";
import {PredefinedLengthControls} from "../react/controls/predefined-length-controls";
import {SymbolsSetUsageControls} from "../react/controls/symbols-set-usage-controls";

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

        ReactDOM.createRoot(this.element.querySelector('.password-as-text')).render(React.createElement(PasswordAsText, {password: this}));

        ReactDOM.createRoot(this.element.querySelector('.actions')).render(React.createElement(Actions, {password: this}));

        ReactDOM.createRoot(this.element.querySelector('.custom-length-wrapper')).render(React.createElement(CustomLength, {password: this}));

        ReactDOM.createRoot(this.element.querySelector('.predefined-length-controls')).render(React.createElement(PredefinedLengthControls, {password: this}));

        ReactDOM.createRoot(this.element.querySelector('.symbols-set-usage-controls')).render(React.createElement(SymbolsSetUsageControls, {password: this}));
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
