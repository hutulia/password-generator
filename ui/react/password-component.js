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
                <Copy passwordBuilder = {passwordBuilder} />
                <Renew passwordBuilder = {passwordBuilder} />
            </div>
            <div className="symbols">
                <SymbolsSetUsage passwordBuilder={password.passwordBuilder} symbolsSet={password.symbolsSetRegistry.findByName('lower')} title='abc' />
                <SymbolsSetUsage passwordBuilder={password.passwordBuilder} symbolsSet={password.symbolsSetRegistry.findByName('upper')} title='ABC' />
                <SymbolsSetUsage passwordBuilder={password.passwordBuilder} symbolsSet={password.symbolsSetRegistry.findByName('numbers')} title='123' />
                <SymbolsSetUsage passwordBuilder={password.passwordBuilder} symbolsSet={password.symbolsSetRegistry.findByName('special')} title='!@#' />
            </div>

            <CustomLength passwordBuilder={password.passwordBuilder} />

            <div className="lengths">
                <PredefinedLength passwordBuilder={password.passwordBuilder} length="4" />
                <PredefinedLength passwordBuilder={password.passwordBuilder} length="8" />
                <PredefinedLength passwordBuilder={password.passwordBuilder} length="12" />
                <PredefinedLength passwordBuilder={password.passwordBuilder} length="16" />
                <PredefinedLength passwordBuilder={password.passwordBuilder} length="24" />
                <PredefinedLength passwordBuilder={password.passwordBuilder} length="32" />
            </div>
        </div>
    );
}
