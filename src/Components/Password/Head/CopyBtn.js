'use strict';

import CopyTextToClipboard from "../../../../modules/copy-text-to-clipboard.js";
import React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';;
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

export default function CopyBtn({password}) {
    const toCopySymbol = <ContentCopyIcon />;
    const copiedSymbol = <CheckIcon />;

    const [currentSymbol, setCurrentSymbol] = useState(toCopySymbol);

    const copy = () => {
        setCurrentSymbol(copiedSymbol);
        CopyTextToClipboard.copy(password)
        setTimeout(() => {
            setCurrentSymbol(toCopySymbol);
        },750);
    };

    return <Button size="large" onClick={copy} startIcon={currentSymbol}>Скопіювати</Button>;
}
