import {lowerLetters, upperLetters, numbers, specialSymbols} from "../../src/symbols-set/symbols-lists.js";
import {PasswordAsText} from "./views/password-as-text.js";
import {Renew} from "./actions/renew.js";
import {Copy} from "./actions/copy.js";
import {Component} from "../../src/ui-framework/component.js";
import {PasswordEvents} from "../../src/password-generator-app/password-events.js";
import CopyTextToClipboardService from "../../src/copy-text-to-clipboard.service.js";
import {CustomLength} from "./controls/custom-length.js";
import {PredefinedLength} from "./controls/predefined-length.js";
import {SymbolsSetUsage} from "./controls/symbols-set-usage.js";
import {SymbolsSetService} from "../../src/symbols-set/symbols-set.service.js";
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

    useLowerByDefault = true;

    useUpperByDefault = true;

    useNumbersByDefault = true;

    useSpecialByDefault = true;

    /**
     * @type {SymbolsSetUsage}
     */
    useLower = null;

    /**
     * @type {SymbolsSetUsage}
     */
    useUpper = null;

    /**
     * @type {SymbolsSetUsage}
     */
    useNumbers = null;

    /**
     * @type {SymbolsSetUsage}
     */
    useSpecial = null;

    setOfLower = new SymbolsSetService('lower-set', lowerLetters);
    setOfUpper = new SymbolsSetService('upper-set', upperLetters);
    setOfNumbers = new SymbolsSetService('numbers-set', numbers);
    setOfSpecial = new SymbolsSetService('special-set', specialSymbols);

    constructor(element, passwordBuilder, symbolsSetRegitry) {
        super(element);
        this.symbolsSetRegistry = symbolsSetRegitry;
        this.passwordBuilder = passwordBuilder;
        this.passwordBuilder.useSymbolsSet(this.symbolsSetRegistry.findByName('lower-letters'));
        this.passwordBuilder.useSymbolsSet(this.symbolsSetRegistry.findByName('upper-letters'));
        this.passwordBuilder.useSymbolsSet(this.symbolsSetRegistry.findByName('numbers'));
        this.passwordBuilder.useSymbolsSet(this.symbolsSetRegistry.findByName('special-symbols'));

        this.passwordAsTextComponent = new PasswordAsText(this.element.querySelector('.password-as-text'), this);
        this.copyButton = new Copy(this.element.querySelector('.copy'), this);
        this.renewButton = new Renew(this.element.querySelector('.renew'), this);
        this.customLength = new CustomLength(this.element.querySelector('.custom-length'), this);

        this.predefinedLength4 = new PredefinedLength(this.element.querySelector('.pl4'), this);
        this.predefinedLength8 = new PredefinedLength(this.element.querySelector('.pl8'), this);
        this.predefinedLength12 = new PredefinedLength(this.element.querySelector('.pl12'), this);
        this.predefinedLength16 = new PredefinedLength(this.element.querySelector('.pl16'), this);
        this.predefinedLength24 = new PredefinedLength(this.element.querySelector('.pl24'), this);
        this.predefinedLength32 = new PredefinedLength(this.element.querySelector('.pl32'), this);

        this.useLower = new SymbolsSetUsage(
            document.querySelector('.use-lower'),
            this.symbolsSetRegistry.findByName('lower-letters'),
            this,
        );

        this.useUpper = new SymbolsSetUsage(
            document.querySelector('.use-upper'),
            this.symbolsSetRegistry.findByName('upper-letters'),
            this,
        );

        this.useNumbers = new SymbolsSetUsage(
            document.querySelector('.use-numbers'),
            this.symbolsSetRegistry.findByName('numbers'),
            this,
        );

        this.useSpecial = new SymbolsSetUsage(
            document.querySelector('.use-special'),
            this.symbolsSetRegistry.findByName('special-symbols'),
            this,
        );

        this.passwordBuilder.setLength(this.length);
        this.renew();
    }

    useLowerSymbolSet() {
        this.passwordBuilder.useSymbolsSet(this.setOfLower);
        this.renew();
    }

    doNotUseLowerSymbolSet() {
        this.passwordBuilder.doNotUseSymbolsSet(this.setOfLower);
        this.renew();
    }

    useUpperSymbolSet() {
        this.passwordBuilder.useSymbolsSet(this.setOfUpper);
        this.renew();
    }

    doNotUseUpperSymbolSet() {
        this.passwordBuilder.doNotUseSymbolsSet(this.setOfUpper);
        this.renew();
    }

    useNumbersSymbolSet() {
        this.passwordBuilder.useSymbolsSet(this.setOfNumbers);
        this.renew();
    }

    doNotUseNumbersSymbolSet() {
        this.passwordBuilder.doNotUseSymbolsSet(this.setOfNumbers);
        this.renew();
    }

    useSpecialSymbolSet() {
        this.passwordBuilder.useSymbolsSet(this.setOfSpecial);
        this.renew();
    }

    doNotUseSpecialSymbolSet() {
        this.passwordBuilder.doNotUseSymbolsSet(this.setOfSpecial);
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
