'use strict';

import React from 'react';

export function HeadActions({children}) {
    return (
        <div className="actions" style={{
            display: "flex",
            paddingLeft: "0.25em",
        }}>
            {children}
        </div>
    );
}
