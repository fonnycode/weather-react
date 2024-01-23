import React, { useState } from "react";
import axios from "axios";

import DailyForecast from "./DailyForecast";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ready:false});
 

  function displayWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      coord: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      icon: response.data.weather[0].icon,
    });
  }
 function handleSubmit(event) {
  event.preventDefault();
   search();
 }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "85bbd3d16a2dfe0ecf253c7ae1e8fe03";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="w-75 p-2 me-2 rounded border-1"
            placeholder="Search a city"
            required
            autoFocus="true"
            autoComplete="off"
            onChange={updateCity}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-info p-2 border-0 rounded "
          />
        </form>
        <div className="main">
          <h1 className="cities ms-5 mt-5 text-capitalize"> {weather.city} </h1>
          <h2 className="ms-5">
            <FormattedDate date={weather.date} />
          </h2>
          <span className="text-capitalize fs-3 ms-5">
            {weather.description}
          </span>
        </div>
        <div className="temperature container">
          <div className="row mt-3">
            <div className="col-4 mt-4">
              <WeatherTemperature celsius={weather.temperature} />
            </div>
            <div className="col-4 p-0">
              <WeatherIcon code={weather.icon} size={82} />
            </div>
            <div className="col-4 mt-2">
              <ul>
                <li className="list-unstyled">
                  Humidity: {weather.humidity} %
                </li>
                <li className="list-unstyled">Wind: {weather.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <DailyForecast coord={weather.coord} />
      </div>
    );
 
}else{
  search();
  return "loading...";
  
}
}
