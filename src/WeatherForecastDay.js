import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
function day(){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

     let days = [
       "Sun",
       "Mon",
       "Tues",
       "Wed",
       "Thur",
       "Fri",
       "Sat",
     ];

    return days[day];
}

    return (
      <div>
        <div className="DailyForecast-day mb-2">
          {day()}
        </div>
        <WeatherIcon code={props.data.weather[0].icon} size={38} />
        <div className="DailyForecast-temperature">
          <span className="DailyForecast-max">
            {Math.round(props.data.temp.max)}°
          </span>
          <span className="DailyForecast-min">
            {Math.round(props.data.temp.min)}°
          </span>
        </div>
      </div>
    );

}