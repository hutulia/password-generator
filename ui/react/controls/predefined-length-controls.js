'use strict';
import CopyTextToClipboardService from "../../../src/copy-text-to-clipboard.service.js";
import {PredefinedLength} from "./predefined-length";

import React from 'react';
import ReactDOM from 'react-dom';
import {PasswordEvents} from "../../../src/password-generator-app/password-events";
export function PredefinedLengthControls({password, length}) {
    return (
        <>
            <PredefinedLength password={password} length="4" />
            <PredefinedLength password={password} length="8" />
            <PredefinedLength password={password} length="12" />
            <PredefinedLength password={password} length="16" />
            <PredefinedLength password={password} length="24" />
            <PredefinedLength password={password} length="32" />
        </>
    );
}
