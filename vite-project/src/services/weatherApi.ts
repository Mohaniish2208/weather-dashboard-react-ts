import { BASE_WEATHER_API, WEATHER_FORECAST_API } from "../constants/api"
import type { GeoCodingResponse, GeoCodingResult, WeatherResponse } from "../types/weather"

export async function fetchCoordinates(city: string): Promise<GeoCodingResult> {
  const response = await fetch(`${BASE_WEATHER_API}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`)

  if (!response.ok) {
    throw new Error("Failed to fetch location.")
  }

  const data: GeoCodingResponse = await response.json()

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found.")
  }

  return data.results[0]
}

export async function fetchWeather(latitude: number, longitude: number): Promise<WeatherResponse> {
  const response = await fetch(
    `${WEATHER_FORECAST_API}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`,
  )

  if (!response.ok) {
    throw new Error("Failed to fetch weather data.")
  }

  const data: WeatherResponse = await response.json()

  return data
}
