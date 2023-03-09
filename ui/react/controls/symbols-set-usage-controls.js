'use strict';

import React from 'react';
import {SymbolsSetUsage} from "./symbols-set-usage";

export function SymbolsSetUsageControls({password}) {

    return (
        <>
            <SymbolsSetUsage password={password} symbolsSet={password.symbolsSetRegistry.findByName('lower')} title='abc1' />
            <SymbolsSetUsage password={password} symbolsSet={password.symbolsSetRegistry.findByName('upper')} title='ABC2' />
            <SymbolsSetUsage password={password} symbolsSet={password.symbolsSetRegistry.findByName('numbers')} title='1233' />
            <SymbolsSetUsage password={password} symbolsSet={password.symbolsSetRegistry.findByName('special')} title='!@#4' />
        </>
    );
}
