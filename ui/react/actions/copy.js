'use strict';
import CopyTextToClipboardService from "../../../src/copy-text-to-clipboard.service.js";
import Button from '@mui/material/Button';

import React from 'react';
import ReactDOM from 'react-dom';
export function Copy({passwordBuilder}) {
    const toCopySymbol = '⎘';
    const copiedSymbol = '✅';

    const [currentSymbol, setCurrentSymbol] = React.useState(toCopySymbol);

    const copy = () => {
        setCurrentSymbol(copiedSymbol);
        CopyTextToClipboardService.copy(passwordBuilder.getPassword())
        setTimeout(() => {
            setCurrentSymbol(toCopySymbol);
        },500);
    };

    return (
        <>
            <Button variant="outlined" onClick = {copy}>{currentSymbol}</Button>
        </>
    );
}
