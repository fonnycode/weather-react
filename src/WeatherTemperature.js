import React from "react";

export default function WeatherTemperature(props){
    return (
      <div className="WeatherTemperature">
        <span className="degrees">{Math.round(props.celsius)}</span>
        <span className="units">°C</span>
      </div>
    );
}