'use strict';

import {PasswordEvents} from "../../modules/password-builder/password-events";
import React from 'react';
import {PasswordContext} from "./password";
import { useContext } from "react";
import TextField from '@mui/material/TextField';
import RefreshIcon from "@mui/icons-material/Refresh";
import Button from "@mui/material/Button";

export function CustomLength() {
    const passwordBuilder = useContext(PasswordContext);
    const [length, setLength] = React.useState(passwordBuilder.getLength());

    const change = (e) => {
        passwordBuilder.setLength(e.target.value).build();
    };

    const diff = (howMush) => {
        console.log(howMush);
        passwordBuilder.setLength(passwordBuilder.getLength()+howMush).build();
    };


    React.useEffect(() => {
        passwordBuilder.getEvents().on(PasswordEvents.LENGTH_UPDATED,()=>setLength(passwordBuilder.getLength()));
    },[]);

    return (
        <div className={'custom-length'} style={{
            display: "flex",
        }}>
            <Button
                onClick={() => {diff(-5)}}
                size="large"
            >
                -5
            </Button>
            <Button
                onClick={() => {diff(-1)}}
                size="large"
            >
                -1
            </Button>
            <TextField
                id="outlined-number"
                label="Number"
                type="number"
                value={length}
                onChange={change}
                size="small"
                style = {{
                    width: "5em",
                    textAlign: "center",
                }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button
                onClick={() => {diff(1)}}
                size="large"
            >
                +1
            </Button>
            <Button
                onClick={() => {diff(5)}}
                size="large"
            >
                +5
            </Button>
        </div>
    );
}
