'use strict';

import React from 'react';
import {PasswordEvents} from "../../../src/password-generator-app/password-events";

export function SymbolsSetUsage({password, symbolsSet, title}) {
    const [used, setUsed] = React.useState(password.passwordBuilder.uses(symbolsSet));

    const click = () => {
        if(used){
            password.passwordBuilder.doNotUseSymbolsSet(symbolsSet);
        }else{
            password.passwordBuilder.useSymbolsSet(symbolsSet);
        }

        setUsed(!used);
    };

    React.useEffect(() => {
        password.renew();
    },[used]);

    let classList = ['btn','set-usage'];

    if(used){
        classList.push('active');
    }

    const classListString = classList.join(' ');

    return (
        <button className={classListString} onClick={click}>{title}</button>
    );
}
