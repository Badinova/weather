import React, {useState} from 'react';
import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {api_key, base_url} from "../utils/constants.js";

const Data = () => {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [message, setMessage] = useState('Enter city name');

    const getWeather = async (city) => {
        try {
            const res = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await res.json();
            setWeatherInfo({
                            city: data.name,
                            country: data.sys.country,
                            temp: data.main.temp,
                            pressure: data.main.pressure,
                            sunset: data.sys.sunset,
                        });
                        setMessage('');
        }catch (e){
            console.log(e)
            setMessage('Enter correct city name');
        }
    }

    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather weather={weatherInfo} message={message}/>
        </div>
    );
};

export default Data;