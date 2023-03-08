//import {PasswordAsText} from "./views/password-as-text.js";
import {PasswordAsText} from "../react/views/password-as-text.js";
import {Renew} from "./actions/renew.js";
//import {Copy} from "./actions/copy.js";
import {Copy} from "../react/actions/copy.js";
import {Component} from "../../src/ui-framework/component.js";
import {PasswordEvents} from "../../src/password-generator-app/password-events.js";
import CopyTextToClipboardService from "../../src/copy-text-to-clipboard.service.js";
import {CustomLength} from "./controls/custom-length.js";
import {PredefinedLength} from "./controls/predefined-length.js";
import {SymbolsSetUsage} from "./controls/symbols-set-usage.js";
import {SymbolsSetRegistry} from "../../src/symbols-set/symbols-set-registry.js";
import {PasswordBuilderBySetsService} from "../../src/password-builder/password-builder-by-sets.service.js";

export class Password extends Component {
    length = 8;

    customLength = null;

    /**
     * @type {PasswordAsText}
     */
    passwordAsTextComponent = null;

    /**
     * @type {PasswordBuilderBySetsService}
     */
    passwordBuilder = null;

    /**
     * @type {SymbolsSetRegistry}
     */
    symbolsSetRegistry = null;

    /**
     * @type {Copy}
     */
    copyButton = null;

    /**
     * @type {Renew}
     */
    renewButton = null;

    constructor(element, passwordBuilder, symbolsSetRegitry) {
        super(element);
        this.symbolsSetRegistry = symbolsSetRegitry;
        this.passwordBuilder = passwordBuilder;

        ReactDOM.createRoot(this.element.querySelector('.password-as-text')).render(React.createElement(PasswordAsText, {password: this}));

        ReactDOM.createRoot(this.element.querySelector('.action-copy')).render(React.createElement(Copy, {password: this}));

        this.renewButton = new Renew(this.element.querySelector('.renew'), this);
        this.customLength = new CustomLength(this.element.querySelector('.custom-length'), this);

        [4,8,12,16,24,32].map(length => new PredefinedLength(this.element.querySelector('.pl'+length), this));

        ['lower', 'upper', 'numbers', 'special'].map(name => {
            const symbolsSet = this.symbolsSetRegistry.findByName(name);
            this.passwordBuilder.useSymbolsSet(symbolsSet);

            new SymbolsSetUsage(
                document.querySelector('.set-usage[data-name="'+symbolsSet.name+'"]'),
                symbolsSet,
                this
            );
        });

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
