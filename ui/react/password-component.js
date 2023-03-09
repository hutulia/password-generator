'use strict';

import React from 'react';
import {PasswordAsText} from "./views/password-as-text";
import {Copy} from "./actions/copy";
import {Renew} from "./actions/renew";
import {SymbolsSetUsage} from "./controls/symbols-set-usage";
import {CustomLength} from "./controls/custom-length";
import {PredefinedLength} from "./controls/predefined-length";

export function PasswordComponent({password}) {
    return (
        <div className="password main-password">
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

            <div className="lengths">
                <PredefinedLength password={password} length="4" />
                <PredefinedLength password={password} length="8" />
                <PredefinedLength password={password} length="12" />
                <PredefinedLength password={password} length="16" />
                <PredefinedLength password={password} length="24" />
                <PredefinedLength password={password} length="32" />
            </div>
        </div>
    );
}
