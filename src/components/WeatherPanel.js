import React,{useState} from "react";
import Form from './Form';
import Card from "./Card";
import Comentario from "./Comentario";


const WeatherPanel = () => {
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=6eedd18851bc285c24dab7eaccc62e9c&lang=es"
    let cityUrl = "&q="
    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=6eedd18851bc285c24dab7eaccc62e9c&lang=es"

    const [weather,setWeather] = useState([])
    const [forecast,setForecast] = useState([])

    const [loading,setLoading] = useState(false)
    const [show,setShow] = useState(false)

    const[location,setLocation] = useState("") // para que se pueda comunicar con lo que se escribe en el fomrulario

    const getLocation = async(loc) => {
        setLoading(true)
        setLocation(loc)

        //weather

        urlWeather = urlWeather + cityUrl + loc

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response}
            return response.json()
        }).then((weatherData) => {
            console.log(weatherData)
            setWeather(weatherData)
        }).catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)
        })

        urlForecast = urlForecast + cityUrl + loc

        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw {response}
            return response.json()
        }).then((forecastData) => {
            console.log(forecastData)
            setForecast(forecastData)
            setLoading(false)
            setShow(true)
        }).catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)
        })
    }

    return(
        <React.Fragment>
            <Form
                newLocation = {getLocation}
            />

            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}

            />

            {/* <Comentario
                tiempo_actual = {weather.weather[0].description}
                showdata = {show}
            /> */}
            

        </React.Fragment>
    )
}

export default WeatherPanel;
