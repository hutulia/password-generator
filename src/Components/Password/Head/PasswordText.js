'use strict';

import React from 'react';
import Typography from "@mui/material/Typography";

export default function PasswordText({passwordAsText}) {

    return (
        <>
            <Typography variant="h2" component="span" style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                fontFamily: "monospace",
                fontWeight: "100",
                lineHeight: "1.5em",
                minHeight: "1.5em",
                height: "1.5em",
                display: "inline-block",
            }}>
                {passwordAsText}
            </Typography>
        </>
    );
}
