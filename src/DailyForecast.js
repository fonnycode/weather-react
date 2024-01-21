import React, { useState } from "react";

import "./DailyForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function DailyForecast(props) {
let [loaded, setLoaded] = useState(false);
let [predict, setPredict] = useState(null);


function handleResponse(response){
  setPredict(response.data.daily);
  setLoaded(true);
}

if (loaded){
  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col">
         <WeatherForecastDay data={predict[0]} />
        </div>
      </div>
    </div>
  );

} else {

let apiKey = "ebef9ca4a8de66ed586fac628fade056";
 let longitude = props.coord.lon;
 let latitude = props.coord.lat;
 let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

 axios.get(apiUrl).then(handleResponse);

 return null;
 } 
}
