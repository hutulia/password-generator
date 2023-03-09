'use strict';
import CopyTextToClipboardService from "../../../src/copy-text-to-clipboard.service.js";

import React from 'react';
import ReactDOM from 'react-dom';
import {PasswordEvents} from "../../../src/password-generator-app/password-events";
export function SymbolsSetUsage({password, symbolsSet, title}) {
    const [used, setUsed] = React.useState(password.passwordBuilder.uses(symbolsSet));
    console.log('symbols-set-usage-controls');
    // React.useEffect(() => {
    //     password.getElement().addEventListener(PasswordEvents.UPDATED,()=>setLength(password.getLength()));
    // },[]);

    let classList = ['btn','set-usage'];
    if(used){
        classList.push('active');
    }

    const classListString = classList.join(' ');

    return (
        <button className={classListString}>{title}</button>
    );
}
