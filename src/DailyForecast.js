import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
function handleResponse(response){
  console.log(response.data);
}
console.log(props);
  let apiKey = "ebef9ca4a8de66ed586fac628fade056";
  let longitude = props.coord.lon;
  let latitude = props.coord.lat;
   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col">
          <div className="DailyForecast-day mb-2">Fri</div>
          <WeatherIcon code="01d" size={38} />
          <div className="DailyForecast-temperature">
            <span className="DailyForecast-max">19</span>
            <span className="DailyForecast-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
