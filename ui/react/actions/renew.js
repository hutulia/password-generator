'use strict';

import React from 'react';

export function Renew({passwordBuilder}) {
    return (
        <button
            onClick={() => passwordBuilder.build()}
            className={'btn'}
        >
            🔄
        </button>
    );
}
