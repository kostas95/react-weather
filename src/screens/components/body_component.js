import React, {Fragment} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function BodyComponent({city, data}) {
    console.log(data);
    console.log(data.temperature);
    console.log(data.condition);
    return (
        <Fragment>
            <h1>{capitalizeFirstLetter(city)}</h1>
            <div className="grid">
                <span>{temperatureDisplay(data.temperature)}</span>
                <span>{getWeatherIcon(data.condition)}</span>
            </div>
        </Fragment>
    );
}

function getWeatherIcon(condition) {
    switch (condition) {
        case "Sunny":
            return (
                <i className="fa-solid fa-sun icon sunny"></i>
            );
        case "Cloudy":
            return (
                <i className="fa-solid fa-cloud-sun icon cloudy"></i>
            );
        case "Rainy":
            return (
                <i className="fa-solid fa-cloud-rain icon rainy"></i>
            );
        case "Windy":
            return (
                <i className="fa-solid fa-wind icon windy"></i>
            );
        default:
            return null;
    }
}

function temperatureDisplay(temperature) {
    // Extract numeric part and unit
    const [value, unit] = temperature.match(/(\d+)([°C|°F])/).slice(1);

    return (
        <div className="temperature-container">
            <div className="temperature-value">{value}</div>
            <div className="temperature-unit">{unit}</div>
        </div>
    );
}

function capitalizeFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str; // Return the original string if it's not a valid string or is empty
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default BodyComponent;