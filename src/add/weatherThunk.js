import { createAsyncThunk } from "@reduxjs/toolkit";
import { api_key, base_url } from "../utils/constants";

export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async (city, thunkAPI) => {
        try {
            const res = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await res.json();

            return {
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset,
            };
        } catch (err) {
            return thunkAPI.rejectWithValue("Error fetching weather");
        }
    }
);
