'use strict';

import React from 'react';
import {Password} from "./password/password";

export function App({passwordBuilder}) {
    return (
        <Password passwordBuilder={passwordBuilder}/>
    );
}
