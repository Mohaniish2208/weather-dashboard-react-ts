export type GeoCodingResult = {
  id: number
  name: string
  latitude: number
  longitude: number
  country?: string
  admin1?: string
}

export type GeoCodingResponse = {
  results?: GeoCodingResponse[]
}

export type CurrentWeather = {
  time: number
  interval: number
  temperature_2m: number
  relative_humidity_2m: number
  apparent_temperature: number
  weather_code: number
  wind_speed_10m: number
}

export type WeatherResponse = {
  latitude: number
  longitude: number
  current: CurrentWeather
}
