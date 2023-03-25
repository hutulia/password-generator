'use strict';

import React from 'react';
import Typography from "@mui/material/Typography";

export default function PasswordText({passwordAsText, useColors, setUseColors}) {
    return (
        <>
            <Typography color="success" variant="h2" component="span" style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                fontWeight: "100",
                lineHeight: "1.5em",
                minHeight: "1.5em",
                height: "1.5em",
                display: "inline-block",
            }}>
                {passwordAsText.split('').map((symbol, i) => {
                    const set = window.symbolsSetRegistry.findSetBySymbol(symbol);

                    if(!useColors || !set || !set.name){
                        return <span>{symbol}</span>;
                    }

                    let color = '';

                    if(set.name === 'lower'){
                        color = 'success.main';
                    }

                    if(set.name === 'upper'){
                        color = 'info.main';
                    }

                    if(set.name === 'numbers'){
                        color = 'warning.main';
                    }

                    if(set.name === 'special'){
                        color = 'error.main';
                    }

                    if(!color.length){
                        return <span>{symbol}</span>;
                    }

                    return <Typography key={i} variant="h2" component="span" color={color}>{symbol}</Typography>
                })}
            </Typography>
        </>
    );
}
