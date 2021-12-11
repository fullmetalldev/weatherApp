import React from 'react';
import axios from "axios";


const GetWeather = ({cityName, setWeather, setCityName}) => {

    const getWeather = () => {
        axios(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fd8670f146ee2233f8f2fc7f40fd0d7c`)
            .then(({data}) => setWeather(data));
    };

    return (
        <>
            <input type="text" className="form__input" placeholder="write city name" onChange={(event)=> setCityName(event.target.value)}/>
            <button type="button" className="form__btn" onClick={()=> getWeather()}>Получить</button>
        </>
    );
};

export default GetWeather;