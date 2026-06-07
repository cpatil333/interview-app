import type { WeatherData } from "../../types/weather";

type WeatherCardProps = {
  weather: WeatherData;
};
const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <div>
      <p>{new Date().toLocaleDateString()}</p>
      <h2>{weather.name}</h2>
      <h2>{weather.main.temp}°C</h2>
      <h2>
        {weather.weather[0].description
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </h2>
      <h2>Humidity: {weather.main.humidity}%</h2>
      <h2>Wind: {weather.wind.speed.toFixed(1)} km/h</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
};

export default WeatherCard;
