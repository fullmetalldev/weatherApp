import React from 'react';

const WeatherCurrentDay = ({weather, temp, setTemp, now}) => {
    return (
        <div className="weather">

            <div className="weather__top">
                <h2>{weather.name}</h2>
                <h2>{weather.sys.country}</h2>
            </div>

            <div className="weather__middle">
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather log"/>
                <h2 className="deg">{Math.trunc(temp === 'C' ? weather.main.temp - 273.15 : (weather.main.temp - 273.15) * 9/5 + 32)}</h2>
                <div className="weather__switch">
                            <span className={`weather__switch_item ${temp === "C" ? "active" : ""}`}
                                  onClick={()=> setTemp('C')}>°C</span>
                    |
                    <span className={`weather__switch_item ${temp === "F" ? "active" : ""}`}
                          onClick={()=> setTemp('F')}>°F</span>
                </div>
                <p>{weather.weather[0].description}</p>
            </div>

            <div className="weather__date">
                <span>{`Время: ${now.getHours()}:${now.getMinutes()}`}</span>
            </div>
        </div>
    );
};

export default WeatherCurrentDay;