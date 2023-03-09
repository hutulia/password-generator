'use strict';

import {PasswordEvents} from "../../../src/password-generator-app/password-events.js";

import React from 'react';

export function PasswordAsText({password}) {
    const [passwordAsText, setPasswordAsText] = React.useState(password.getPassword());

    React.useEffect(() => {
        password.getElement().addEventListener(PasswordEvents.UPDATED,()=>setPasswordAsText(password.getPassword()));
    },[]);

    return <p className="password-text">{passwordAsText}</p>;
}
