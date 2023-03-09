'use strict';
import CopyTextToClipboardService from "../../../src/copy-text-to-clipboard.service.js";
import {Copy} from "../../react/actions/copy.js";
import {Renew} from "../../react/actions/renew.js";

import React from 'react';
import ReactDOM from 'react-dom';

export function Actions({password}) {
    return (
        <>
            <Copy password = {password} />
            <Renew password = {password} />
        </>
    );
}
