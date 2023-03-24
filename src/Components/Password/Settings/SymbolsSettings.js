'use strict';

import React from 'react';
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

export default function SymbolsSettings({namesOfSymbolsSetsToUse, setNamesOfSymbolsSetsToUse}) {
    const calcColor = (symbolsSetName) => {
        return namesOfSymbolsSetsToUse.includes(symbolsSetName) ? 'success' : '';
    };

    return (
        <div className={'settings-symbols'} style={{
            flexGrow: "1",
            marginBottom: "1em",
        }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Символи
            </Typography>

            <ToggleButtonGroup
                value={namesOfSymbolsSetsToUse}
                onChange={(event, symbolSetsNamesToUse) => setNamesOfSymbolsSetsToUse(symbolSetsNamesToUse)}
                aria-label="symbols usage"
            >
                <ToggleButton value="lower" aria-label="lower" style={{textTransform: "none"}} color={calcColor('lower')}>
                    abc
                </ToggleButton>

                <ToggleButton value="upper" aria-label="upper" color={calcColor('upper')}>
                    ABC
                </ToggleButton>

                <ToggleButton value="numbers" aria-label="numbers" color={calcColor('numbers')}>
                    123
                </ToggleButton>

                <ToggleButton value="special" aria-label="special" color={calcColor('special')}>
                    !@#
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}
