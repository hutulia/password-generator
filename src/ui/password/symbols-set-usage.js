'use strict';

import React from 'react';
import {PasswordContext} from "./password";
import { useContext } from "react";

export function SymbolsSetUsage({symbolsSet, title}) {
    const passwordBuilder = useContext(PasswordContext);
    const [used, setUsed] = React.useState(passwordBuilder.uses(symbolsSet));

    const click = () => {
        if(used){
            passwordBuilder.doNotUseSymbolsSet(symbolsSet);
        }else{
            passwordBuilder.useSymbolsSet(symbolsSet);
        }

        setUsed(!used);
    };

    React.useEffect(() => {
        passwordBuilder.build();
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
