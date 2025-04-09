import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./weatherThunk";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weather: null,
        message: "Enter city name",
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.message = "";
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.weather = action.payload;
                state.message = "";
            })
            .addCase(fetchWeather.rejected, (state) => {
                state.loading = false;
                state.weather = null;
                state.message = "Enter correct city name";
            });
    },
});

export default weatherSlice.reducer;
