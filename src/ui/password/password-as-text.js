'use strict';

import {PasswordEvents} from "../../modules/password-builder/password-events.js";

import React from 'react';
import {PasswordContext} from "./password";
import { useContext } from "react";
import Typography from "@mui/material/Typography";

export function PasswordAsText() {
    const passwordBuilder = useContext(PasswordContext);
    const [passwordAsText, setPasswordAsText] = React.useState(passwordBuilder.getPassword());

    React.useEffect(() => {
        passwordBuilder.getEvents().on(PasswordEvents.UPDATED,()=>setPasswordAsText(passwordBuilder.getPassword()));
    },[]);

    return (
        <>
            <Typography variant="h2" component="span" style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                fontFamily: "monospace",
                fontWeight: "100",
                lineHeight: "1.5em",
                minHeight: "1.5em",
            }}>
                {passwordAsText}
            </Typography>
        </>
    );
}
