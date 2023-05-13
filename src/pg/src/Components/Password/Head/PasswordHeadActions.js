'use strict';

import React from 'react';

export default function PasswordHeadActions({children}) {
    return (
        <div className="actions" style={{
            display: "flex",
            paddingLeft: "0.25em",
        }}>
            {children}
        </div>
    );
}
