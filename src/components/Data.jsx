import React from 'react';
import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchWeather} from "../add/weatherThunk.js";

const Data = () => {
    const dispatch = useDispatch();
    const {weather, message} = useSelector(state => state.weather);

    const getWeather = async (city) => {
        dispatch(fetchWeather(city));
    }

    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather weather={weather} message={message}/>
        </div>
    );
};

export default Data;