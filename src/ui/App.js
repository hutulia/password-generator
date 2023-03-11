'use strict';

import React from 'react';
import {Password} from "./password/password";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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
