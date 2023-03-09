'use strict';
import CopyTextToClipboardService from "../../../src/copy-text-to-clipboard.service.js";

import React from 'react';

import {PasswordEvents} from "../../../src/password-generator-app/password-events";
export function CustomLength({password}) {
    const [length, setLength] = React.useState(password.getLength());

    const change = (e) => {
        password.setLength(e.target.value);
    };

    React.useEffect(() => {
        password.passwordBuilder.getEvents().on(PasswordEvents.LENGTH_UPDATED,()=>setLength(password.getLength()));
    },[]);

    return (
        <input
            className="custom-length"
            onChange={change}
            type="number"
            min="0"
            max="32"
            value={length}
            size="3"
        />
    );
}
