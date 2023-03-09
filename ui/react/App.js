'use strict';

import React from 'react';
import {PasswordAsText} from "./views/password-as-text";
import {Copy} from "./actions/copy";
import {Renew} from "./actions/renew";
import {SymbolsSetUsage} from "./controls/symbols-set-usage";
import {CustomLength} from "./controls/custom-length";
import {PredefinedLength} from "./controls/predefined-length";
import {PasswordComponent} from "./password-component";

export function App({password}) {
    return (
        <PasswordComponent password={password}/>
    );
}
