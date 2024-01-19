import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

export default function DailyForecast() {
   

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
