'use strict';

import CopyTextToClipboardService from "../../modules/copy-text-to-clipboard.service.js";
import React from 'react';
import Button from '@mui/material/Button';
import {PasswordContext} from "./password";
import { useContext } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
export function Copy() {
    const passwordBuilder = useContext(PasswordContext);
    const toCopySymbol = <ContentCopyIcon />;
    const copiedSymbol = <CheckIcon />;

    const [currentSymbol, setCurrentSymbol] = React.useState(toCopySymbol);

    const copy = () => {
        setCurrentSymbol(copiedSymbol);
        CopyTextToClipboardService.copy(passwordBuilder.getPassword())
        setTimeout(() => {
            setCurrentSymbol(toCopySymbol);
        },750);
    };

    return <Button size="large" onClick={copy} startIcon={currentSymbol}>Скопіювати</Button>;
}
