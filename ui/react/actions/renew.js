'use strict';
import CopyTextToClipboardService from "../../../src/copy-text-to-clipboard.service.js";

import React from 'react';
import ReactDOM from 'react-dom';
export function Renew({password}) {
    return (
        <button
            onClick={() => password.renew()}
            className={'btn'}
        >
            🔄
        </button>
    );
}
