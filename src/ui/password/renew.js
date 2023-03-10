'use strict';

import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import Button from '@mui/material/Button';

export function Renew({passwordBuilder}) {
    return (
        <Button
            onClick={() => passwordBuilder.build()}
            variant="outlined"
        >
            <RefreshIcon />
        </Button>

    );
}
