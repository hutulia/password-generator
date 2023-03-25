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

            <CustomLength length={length} setLength={setLength}/>

            <br />

            <div  style={{display: 'flex', justifyContent: "space-between"}}>
                <Button color='secondary' onClick={()=>{setLength(4)}} style={{flexFrow: 6}}>4</Button>
                <Button color='secondary' onClick={()=>{setLength(8)}} style={{flexFrow: 6}}>8</Button>
                <Button color='secondary' onClick={()=>{setLength(16)}} style={{flexFrow: 1}}>12</Button>
                <Button color='secondary' onClick={()=>{setLength(24)}} style={{flexFrow: 6}}>24</Button>
                <Button color='secondary' onClick={()=>{setLength(64)}} style={{flexFrow: 6}}>64</Button>
            </div>
        </div>
    );
}
