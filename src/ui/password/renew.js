'use strict';

import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import Button from '@mui/material/Button';
import {PasswordContext} from "./password";
import { useContext } from "react";

export function Renew() {
    const passwordBuilder = useContext(PasswordContext);

    return (
        <Button
            onClick={() => passwordBuilder.build()}
            size="large"
            startIcon={<RefreshIcon />}
        >
             Оновити
        </Button>
    );
}
