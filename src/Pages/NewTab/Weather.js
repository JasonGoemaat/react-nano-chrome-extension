import React, { useState, useEffect } from 'react';

export default () => {
    let [location, setLocation] = useState({ message: 'finding location...' });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(location => {
            const { coords: { latitude, longitude } } = location;
            setLocation({ message: `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`, ...location });
        }, err => {
            setLocation({ message: 'Error retrieving location' });
        });
    }, []);

    return (
        <div className="card">
            <div className="card-header">
                Weather
            </div>
            <div className="card-body">
                <p className="card-text">Location: {location.message}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
