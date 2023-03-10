'use strict';

import {PasswordEvents} from "../../modules/password-builder/password-events";
import React from 'react';


export function CustomLength({passwordBuilder}) {
    const [length, setLength] = React.useState(passwordBuilder.getLength());

    const change = (e) => {
        passwordBuilder.setLength(e.target.value).build();
    };

    React.useEffect(() => {
        passwordBuilder.getEvents().on(PasswordEvents.LENGTH_UPDATED,()=>setLength(passwordBuilder.getLength()));
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
