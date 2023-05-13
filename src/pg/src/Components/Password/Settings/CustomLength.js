'use strict';

import React from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

export default function CustomLength({length, setLength}) {
    const changeLength = (diff) => {
        const oldValue = length;
        let newValue = oldValue+diff;
        if(newValue < 0){
            newValue = 0;
        }
        if(oldValue !== newValue){
            setLength(newValue);
        }
    };

    return (
        <div className={'custom-length'} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'baseline',
        }}>
            <Button
                onClick={() => {changeLength(-5)}}
                size="large"
                color='secondary'
            >
                -5
            </Button>
            <Button
                onClick={() => {changeLength(-1)}}
                size="large"
                color='secondary'
            >
                -1
            </Button>
            <TextField
                id="outlined-number"
                label="Number"
                type="number"
                value={length}
                onChange={(e) => {setLength(e.target.value)}}
                size="small"
                style = {{
                    width: "5em",
                    textAlign: "center",
                    flexGrow: 1,
                }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button
                onClick={() => {changeLength(1)}}
                size="large"
                color='secondary'
            >
                +1
            </Button>
            <Button
                onClick={() => {changeLength(5)}}
                size="large"
                color='secondary'
            >
                +5
            </Button>
        </div>
    );
}
