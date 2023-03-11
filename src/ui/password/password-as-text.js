'use strict';

import {PasswordEvents} from "../../modules/password-builder/password-events.js";

import React from 'react';
import {PasswordContext} from "./password";
import { useContext } from "react";

export function PasswordAsText() {
    const passwordBuilder = useContext(PasswordContext);
    const [passwordAsText, setPasswordAsText] = React.useState(passwordBuilder.getPassword());

    React.useEffect(() => {
        passwordBuilder.getEvents().on(PasswordEvents.UPDATED,()=>setPasswordAsText(passwordBuilder.getPassword()));
    },[]);

    return passwordAsText;
    return <p className="password-text">{passwordAsText}</p>;
}
