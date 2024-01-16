import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [units, setUnits] = useState("celsius");

    function convertFahrenheit(event){
        event.preventDefault();
        setUnits("fahrenheit");
    }

    function convertCelsius(event){
        event.preventDefault();
        setUnits("celsius");
    }
    if (units === "celsius"){   
        return (
          <div className="WeatherTemperature">
            <span className="degrees">{Math.round(props.celsius)}</span>
            <span className="units">
              °C 
              <span className="m-2">|</span>
              <a
                href="/"
                className="text-decoration-none"
                onClick={convertFahrenheit}
              >
                F
              </a>
            </span>
          </div>
        );
} else {
    let fahrenheit = (props.celsius * 9)/5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="degrees">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" className="text-decoration-none" onClick={convertCelsius}>
            °C
          </a>
          <span className="m-2">|</span> 
          F
        </span>
      </div>
    );
   
}
}