import SearchForm from "../../weather/SearchForm/SearchForm"
import StatusMessage from "../../weather/StatusMessage/StatusMessage"
import WeatherCard from "../../weather/WeatherCard/WeatherCard"
import "../../../styles/AppShell.css"
import { useState } from "react"
import { fetchCoordinates, fetchWeather } from "../../../services/weatherApi"
import getWeatherCondition from "../../../hooks/weatherCode"

type WeatherState = {
  cityName: string
  temperature: number
  humidity: number
  windSpeed: number
  condition: string
  feelsLike: number
  weatherCode: number
}

export default function Appshell() {
  const [city, setCity] = useState("")
  const [statusMessage, setStatusMessage] = useState("Search for a city to begin")
  const [weather, setWeather] = useState<WeatherState | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSearch() {
    if (!city.trim()) {
      setStatusMessage("Enter a city name.")
      setWeather(null)
      return
    }

    try {
      setLoading(true)
      setStatusMessage("loading...")
      setWeather(null)

      const location = await fetchCoordinates(city)

      const weatherData = await fetchWeather(location.latitude, location.longitude)

      setWeather({
        cityName: `${location.name}${location.country ? `, ${location.country}` : ""}`,
        temperature: Math.round(weatherData.current.temperature_2m),
        humidity: weatherData.current.relative_humidity_2m,
        windSpeed: Math.round(weatherData.current.wind_speed_10m),
        condition: getWeatherCondition(weatherData.current.weather_code),
        weatherCode: weatherData.current.weather_code,
        feelsLike: Math.round(weatherData.current.apparent_temperature),
      })
      setStatusMessage("")
    } catch (error) {
      if (error instanceof Error) {
        setStatusMessage(error.message)
      } else {
        setStatusMessage("Something went wrong.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="appshell">
      <div className="appshell-container">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <header className="appshell-container-header">
          <h1 className="appshell-title">
            Weather API
            <span> Dashboard</span>
          </h1>
          <div className="appshell-title-line" />
          <p className="search-instruction">Search any city to view weather details.</p>
        </header>

        <SearchForm city={city} onCityChange={setCity} onSearch={handleSearch} />
        {statusMessage && <StatusMessage message={statusMessage} />}
        {weather && !loading && (
          <WeatherCard
            cityName={weather.cityName}
            temperature={weather.temperature}
            condition={weather.condition}
            humidity={weather.humidity}
            windSpeed={weather.windSpeed}
            feelsLike={weather.feelsLike}
            weatherCode={weather.feelsLike}
          />
        )}
      </div>
    </main>
  )
}
