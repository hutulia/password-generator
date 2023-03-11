'use strict';

import {PasswordEvents} from "../../modules/password-builder/password-events";
import React from 'react';
import {PasswordContext} from "./password";
import { useContext } from "react";

export function CustomLength() {
    const passwordBuilder = useContext(PasswordContext);
    const [length, setLength] = React.useState(passwordBuilder.getLength());

    const change = (e) => {
        passwordBuilder.setLength(e.target.value).build();
    };

    React.useEffect(() => {
        passwordBuilder.getEvents().on(PasswordEvents.LENGTH_UPDATED,()=>setLength(passwordBuilder.getLength()));
    },[]);

    return (
        <input
            type="number"
            value={length}
            onChange={change}
            min="0"
            size="3"
        />
    );
}
