'use strict';

import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import Button from '@mui/material/Button';

export default function RenewBtn({updatePassword}) {
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
