import React, {useState} from 'react';
import "./fivedays.css";


const WeatherFiveDay = ({setDay, weather, setTemp, temp, now, weatherFive, date, setDate}) => {

return (


    <div className="screen">

        <div className="container">

            <div className="home">

                <div className="weather__top">
                    <h2>{weather.name}</h2>
                    <h2>{weather.sys.country}</h2>
                </div>

                <div className="weather__middle">
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                         alt="weather log"/>
                    <h2 className="deg">{Math.trunc(temp === 'C' ? weather.main.temp - 273.15 : (weather.main.temp - 273.15) * 9 / 5 + 32)}</h2>
                    <div className="weather__switch">
                            <span className={`weather__switch_item ${temp === "C" ? "active" : ""}`}
                                  onClick={() => setTemp('C')}>°C</span>
                        |
                        <span className={`weather__switch_item ${temp === "F" ? "active" : ""}`}
                              onClick={() => setTemp('F')}>°F</span>
                    </div>
                    <p>{weather.weather[0].description}</p>
                </div>

                <div className="weather__date">
                    <span>{`Время: ${now.getHours()}:${now.getMinutes()}`}</span>
                </div>

            </div>

            <button type="button" className="back_btn" onClick={() => setDay('one')}>Back</button>

            <div className="buttons">


                {
                    JSON.stringify(weatherFive) === '{}'
                        ? ''
                        : weatherFive.list.map((item) => item.dt_txt.slice(0, 10)).filter((item, idx, array) => array.indexOf(item) === idx).map((item) => {
                            return (
                                <button key={item} type="button" className="button" onClick={() => setDate(item)}>
                                    {item}
                                </button>
                            )
                        })}
            </div>

            <div className="row-cards">

                {JSON.stringify(weatherFive) !== "{}"
                    ? weatherFive.list.filter(item => item.dt_txt.includes(date)).map((item) => {
                        return (
                            <ul className="cards">
                                <li>{item.dt_txt.slice(10)}</li>
                                <li>{<img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="weather log"/>}</li>
                                <li>T: {temp === "C"
                                    ? Math.trunc(item.main.temp - 273.15) + "°C"
                                    : Math.trunc((item.main.temp - 273.15) * 9 / 5 + 32) + "°F"
                                }
                                </li>
                                <li>{item.weather[0].description}</li>
                            </ul>

                        )
                    })
                    : ''
                }

            </div>

        </div>


    </div>
);
}
;

export default WeatherFiveDay;