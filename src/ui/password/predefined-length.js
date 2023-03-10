'use strict';

import React from 'react';
import {PasswordEvents} from "../../modules/password-builder/password-events";
import {PasswordContext} from "./password";
import { useContext } from "react";

export function PredefinedLength({length}) {
    const passwordBuilder = useContext(PasswordContext);
    const [active, setActive] = React.useState(length == passwordBuilder.getLength());
    const click = (e) => {
        passwordBuilder.setLength(e.target.innerHTML).build();
    };

    React.useEffect(() => {
        passwordBuilder.getEvents().on(PasswordEvents.LENGTH_UPDATED,()=>setActive(length == passwordBuilder.getLength()));
    },[]);

    let classList = ['btn', 'predefined-length'];
    if(active){
        classList.push('active');
    }

    return (
        <button className={classList.join(' ')} onClick={click}>{length}</button>
    );
}
