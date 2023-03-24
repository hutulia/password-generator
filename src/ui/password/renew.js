'use strict';

import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import Button from '@mui/material/Button';
import {PasswordContext} from "./password";
import { useContext } from "react";

export function Renew({updatePassword}) {
    return (
        <Button
            onClick={() => updatePassword()}
            size="large"
            startIcon={<RefreshIcon />}
        >
             Оновити
        </Button>
    );
}
