'use strict';

import React, {useRef} from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Password from "./Components/Password/Password";

import {lowerLetters, numbers, specialSymbols, upperLetters} from "../modules/symbols-set/symbols-lists.js";
import {SymbolsSetService} from "../modules/symbols-set/symbols-set.service.js";
import {SymbolsSetRegistry} from "../modules/symbols-set/symbols-set-registry.js";
import {PasswordBuilderBySymbolsSets} from "src/pg/modules/password-builder/PasswordBuilderBySymbolsSets";

export default function App() {
    const symbolsSetRegistry = useRef(new SymbolsSetRegistry());
    symbolsSetRegistry.current.register(
        new SymbolsSetService('lower', lowerLetters),
        new SymbolsSetService('upper', upperLetters),
        new SymbolsSetService('numbers', numbers),
        new SymbolsSetService('special', specialSymbols),
    );

    return (<>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <h1 style={{
                        fontSize: "inherit"
                    }}>Генератор паролів</h1>
                </Typography>
            </Toolbar>
        </AppBar>

        <br />
        <br />

        <div className={'items'} style={{
            margin: "auto",
            maxWidth: "720px",
        }}>
            <Password symbolsSetRegistry={symbolsSetRegistry.current}/>
        </div>

    </>);
}
