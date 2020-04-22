const getLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            let { timestamp, coords: { latitude, longitude, altitude, accuracy, altitudeAccuracy, heading, speed } } = position;
            resolve({
                coords: {
                    latitude, longitude, altitude, accuracy, altitudeAccuracy, heading, speed
                },
                timestamp
            });
        }, err => {
            reject(err);
        }
    })
}

const INITIAL_STATE = {
    loading: true,
    location: null,
    weather: null,
    updateTime: null
}

const getInitialState = () => {
    let json = JSON.parse(localStorage.getItem('weather-state')) || INITIAL_STATE;
}



/*

### Getting location:

    navigator.geolocation.getCurrentPosition((...args) => console.log('success:', args), (...args) => console.log('error:', args));

You can't stringify the result though... 

*/