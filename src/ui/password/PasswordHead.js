'use strict';

import React from 'react';

export function PasswordHead({children}) {
    return (
        <div
            className="head"
            style={{
                justifyContent: "space-between",
                alignItems: "center",
                overflow: "hidden",
                marginBottom: "1em",
            }}
        >
            {children}
        </div>
    );
}
