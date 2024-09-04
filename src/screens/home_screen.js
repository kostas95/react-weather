import React, {Fragment} from 'react';
import HeaderComponent from "./components/header_component";
import BodyComponent from "./components/body_component";

const weatherData = {
    athens: {temperature: '25°C', condition: 'Sunny'},
    paris: {temperature: '18°C', condition: 'Cloudy'},
    stockholm: {temperature: '15°C', condition: 'Rainy'},
    copenhagen: {temperature: '17°C', condition: 'Windy'},
};

function HomeScreen(props) {
    const [city, setCity] = React.useState("athens");
    return (
        <Fragment>
            <HeaderComponent onCityChanged={(e) => setCity(e)}>
            </HeaderComponent>
            <BodyComponent city={city} data={weatherData[city]}></BodyComponent>
        </Fragment>
    );
}

export default HomeScreen;