import React from "react";
import "./App.css";

function Result({ weatherData }) {
  return (
    <div className="resultData">
      {weatherData.length !== 0 ? (
        <>
          <h2 style={{ textAlign: "center", fontSize: "28px", color: "red" }}>
            {weatherData.name}
          </h2>
          <div className="temp">
            <div>
              <span style={{ color: "red" }}>Temp</span>:{" "}
              {weatherData.main.temp.toFixed(2)}°C
            </div>
          </div>
          <div className="weatherType">
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
            <div>
              <span style={{ color: "red" }}>WeatherType</span>:{" "}
              {weatherData.weather[0].main}
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 style={{ textAlign: "center", color: "red", fontSize: "24px" }}>
            Please enter the city name
          </h3>
        </>
      )}
    </div>
  );
}

export default Result;
