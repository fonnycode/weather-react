import React from 'react';
import './App.css';
import WeatherInfo from "./WeatherInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
   <WeatherInfo defaultCity="Montreal"/>
      </header>
    </div>
  );
}

export default App;
