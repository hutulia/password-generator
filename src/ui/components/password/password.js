import {
    lowerLetters,
    numbers,
    PasswordBuilderService, specialSymbols,
    upperLetters
} from "../../../services/password-builder.service.js";
import {PasswordAsText} from "./views/password-as-text.js";
import {Renew} from "./actions/renew.js";
import {Copy} from "./actions/copy.js";
import {Component} from "../../lib/component.js";
import {PasswordEvents} from "./constants.js";
import CopyTextToClipboardService from "../../../services/copy-text-to-clipboard.service.js";
import {CustomLength} from "./controls/custom-length.js";
import {PredefinedLength} from "./controls/predefined-length.js";
import {UseSet} from "./controls/use-set.js";
import {PasswordGeneratorService} from "../../../services/password-generator.service.js";
import {SymbolsSetService} from "../../../services/symbols-set.service.js";

export class Password extends Component{
    password = '';

    length = 8;

    customLength = null;

    /**
     * @type {UseSet}
     */
    useLowerComponent = null;

    /**
     * @type {PasswordAsText}
     */
    passwordAsTextComponent = null;

    /**
     * @type {PasswordBuilderService}
     */
    passwordBuilder = null;

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
     *
     * @type {UseSet}
     */
    useLower = null;

    /**
     *
     * @type {UseSet}
     */
    useUpper = null;

    /**
     *
     * @type {UseSet}
     */
    useNumbers = null;

    /**
     *
     * @type {UseSet}
     */
    useSpecial = null;

    setOfLower = new SymbolsSetService('lower-set',lowerLetters);
    setOfUpper = new SymbolsSetService('upper-set',upperLetters);
    setOfNumbers = new SymbolsSetService('numbers-set',numbers);
    setOfSpecial = new SymbolsSetService('special-set',specialSymbols);

    constructor(element, passwordBuilder) {
        super(element);
        this.passwordBuilder = passwordBuilder;
        this.passwordAsTextComponent = new PasswordAsText(this.element.querySelector('.password-as-text'),this);
        this.copyButton = new Copy(this.element.querySelector('.copy'), this);
        this.renewButton = new Renew(this.element.querySelector('.renew'), this);
        this.customLength = new CustomLength(this.element.querySelector('.custom-length'), this);
        
        this.predefinedLength4 = new PredefinedLength(this.element.querySelector('.pl4'), this);
        this.predefinedLength8 = new PredefinedLength(this.element.querySelector('.pl8'), this);
        this.predefinedLength12 = new PredefinedLength(this.element.querySelector('.pl12'), this);
        this.predefinedLength16 = new PredefinedLength(this.element.querySelector('.pl16'), this);
        this.predefinedLength24 = new PredefinedLength(this.element.querySelector('.pl24'), this);
        this.predefinedLength32 = new PredefinedLength(this.element.querySelector('.pl32'), this);

        if(this.useLowerByDefault){
            this.useLowerSymbolSet();
        }

        if(this.useUpperByDefault){
            this.useUpperSymbolSet();
        }

        if(this.useNumbersByDefault){
            this.useNumbersSymbolSet();
        }

        if(this.useSpecialByDefault){
            this.useSpecialSymbolSet();
        }

        this.useLower = new UseSet(
            document.querySelector('.use-lower'),
            this.useLowerByDefault,
            ()=>this.useLowerSymbolSet(),
            ()=>this.doNotUseLowerSymbolSet()
        );

        this.useUpper = new UseSet(
            document.querySelector('.use-upper'),
            this.useUpperByDefault,
            ()=>this.useUpperSymbolSet(),
            ()=>this.doNotUseUpperSymbolSet()
        );

        this.useNumbers = new UseSet(
            document.querySelector('.use-numbers'),
            this.useNumbersByDefault,
            ()=>this.useNumbersSymbolSet(),
            ()=>this.doNotUseNumbersSymbolSet()
        );

        this.useSpecial = new UseSet(
            document.querySelector('.use-special'),
            this.useSpecialByDefault,
            ()=>this.useSpecialSymbolSet(),
            ()=>this.doNotUseSpecialSymbolSet()
        );

        this.setLength(this.length);
        this.renew();
    }
    
    useLowerSymbolSet(){
        this.passwordBuilder.useSymbolsSet(this.setOfLower);
        this.renew();
    }

    doNotUseLowerSymbolSet(){
        this.passwordBuilder.doNotUseSymbolsSet(this.setOfLower);
        this.renew();
    }

    useUpperSymbolSet(){
        this.passwordBuilder.useSymbolsSet(this.setOfUpper);
        this.renew();
    }

    doNotUseUpperSymbolSet(){
        this.passwordBuilder.doNotUseSymbolsSet(this.setOfUpper);
        this.renew();
    }

    useNumbersSymbolSet(){
        this.passwordBuilder.useSymbolsSet(this.setOfNumbers);
        this.renew();
    }

    doNotUseNumbersSymbolSet(){
        this.passwordBuilder.doNotUseSymbolsSet(this.setOfNumbers);
        this.renew();
    }

    useSpecialSymbolSet(){
        this.passwordBuilder.useSymbolsSet(this.setOfSpecial);
        this.renew();
    }

    doNotUseSpecialSymbolSet(){
        this.passwordBuilder.doNotUseSymbolsSet(this.setOfSpecial);
        this.renew();
    }

    setPassword(password){
        this.password = password;
        this.element.dispatchEvent(new CustomEvent(PasswordEvents.UPDATED));
    }

    getPassword(){
        return this.password;
    }

    renew(){
        this.setPassword(this.passwordBuilder.build());
    }

    copy(){
        CopyTextToClipboardService.copy(this.getPassword());
        this.element.dispatchEvent(new CustomEvent(PasswordEvents.COPIED));
    }

    getLength(){
        return this.length;
    }

    setLength(length){
        this.length = length;
        this.passwordBuilder.setLength(this.length);
        this.renew();
    }
}
