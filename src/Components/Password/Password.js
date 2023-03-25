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
import {PasswordBuilderBySymbolsSets} from "../../../modules/password-builder/PasswordBuilderBySymbolsSets";

export default function Password() {
    const [length, setLength] = useState(4);
    const [namesOfSymbolsSetsToUse, setNamesOfSymbolsSetsToUse] = useState(['lower','upper','numbers','special']);
    const [password, setPassword] = useState('');
    const [useColors, setUseColors] = useState(true);

    const updatePassword = () => {
        setPassword(
            (new PasswordBuilderBySymbolsSets())
                .setLength(length)
                .setSetsToUse(namesOfSymbolsSetsToUse.map(n => window.symbolsSetRegistry.findByName(n)))
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
                    <PasswordText
                        passwordAsText={password}
                        useColors={useColors}
                        setUseColors={setUseColors}
                    />
                    <PasswordHeadActions>
                        <RenewBtn updatePassword={updatePassword}/>
                        <CopyBtn password={password}/>
                    </PasswordHeadActions>
                </PasswordHead>

                <PasswordSettings>
                    <SymbolsSettings
                        namesOfSymbolsSetsToUse={namesOfSymbolsSetsToUse}
                        setNamesOfSymbolsSetsToUse={setNamesOfSymbolsSetsToUse}
                        useColors={useColors}
                        setUseColors={setUseColors}
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
