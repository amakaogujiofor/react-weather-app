import React from "react";

export default function Temperature() {
  return (
    <div>
      <div className="degrees">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="Cloudy"
          className="float-left weather-icon"
        />
      </div>
      <div class="float-left">
        <strong className="temp">19</strong>
        <span className="units">
          <a href="/">°C</a> | <a href="/">°F</a>
        </span>
      </div>

      <div className="stats">
        <p>Humidity: 80%</p>
        <p>Wind: 10 km/h</p>
      </div>
    </div>
  );
}
