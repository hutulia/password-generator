'use strict';

import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Password from "./Components/Password/Password";

export function App({passwordBuilder}) {
    return (<>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <h1 style={{
                        fontSize: "inherit"
                    }}>Генератор паролів</h1>
                </Typography>
            </Toolbar>
        </AppBar>

        <br />
        <br />

        <div className={'items'} style={{
            margin: "auto",
        }}>
            <Password passwordBuilder={passwordBuilder}/>
        </div>

    </>);
}
