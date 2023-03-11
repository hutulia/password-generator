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
import {PasswordEvents} from "../../modules/password-builder/password-events";

export const PasswordContext = createContext();

export function Password({passwordBuilder}) {
    const usedSymbolsSetName = passwordBuilder.setsToUse.map(setOfSymbols => setOfSymbols.name);
    const [formats, setFormats] = React.useState(() => usedSymbolsSetName);

    const handleFormat = (event, formats) => {
        passwordBuilder.setsToUse.map(setOfSymbols => passwordBuilder.doNotUseSymbolsSet(setOfSymbols));
        formats.map(name => passwordBuilder.useSymbolsSet(window.symbolsSetRegistry.findByName(name)));
        passwordBuilder.build();
        setFormats(formats);
    };

    const [predefinedLengthUsed, setPredefinedLengthUsed] = React.useState(passwordBuilder.getLength());
    const handlePredefinedLength = (e, newValue) => {
        if(newValue){
            passwordBuilder.setLength(newValue).build();
            setPredefinedLengthUsed(newValue);
        }else{
            setPredefinedLengthUsed(predefinedLengthUsed);
        }
    };

    React.useEffect(() => {passwordBuilder.getEvents().on(PasswordEvents.LENGTH_UPDATED,()=>setPredefinedLengthUsed(passwordBuilder.getLength()))},[]);

    return (
        <PasswordContext.Provider value={passwordBuilder}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <div className="head" style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        overflow: "hidden",
                    }}>
                        <PasswordAsText />
                        <div className="actions">
                            <Renew />
                            <Copy />
                        </div>
                    </div>


                    <div>

                    <ToggleButtonGroup
                        value={formats}
                        onChange={handleFormat}
                        aria-label="symbols usage"
                    >
                        <ToggleButton value="lower" aria-label="lower" style={{textTransform: "none"}} >
                            abc
                        </ToggleButton>
                        <ToggleButton value="upper" aria-label="upper" >
                            ABC
                        </ToggleButton>
                        <ToggleButton value="numbers" aria-label="numbers" >
                            123
                        </ToggleButton>
                        <ToggleButton value="special" aria-label="special" >
                            !@#
                        </ToggleButton>
                    </ToggleButtonGroup>

                    <ToggleButtonGroup
                        value={predefinedLengthUsed}
                        onChange={handlePredefinedLength}
                        exclusive={true}
                        aria-label="predefined-length"
                    >
                        <ToggleButton value={4} aria-label={4}>4</ToggleButton>
                        <ToggleButton value={8} aria-label={8}>8</ToggleButton>
                        <ToggleButton value={16} aria-label={16}>16</ToggleButton>
                        <ToggleButton value={32} aria-label={32}>32</ToggleButton>
                    </ToggleButtonGroup>

                    <CustomLength />
                    </div>

                </CardContent>

                <CardActions>

                </CardActions>
            </Card>

        </PasswordContext.Provider>
    );
}




export function OutlinedCard() {
    const passwordBuilder = useContext(PasswordContext);






    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>




                <br />
                <br />


            </CardContent>

        </Card>
    );
}