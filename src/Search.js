import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
   let [content, setContent] = useState(""); 
 
  function displayWeather(response){
    setContent("true");
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

function handleSubmit(event){
    event.preventDefault();
    let apiKey = "ebef9ca4a8de66ed586fac628fade056";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
}

function updateCity(event){
    setCity(event.target.value);
}
let form =(
    <form onSubmit={handleSubmit}>
        <input type="search" className="w-75 p-2 me-2 rounded border-1" placeholder="Search a city" onChange={updateCity} />
        <input type="submit" value="Search" className="p-2 border-0 rounded " />
    </form>
);

let heading = (
  <div className="main">
    <h1 className="cities ms-5 mt-5 text-capitalize"> {city} </h1>
    <small className="ms-5">Last updated: Thursday 20:00</small>
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


  


if (content){
    return (
      <div>
        {form}
        {heading}
       {element}
      </div>
    );
}else{
    return (
      <div>
        {form}
        <strong className="text-center">
          This is your daily forecast, find a city.
        </strong>
      </div>
    );
}
}