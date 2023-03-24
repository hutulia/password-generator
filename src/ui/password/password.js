'use strict';
import * as React from 'react';
import {PasswordAsText} from "./password-as-text";
import {Copy} from "./copy";
import {Renew} from "./renew";
import {CustomLength} from "./custom-length";
import {createContext, useContext} from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import {useState} from "react";
import {useEffect} from "react";
import {PasswordEvents} from "../../modules/password-builder/password-events";
import {PasswordHead} from "./PasswordHead";
import {PasswordHeadActions} from "./PasswordHeadActions";

export const PasswordContext = createContext();

export function Password({passwordBuilder}) {
    const [password, setPassword] = useState(passwordBuilder.getPassword());
    const [length, setLength] = useState(passwordBuilder.getLength());

    const buildPassword = () => {
        passwordBuilder.setLength(length);

        setPassword(passwordBuilder.build().getPassword());
    };

    useEffect(() => {
        buildPassword();
    },[length]);

    useEffect(() => {
        passwordBuilder.getEvents().on(PasswordEvents.UPDATED,()=>setPassword(passwordBuilder.getPassword()));
    },[]);

    const usedSymbolsSetName = passwordBuilder.setsToUse.map(setOfSymbols => setOfSymbols.name);
    const [symbolSetsNamesToUse, setSymbolSetsNamesToUse] = useState(() => usedSymbolsSetName);

    const handleSymbolSetsToUse = (event, symbolSetsNamesToUse) => {
        passwordBuilder.setsToUse = [];
        symbolSetsNamesToUse.map(name => passwordBuilder.useSymbolsSet(window.symbolsSetRegistry.findByName(name)));
        passwordBuilder.build();
        setSymbolSetsNamesToUse(symbolSetsNamesToUse);
    };

    const defineSymbolsSetButtonColor = (symbolsSetName) => {
        return passwordBuilder.uses(window.symbolsSetRegistry.findByName(symbolsSetName)) ? 'success' : '';
    };

    return (
        <PasswordContext.Provider value={passwordBuilder}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <PasswordHead>
                        <PasswordAsText passwordAsText={password}/>
                        <PasswordHeadActions>
                            <Renew />
                            <Copy />
                        </PasswordHeadActions>
                    </PasswordHead>

                    <div className={'settings'}>
                        <div className={'settings-symbols'} style={{
                            flexGrow: "1",
                            marginBottom: "1em",
                        }}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Символи
                            </Typography>

                            <ToggleButtonGroup
                                value={symbolSetsNamesToUse}
                                onChange={handleSymbolSetsToUse}
                                aria-label="symbols usage"
                            >
                                <ToggleButton value="lower" aria-label="lower" style={{textTransform: "none"}} color={defineSymbolsSetButtonColor('lower')}>
                                    abc
                                </ToggleButton>

                                <ToggleButton value="upper" aria-label="upper" color={defineSymbolsSetButtonColor('upper')}>
                                    ABC
                                </ToggleButton>

                                <ToggleButton value="numbers" aria-label="numbers" color={defineSymbolsSetButtonColor('numbers')}>
                                    123
                                </ToggleButton>

                                <ToggleButton value="special" aria-label="special" color={defineSymbolsSetButtonColor('special')}>
                                    !@#
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                        <div className={'length-settings'}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Довжина
                            </Typography>

                            <div><CustomLength length={length} setLength={setLength}/></div>

                            <br />

                            <Button color='secondary' variant="outlined" onClick={()=>{setLength(4)}}>4</Button>
                            <Button color='secondary' variant="outlined" onClick={()=>{setLength(8)}}>8</Button>
                            <Button color='secondary' variant="outlined" onClick={()=>{setLength(12)}}>12</Button>
                            <Button color='secondary' variant="outlined" onClick={()=>{setLength(24)}}>24</Button>
                            <Button color='secondary' variant="outlined" onClick={()=>{setLength(32)}}>32</Button>
                            <Button color='secondary' variant="outlined" onClick={()=>{setLength(64)}}>64</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </PasswordContext.Provider>
    );
}
