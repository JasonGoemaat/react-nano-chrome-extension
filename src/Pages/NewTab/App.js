import React from 'react';
import Weather from './Weather';
import './app.scss';

export default () => {
    return (
        <>
        <h1>New Tab</h1>
        <div id="cards">
            <Weather/>
        </div>
        </>
    )
}
