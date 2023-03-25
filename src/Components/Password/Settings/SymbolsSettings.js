'use strict';

import React from 'react';
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Switch from '@mui/material/Switch';
import {FormControlLabel} from "@mui/material";

export default function SymbolsSettings({namesOfSymbolsSetsToUse, setNamesOfSymbolsSetsToUse}) {
    const calcColor = (symbolsSetName) => {
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

    const lowerColor = lowerUsed ? "success.main" : 'black';
    const upperColor = upperUsed ? "info.main" : 'black';
    const numbersColor = numbersUsed ? "warning.main" : 'black';
    const specialColor = specialUsed ? "error.main" : 'black';

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

            <FormControlLabel
                control={<Switch checked={lowerUsed} color={"success"} onChange={handleChangeLower}/>}
                label={<Typography component="span" color={lowerColor}>ab</Typography>}
            />

            <FormControlLabel
                control={<Switch checked={upperUsed} color={"info"} onChange={handleChangeUpper}/>}
                label={<Typography component="span" color={upperColor}>AB</Typography>}
            />


            <FormControlLabel
                control={<Switch checked={numbersUsed} color={"warning"} onChange={handleChangeNumbers}/>}
                label={<Typography component="span" color={numbersColor}>12</Typography>}
            />

            <FormControlLabel
                control={<Switch checked={specialUsed} color={"error"} onChange={handleChangeSpecial}/>}
                label={<Typography component="span" color={specialColor}>!@</Typography>}
            />
        </div>
    );
}
