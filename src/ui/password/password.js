'use strict';
import * as React from 'react';
//import React from 'react';
import {PasswordAsText} from "./password-as-text";
import {Copy} from "./copy";
import {Renew} from "./renew";
import {SymbolsSetUsage} from "./symbols-set-usage";
import {CustomLength} from "./custom-length";
import {PredefinedLength} from "./predefined-length";
import {createContext, useContext} from "react";

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const PasswordContext = createContext();

export function Password({passwordBuilder}) {
    return (
        <PasswordContext.Provider value={passwordBuilder}>
            <div className="password">
                <PasswordAsText />

                <div className="actions">
                    <Renew />
                    <Copy />
                </div>

                <div className="symbols">
                    <SymbolsSetUsage symbolsSet={symbolsSetRegistry.findByName('lower')} title='abc' />
                    <SymbolsSetUsage symbolsSet={symbolsSetRegistry.findByName('upper')} title='ABC' />
                    <SymbolsSetUsage symbolsSet={symbolsSetRegistry.findByName('numbers')} title='123' />
                    <SymbolsSetUsage symbolsSet={symbolsSetRegistry.findByName('special')} title='!@#' />
                </div>

                <CustomLength />

                <div className="lengths">
                    <PredefinedLength length="4" />
                    <PredefinedLength length="8" />
                    <PredefinedLength length="12" />
                    <PredefinedLength length="16" />
                    <PredefinedLength length="24" />
                    <PredefinedLength length="32" />
                </div>
            </div>
            <OutlinedCard />
        </PasswordContext.Provider>
    );
}


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export function OutlinedCard() {
    const passwordBuilder = useContext(PasswordContext);
    const usedSymbolsSetName = passwordBuilder.setsToUse.map(setOfSymbols => setOfSymbols.name);

    const [formats, setFormats] = React.useState(() => usedSymbolsSetName);

    const handleFormat = (event, formats) => {
        passwordBuilder.setsToUse.map(setOfSymbols => passwordBuilder.doNotUseSymbolsSet(setOfSymbols));
        formats.map(name => passwordBuilder.useSymbolsSet(window.symbolsSetRegistry.findByName(name)));
        passwordBuilder.build();
        setFormats(formats);
    };

    const handleChangeUseSymbolsSet = (e, newValue) => {
        //console.log(e, newValue);
    };

    // const [predefinedLengthUsed, setPredefinedLengthUsed] = React.useState(0);
    // const handlePredefinedLength = () => {};

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h2" component="div">
                    <PasswordAsText />
                </Typography>

                <ToggleButtonGroup
                    value={formats}
                    onChange={handleFormat}
                    aria-label="symbols usage"
                >
                    <ToggleButton value="lower" aria-label="lower" style={{textTransform: "none"}} onChange={handleChangeUseSymbolsSet}>
                        abc
                    </ToggleButton>
                    <ToggleButton value="upper" aria-label="upper" onChange={handleChangeUseSymbolsSet}>
                        ABC
                    </ToggleButton>
                    <ToggleButton value="numbers" aria-label="numbers" onChange={handleChangeUseSymbolsSet}>
                        123
                    </ToggleButton>
                    <ToggleButton value="special" aria-label="special" onChange={handleChangeUseSymbolsSet}>
                        !@#
                    </ToggleButton>
                </ToggleButtonGroup>



            </CardContent>
            <CardActions>
                <Renew />
                <Copy />
            </CardActions>
        </Card>
    );
}