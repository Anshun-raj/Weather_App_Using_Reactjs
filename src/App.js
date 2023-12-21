import { useState } from "react";
import axios from "axios";
import "./App.css";
import Result from "./Result";
import Search from "./Search";

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);

  const changeSearch = (value) => {
    setSearch(value);
  };

  const searchWeatherController = () => {
    if (search !== " ") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f56f24967aaf51182d1d4df628297c6d&units=metric`
        )
        .then((response) => {
          setWeather(response.data);
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="app">
      <Search
        searchData={search}
        eventController={changeSearch}
        searchWeather={searchWeatherController}
      />
      <Result weatherData={weather} />
    </div>
  );
}

export default App;
