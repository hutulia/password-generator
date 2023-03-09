'use strict';

import React from 'react';
import {PasswordAsText} from "./views/password-as-text";
import {Copy} from "./actions/copy";
import {Renew} from "./actions/renew";
import {SymbolsSetUsage} from "./controls/symbols-set-usage";
import {CustomLength} from "./controls/custom-length";

export function PasswordComponent({password}) {
    return (
        <>
            <PasswordAsText password={password} />
            <div className="actions">
                <Copy password = {password} />
                <Renew password = {password} />
            </div>
            <div className="symbols">
                <SymbolsSetUsage password={password} symbolsSet={password.symbolsSetRegistry.findByName('lower')} title='abc' />
                <SymbolsSetUsage password={password} symbolsSet={password.symbolsSetRegistry.findByName('upper')} title='ABC' />
                <SymbolsSetUsage password={password} symbolsSet={password.symbolsSetRegistry.findByName('numbers')} title='123' />
                <SymbolsSetUsage password={password} symbolsSet={password.symbolsSetRegistry.findByName('special')} title='!@#' />
            </div>
            <CustomLength password={password} />
        </>
    );
}
