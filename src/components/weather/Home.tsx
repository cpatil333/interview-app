import { useState } from "react";
import SearchBar from "../../components/weather/SearchBar";
import WeatherCard from "../../components/weather/WeatherCard";
import type { WeatherData } from "../../types/weather";
import { getWeather } from "../../services/WeatherApi";

const Home = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([
    "Mumbai",
    "Pune",
    "Delhi",
    "Nagpur",
  ]);

  const handleSearch = async (city: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getWeather(city);
      setWeather(data);
      setHistory((prev) => {
        const updated = [city, ...prev.filter((c) => c !== city)];
        console.log(updated);
        return updated.slice(0, 5);
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("City not found");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <main>
        <h1>Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul>
          {history.map((city) => (
            <li
              key={city}
              onClick={() => handleSearch(city)}
              style={{ cursor: "pointer" }}
            >
              {city}
            </li>
          ))}
        </ul>
        {weather && <WeatherCard weather={weather} />}
      </main>
    </div>
  );
};

export default Home;
