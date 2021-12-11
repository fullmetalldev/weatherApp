import React, {useState} from 'react';
import axios from "axios";
import "./style.css";
import GetWeather from "./components/GetWeather/GetWeather";
import WeatherCurrentDay from "./components/WeatherCurrentDay/WeatherCurrentDay";
import WeatherFiveDay from "./components/FiveDays/WeatherFiveDay";
import Vanta from "./components/vanta/vanta";

function App() {


    const [weather, setWeather] = useState({});
    const [cityName, setCityName] = useState('');
    const [temp, setTemp] = useState('C');
    const [weatherFive, setWeatherFive] = useState({});
    const [day, setDay] = useState('one');
    const [date, setDate] = useState('');

    let now = new Date();

    const getWeatherFive = () => {
        axios('https://api.openweathermap.org/data/2.5/forecast?q=bishkek&appid=c3ca235f299a5ac03a9b15b27ae3fee0')
            .then(({data}) => {
                setWeatherFive(data);

            });
        setDay('five');


    };


    return (

        <div className="App" id="App">

            <Vanta/>

            {day === 'one' ? <div className="form">
                    <h1 className="form__title">Прогноз погоды</h1>
                    <GetWeather cityName={cityName} setWeather={setWeather} setCityName={setCityName}/>

                    {JSON.stringify(weather) === '{}'
                        ? ''
                        : <> <WeatherCurrentDay weather={weather} setTemp={setTemp} temp={temp} now={now}/>
                            <div className="row-fiveDay">
                                <button className="fiveDay" type="button" onClick={getWeatherFive}>Получить погоду 5 дней
                                </button>
                            </div>

                        </>
                    }
                </div>
                : <WeatherFiveDay setDay={setDay} weather={weather} setTemp={setTemp} temp={temp} now={now}
                                  weatherFive={weatherFive} setDate={setDate} date={date}/>}

        </div>
    );
}


export default App;
