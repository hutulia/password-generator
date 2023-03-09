'use strict';
import CopyTextToClipboardService from "../../../src/copy-text-to-clipboard.service.js";

import React from 'react';
import ReactDOM from 'react-dom';
import {PasswordEvents} from "../../../src/password-generator-app/password-events";
export function PredefinedLength({passwordBuilder, length}) {
    const click = (e) => {
        passwordBuilder.setLength(e.target.innerHTML).build();
    };

    // React.useEffect(() => {
    //     password.getElement().addEventListener(PasswordEvents.UPDATED,()=>setLength(password.getLength()));
    // },[]);

    return (
        <button className="predefined-length pl{length}" onClick={click}>{length}</button>
    );
}
