import "./App.css";
import Search from "./components/search/Search";
import Forecast from "./components/forecast/Forecast";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import { WEA_API_URL, WEA_API_KEY } from "./searchAPI";
import { useState } from "react";

function App() {
  // Double hook for the weather states
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEA_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEA_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEA_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEA_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        // Latitude and Longitude coming from the other API (searchData.label)
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1>Should I bring my umbrella-ella-ella-eh-eh-eh?</h1>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
