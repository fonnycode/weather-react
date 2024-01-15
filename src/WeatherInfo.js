import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import "bootstrap/dist/css/bootstrap.css";

export default function WeatherInfo(props) {
  const [city, setCity] = useState("Montreal");
  const [weather, setWeather] = useState({});
  const [content, setContent] = useState(false);

  function displayWeather(response) {
    setContent("true");
    setWeather({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    let apiKey = "ebef9ca4a8de66ed586fac628fade056";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event){
      event.preventDefault();
      search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="w-75 p-2 me-2 rounded border-1"
        placeholder="Search a city"
        onChange={updateCity}
      />
      <input type="submit" value="Search" className="p-2 border-0 rounded " />
    </form>
  );

  let heading = (
    <div className="main">
      <h1 className="cities ms-5 mt-5 text-capitalize"> {city} </h1>
        <h2 className="ms-5">
          <FormattedDate date={weather.date} />
        </h2>
    </div>
  );

  let element = (
    <div className="temperature container">
      <div className="row mt-5">
        <div className="col-4 mt-3">
          <strong className="degrees">{weather.temperature}°</strong>
          <span className="units">
            <a href="/">C</a> | <a href="/">F</a>
          </span>
        </div>
        <div className="col-4 mt-2 text-capitalize">
          <strong>{weather.description}</strong>
          <img src={weather.icon} alt={weather.description} width="120px" />
        </div>
        <div className="col-4 mt-2">
          <ul>
            <li className="list-unstyled">Humidity: {weather.humidity} %</li>
            <li className="list-unstyled">Wind: {weather.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );

  if (content) {
    return (
      <div>
        {form}
        {heading}
        {element}
      </div>
    );
}else{
  search("Montreal");
  return "loading";
}
}
