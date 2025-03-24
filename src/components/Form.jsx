import React from 'react';


const Form = ({getWeather}) => {

    const handelGetWeather = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        getWeather(city);

    }

    return (
        <form onSubmit={handelGetWeather}>
            <input type={'text'} name={'city'}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;