'use strict';

import React from 'react';
import {PasswordAsText} from "./password-as-text";
import {Copy} from "./copy";
import {Renew} from "./renew";
import {SymbolsSetUsage} from "./symbols-set-usage";
import {CustomLength} from "./custom-length";
import {PredefinedLength} from "./predefined-length";

export function Password({passwordBuilder}) {
    return (
        <div className="password">
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
