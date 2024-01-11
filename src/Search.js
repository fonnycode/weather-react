import React, { useState } from "react";
import axios from "axios";


export default function Search() {
    let [message, setMessage] = useState(false);
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({}); 
 
  function displayWeather(response){
    setMessage(true);
    setWeather({
        temperature: Math.round(response.data.main.temp),
        description: response.data.weather[0].description,
        wind: Math.round (response.data.wind.speed),
        humidity: Math.round(response.data.main.humidity),

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
        <input type="search" placeholder="Search a city" onChange={updateCity} />
        <input type="submit" value="Search" />
    </form>
);
if (message){
    return (
      <div>
        {form}
        <h1>{city}</h1>
        <h2>{weather.temperature} °C</h2>
       
      </div>
    );
}else{
    return form;
}
}