'use strict';
import CopyTextToClipboardService from "../../modules/copy-text-to-clipboard.service.js";

import React from 'react';
import ReactDOM from 'react-dom';
import {PasswordEvents} from "../../modules/password-builder/password-events";
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
