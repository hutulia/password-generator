'use strict';

import {PasswordEvents} from "../../../src/password-generator-app/password-events.js";

export function PasswordAsText({password}) {
    const [passwordAsText, setPasswordAsText] = React.useState(password.getPassword());

    password.getElement().addEventListener(PasswordEvents.UPDATED,()=>setPasswordAsText(password.getPassword()));

    return passwordAsText;
}
