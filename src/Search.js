import React from "react";

export default function Search() {
  return (
    <div>
      <div className="search-engine">
        <input
          type="text"
          placeholder="Type a city.."
          className="search-bar"
        ></input>
        <input type="submit" className="submit-btn" value="Search"></input>
      </div>
    </div>
  );
}
