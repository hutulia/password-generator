'use strict';
import CopyTextToClipboardService from "../../../src/copy-text-to-clipboard.service.js";
import {Copy} from "../../password/actions/copy.js";
import {Renew} from "../../password/actions/renew.js";

import React from 'react';
import ReactDOM from 'react-dom';
export function Actions({password}) {
    return React.createElement(
        'p',
        {
            className: 'actions',
        },

        [new Copy({password: password})]
        //new Copy({password: password})
    );
}
