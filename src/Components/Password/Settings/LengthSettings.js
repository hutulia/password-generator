'use strict';

import React from 'react';
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import CustomLength from "./CustomLength";
import Button from "@mui/material/Button";

export default function LengthSettings({length, setLength}) {
    return (
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
    );
}
