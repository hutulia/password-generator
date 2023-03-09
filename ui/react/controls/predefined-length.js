'use strict';
import CopyTextToClipboardService from "../../../src/copy-text-to-clipboard.service.js";

import React from 'react';
import ReactDOM from 'react-dom';
import {PasswordEvents} from "../../../src/password-generator-app/password-events";
export function PredefinedLength({passwordBuilder, length}) {
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
