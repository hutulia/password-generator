'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

export function LikeButton() {
    const [liked, setLiked] = React.useState(false);

    if (liked) {
        return 'You liked this!';
    }

    return React.createElement(
        'button',
        {
            onClick: () => setLiked(true),
        },
        'Like'
    );
}
