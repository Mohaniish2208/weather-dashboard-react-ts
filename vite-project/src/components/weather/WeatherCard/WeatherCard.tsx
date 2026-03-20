// import getWeatherCondition from "../../../hooks/weatherCode"
import "../../../styles/WeatherCard.css"

type WeatherCardProps = {
  cityName: string
  temperature: number
  condition: string
  humidity: number
  windSpeed: number
  feelsLike: number
  weatherCode: number
}

// export default function handleCloudy(weatherCode(getWeatherCondition.c)){
//   if (condition === )
// }

export default function WeatherCard({
  cityName,
  temperature,
  condition,
  humidity,
  windSpeed,
  feelsLike,
}: WeatherCardProps) {
  return (
    <section className="weathercard">
      <div className="weathercard-overlay" />
      <h2 className="weathercard-city">{cityName}</h2>
      <p className="weathercard-temperature">{temperature}°C</p>
      <div className="weathercard-condition">
        <img src="/icons/weather.png" alt="weather" />
        <span>{condition}</span>
      </div>
      <div className="weathercard-details">
        <div className="weathercard-detail">
          <div className="humidity-icon">
            <img src="/icons/humidity.png" alt="humidity" />
          </div>
          <div className="text">
            <h3>Humidity</h3>
            <strong>{humidity}%</strong>
          </div>
        </div>

        <div className="weathercard-detail">
          <div className="wind-icon">
            <img src="/icons/wind.png" alt="wind" />
          </div>
          <div className="text">
            <h3>Wind</h3>
            <strong>{windSpeed}km/h</strong>
          </div>
        </div>

        <div className="weathercard-detail">
          <div className="feelsLike-icon">
            <img src="/icons/feelsLike.png" alt="feelsLike" />
          </div>
          <div className="text">
            <h3>Feels Like</h3>
            <strong>{feelsLike}°C</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
