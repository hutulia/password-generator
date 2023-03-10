'use strict';

import {PasswordEvents} from "../../modules/password-builder/password-events.js";

import React from 'react';

export function PasswordAsText({passwordBuilder}) {
    const [passwordAsText, setPasswordAsText] = React.useState(passwordBuilder.getPassword());

    React.useEffect(() => {
        passwordBuilder.getEvents().on(PasswordEvents.UPDATED,()=>setPasswordAsText(passwordBuilder.getPassword()));
    },[]);

    return <p className="password-text">{passwordAsText}</p>;
}
