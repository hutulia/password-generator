'use strict';

import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Switch from '@mui/material/Switch';
import {Checkbox, FormControlLabel} from "@mui/material";

export default function SymbolsSettings({namesOfSymbolsSetsToUse, setNamesOfSymbolsSetsToUse, useColors, setUseColors}) {
    const calcColor = (symbolsSetName) => {
        if(!useColors){
            return '';
        }

        if(!namesOfSymbolsSetsToUse.includes(symbolsSetName)){
            return '';
        }

        if(symbolsSetName == 'lower'){
            return 'success';
        }

        if(symbolsSetName == 'upper'){
            return 'info';
        }

        if(symbolsSetName == 'numbers'){
            return 'warning';
        }

        if(symbolsSetName == 'special'){
            return 'error';
        }
    };

    const lowerUsed = namesOfSymbolsSetsToUse.includes('lower');
    const upperUsed = namesOfSymbolsSetsToUse.includes('upper');
    const numbersUsed = namesOfSymbolsSetsToUse.includes('numbers');
    const specialUsed = namesOfSymbolsSetsToUse.includes('special');

    const lowerColor = useColors && lowerUsed ? "success.main" : 'black';
    const upperColor = useColors && upperUsed ? "info.main" : 'black';
    const numbersColor = useColors && numbersUsed ? "warning.main" : 'black';
    const specialColor = useColors && specialUsed ? "error.main" : 'black';

    const lowerSwitchColor = useColors && lowerUsed ? "success" : 'primary';
    const upperSwitchColor = useColors && upperUsed ? "info" : 'primary';
    const numbersSwitchColor = useColors && numbersUsed ? "warning" : 'primary';
    const specialSwitchColor = useColors && specialUsed ? "error" : 'primary';

    const handleChange = (setName, isActive) => {
        const newSetNames = [];
        for (const n of namesOfSymbolsSetsToUse) {
            if(n !== setName || isActive){
                newSetNames.push(n);
            }
        }
        if(!newSetNames.includes(setName) && isActive){
            newSetNames.push(setName);
        }
        setNamesOfSymbolsSetsToUse(newSetNames);
    };

    const handleChangeLower = (e) => {handleChange('lower',e.target.checked)};
    const handleChangeUpper = (e) => {handleChange('upper',e.target.checked)};
    const handleChangeNumbers = (e) => {handleChange('numbers',e.target.checked)};
    const handleChangeSpecial = (e) => {handleChange('special',e.target.checked)};

    return (
        <div className={'settings-symbols'} style={{
            flexGrow: "1",
            marginBottom: "1em",
        }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Символи
            </Typography>

            <div style={{
                display: "flex",
                justifyContent: "space-between",
            }}>
                <FormControlLabel
                    control={<Switch checked={lowerUsed} color={lowerSwitchColor} onChange={handleChangeLower}/>}
                    label={<Typography component="span" color={lowerColor}>ab</Typography>}
                />

                <FormControlLabel
                    control={<Switch checked={upperUsed} color={upperSwitchColor} onChange={handleChangeUpper}/>}
                    label={<Typography component="span" color={upperColor}>AB</Typography>}
                />


                <FormControlLabel
                    control={<Switch checked={numbersUsed} color={numbersSwitchColor} onChange={handleChangeNumbers}/>}
                    label={<Typography component="span" color={numbersColor}>12</Typography>}
                />

                <FormControlLabel
                    control={<Switch checked={specialUsed} color={specialSwitchColor} onChange={handleChangeSpecial}/>}
                    label={<Typography component="span" color={specialColor}>!@</Typography>}
                />
            </div>

            <br />

            <FormControlLabel
                control={<Checkbox checked={useColors} onChange={(e) => {setUseColors(e.target.checked)}}/>}
                label="Кольори"
            />
        </div>
    );
}
