import React, { useRef } from "react";
import "./App.css";

function Search(props) {
  const searchInput = useRef();
  return (
    <div className="searchBox">
      <input
        type="search"
        className="search"
        value={props.searchData}
        onChange={() => props.eventController(searchInput.current.value)}
        ref={searchInput}
      />
      <button className="btn" onClick={props.searchWeather}>
        Search
      </button>
    </div>
  );
}

export default Search;
