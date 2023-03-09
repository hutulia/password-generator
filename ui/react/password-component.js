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
            <PasswordAsText passwordBuilder={passwordBuilder} />
            <div className="actions">
                <Renew passwordBuilder = {passwordBuilder} />
                <Copy passwordBuilder = {passwordBuilder} />
            </div>
            <div className="symbols">
                <SymbolsSetUsage passwordBuilder={passwordBuilder} symbolsSet={symbolsSetRegistry.findByName('lower')} title='abc' />
                <SymbolsSetUsage passwordBuilder={passwordBuilder} symbolsSet={symbolsSetRegistry.findByName('upper')} title='ABC' />
                <SymbolsSetUsage passwordBuilder={passwordBuilder} symbolsSet={symbolsSetRegistry.findByName('numbers')} title='123' />
                <SymbolsSetUsage passwordBuilder={passwordBuilder} symbolsSet={symbolsSetRegistry.findByName('special')} title='!@#' />
            </div>

            <CustomLength passwordBuilder={passwordBuilder} />

            <div className="lengths">
                <PredefinedLength passwordBuilder={passwordBuilder} length="4" />
                <PredefinedLength passwordBuilder={passwordBuilder} length="8" />
                <PredefinedLength passwordBuilder={passwordBuilder} length="12" />
                <PredefinedLength passwordBuilder={passwordBuilder} length="16" />
                <PredefinedLength passwordBuilder={passwordBuilder} length="24" />
                <PredefinedLength passwordBuilder={passwordBuilder} length="32" />
            </div>
        </div>
    );
}
