'use strict';
import * as React from 'react';
import {useState} from "react";
import {useEffect} from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import PasswordHead from "./Head/PasswordHead";
import PasswordText from "./Head/PasswordText";
import PasswordHeadActions from "./Head/PasswordHeadActions";
import CopyBtn from "./Head/CopyBtn";
import RenewBtn from "./Head/RenewBtn";
import PasswordSettings from "./Settings/PasswordSettings";
import SymbolsSettings from "./Settings/SymbolsSettings";
import LengthSettings from "./Settings/LengthSettings";

export default function Password({passwordBuilder}) {
    const [length, setLength] = useState(passwordBuilder.getLength());
    const [namesOfSymbolsSetsToUse, setNamesOfSymbolsSetsToUse] = useState(passwordBuilder.setsToUse.map(s => s.name));
    const [password, setPassword] = useState(passwordBuilder.getPassword());

    const updatePassword = () => {
        setPassword(
            passwordBuilder
                .setLength(length)
                .setsToUse(namesOfSymbolsSetsToUse.map(n => window.symbolsSetRegistry.findByName(n)))
                .build()
                .getPassword()
        );
    };

    useEffect(() => {
        updatePassword();
    },[length, namesOfSymbolsSetsToUse]);

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <PasswordHead>
                    <PasswordText passwordAsText={password}/>
                    <PasswordHeadActions>
                        <RenewBtn updatePassword={updatePassword}/>
                        <CopyBtn password={password}/>
                    </PasswordHeadActions>
                </PasswordHead>

                <PasswordSettings>
                    <SymbolsSettings
                        namesOfSymbolsSetsToUse={namesOfSymbolsSetsToUse}
                        setNamesOfSymbolsSetsToUse={setNamesOfSymbolsSetsToUse}
                    />

                    <LengthSettings
                        length={length}
                        setLength={setLength}
                    />
                </PasswordSettings>
            </CardContent>
        </Card>
    );
}
