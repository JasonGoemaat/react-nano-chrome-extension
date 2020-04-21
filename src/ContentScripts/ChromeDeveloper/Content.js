import React from 'react';

export default ({ visible }) => {
    console.log('Content: visible?', visible);
    return (
        <div className={visible ? 'cs-visible cs-content' : 'cs-content'}>
            <h1 className="heading">Hello, world!</h1>
        </div>
    );
}