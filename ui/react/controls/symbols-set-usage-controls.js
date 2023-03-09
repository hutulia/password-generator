'use strict';

import React from 'react';
import {SymbolsSetUsage} from "./symbols-set-usage";

export function SymbolsSetUsageControls({password}) {
    return (
        <>
            <SymbolsSetUsage password={password} symbolsSet={password.symbolsSetRegistry.findByName('lower')} title='abc' />
            <SymbolsSetUsage password={password} symbolsSet={password.symbolsSetRegistry.findByName('upper')} title='ABC' />
            <SymbolsSetUsage password={password} symbolsSet={password.symbolsSetRegistry.findByName('numbers')} title='123' />
            <SymbolsSetUsage password={password} symbolsSet={password.symbolsSetRegistry.findByName('special')} title='!@#' />
        </>
    );
}
