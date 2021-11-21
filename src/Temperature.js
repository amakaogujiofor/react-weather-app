import React from "react";

export default function Temperature() {
  return (
    <div>
      <div className="degrees">
        <span className="circle"></span>
        <h1>19 °C | °F </h1>
      </div>
      <div className="degrees">
        <p>Humidity: 80%</p>
        <p>Wind: 10 km/h</p>
      </div>
    </div>
  );
}
