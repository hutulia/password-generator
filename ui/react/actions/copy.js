'use strict';
import CopyTextToClipboardService from "../../../src/copy-text-to-clipboard.service.js";

import React from 'react';
import ReactDOM from 'react-dom';
export function Copy({password}) {
    const toCopySymbol = '⎘';
    const copiedSymbol = '✅';

    const [currentSymbol, setCurrentSymbol] = React.useState(toCopySymbol);

    const copy = () => {
        setCurrentSymbol(copiedSymbol);
        CopyTextToClipboardService.copy(password.getPassword())
        setTimeout(() => {
            setCurrentSymbol(toCopySymbol);
        },500);
    };

    return (
        <button
            onClick = {copy}
            className= 'btn'
        >
            {currentSymbol}
        </button>
    );
}
