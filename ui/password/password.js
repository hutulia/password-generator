import {PasswordAsText} from "../react/views/password-as-text.js";
import {Actions} from "../react/actions/actions.js";
import {Copy} from "../react/actions/copy.js";
import {Renew} from "../react/actions/renew.js";
import {Component} from "../../src/ui-framework/component.js";
import {PasswordEvents} from "../../src/password-generator-app/password-events.js";
import CopyTextToClipboardService from "../../src/copy-text-to-clipboard.service.js";
import {CustomLength} from "../react/controls/custom-length";
import {PredefinedLength} from "./controls/predefined-length.js";
import {SymbolsSetUsage} from "./controls/symbols-set-usage.js";
import {SymbolsSetRegistry} from "../../src/symbols-set/symbols-set-registry.js";
import {PasswordBuilderBySetsService} from "../../src/password-builder/password-builder-by-sets.service.js";

import React from 'react';
import ReactDOM from 'react-dom';
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

        ReactDOM.createRoot(this.element.querySelector('.password-as-text')).render(React.createElement(PasswordAsText, {password: this}));

        ReactDOM.createRoot(this.element.querySelector('.actions')).render(React.createElement(Actions, {password: this}));

        ReactDOM.createRoot(this.element.querySelector('.custom-length-wrapper')).render(React.createElement(CustomLength, {password: this}));

        ReactDOM.createRoot(this.element.querySelector('.predefined-length-controls')).render(React.createElement(PredefinedLengthControls, {password: this}));

        ReactDOM.createRoot(this.element.querySelector('.symbols-set-usage-controls')).render(React.createElement(SymbolsSetUsageControls, {password: this}));

        this.passwordBuilder.setLength(this.length);
        this.renew();
    }

    getPassword() {
        return this.passwordBuilder.getPassword();
    }

    renew() {
        this.passwordBuilder.build();
        this.element.dispatchEvent(new CustomEvent(PasswordEvents.UPDATED));
    }

    copy() {
        CopyTextToClipboardService.copy(this.getPassword());
        this.element.dispatchEvent(new CustomEvent(PasswordEvents.COPIED));
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
