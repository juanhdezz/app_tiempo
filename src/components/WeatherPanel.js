import React, { useState } from "react";
import Form from './Form';
import Card from "./Card";

const WeatherPanel = ({ onCoordinatesChange }) => {
    const urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=6eedd18851bc285c24dab7eaccc62e9c&lang=es";
    const cityUrl = "&q=";
    const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=6eedd18851bc285c24dab7eaccc62e9c&lang=es";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        const weatherUrl = urlWeather + cityUrl + loc;

        try {
            const weatherResponse = await fetch(weatherUrl);
            if (!weatherResponse.ok) throw new Error("Weather data fetch failed");

            const weatherData = await weatherResponse.json();
            setWeather(weatherData);

            const forecastUrl = urlForecast + cityUrl + loc;
            const forecastResponse = await fetch(forecastUrl);
            if (!forecastResponse.ok) throw new Error("Forecast data fetch failed");

            const forecastData = await forecastResponse.json();
            setForecast(forecastData);
            setLoading(false);
            setShow(true);

            // Pasar las coordenadas actualizadas a App.js
            if (weatherData.coord) {
                const { lat, lon } = weatherData.coord;
                onCoordinatesChange(lat, lon);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
            setShow(false);
        }
    };

    return (
        <React.Fragment>
            <Form newLocation={getLocation} />
            <Card showData={show} loadingData={loading} weather={weather} forecast={forecast} />
        </React.Fragment>
    );
};

export default WeatherPanel;
