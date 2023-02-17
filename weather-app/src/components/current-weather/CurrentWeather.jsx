import "./currentweather.css";

const CurrentWeather = ({ data }) => {
  return (
    <>
      <h2>Current weather</h2>
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">{data.city}</p>
            <p className="description">{data.weather[0].description}</p>
          </div>
          <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className="weather-icon" />
        </div>
        <div className="bottom">
          <p className="temperature">{data.main.temp}°C</p>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
