'use strict';

import React from 'react';
import {PasswordAsText} from "./password-as-text";
import {Copy} from "./copy";
import {Renew} from "./renew";
import {SymbolsSetUsage} from "./symbols-set-usage";
import {CustomLength} from "./custom-length";
import {PredefinedLength} from "./predefined-length";
import { createContext } from "react";

export const PasswordContext = createContext();

export function Password({passwordBuilder}) {
    return (
        <PasswordContext.Provider value={passwordBuilder}>
            <div className="password">
                <PasswordAsText />

                <div className="actions">
                    <Renew />
                    <Copy />
                </div>

                <div className="symbols">
                    <SymbolsSetUsage symbolsSet={symbolsSetRegistry.findByName('lower')} title='abc' />
                    <SymbolsSetUsage symbolsSet={symbolsSetRegistry.findByName('upper')} title='ABC' />
                    <SymbolsSetUsage symbolsSet={symbolsSetRegistry.findByName('numbers')} title='123' />
                    <SymbolsSetUsage symbolsSet={symbolsSetRegistry.findByName('special')} title='!@#' />
                </div>

                <CustomLength />

                <div className="lengths">
                    <PredefinedLength length="4" />
                    <PredefinedLength length="8" />
                    <PredefinedLength length="12" />
                    <PredefinedLength length="16" />
                    <PredefinedLength length="24" />
                    <PredefinedLength length="32" />
                </div>
            </div>
        </PasswordContext.Provider>
    );
}
