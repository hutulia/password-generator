'use strict';

import React from 'react';
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

export default function SymbolsSettings({namesOfSymbolsSetsToUse, setNamesOfSymbolsSetsToUse}) {
    const defineSymbolsSetButtonColor = (symbolsSetName) => {
        return passwordBuilder.uses(window.symbolsSetRegistry.findByName(symbolsSetName)) ? 'success' : '';
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
    );
}
