import './../styles/App.css';

import React, { useState } from "react";


function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const API_KEY = "45399be56063cd63cae015b0939c0a48"; // Replace with your OpenWeatherMap API key

  const search = async (e) => {
    if (e.key === "Enter") {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div className="weather-app">
      <input
        type="text"
        className="search"
        placeholder="Enter city name"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="weather">
          <h2 className="city-name">{weather.name}</h2>
          <div className="weather-data">
            <p className="temperature">Temperature: {weather.main.temp}°C</p>
            <p className="description">Description: {weather.weather[0].description}</p>
            <img
              className="weather-icon"
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;