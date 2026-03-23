# Weather API Dashboard

A clean, modern weather dashboard built with React and TypeScript that fetches real-time weather data based on user input.

---

## Features

- Search any city worldwide
- Live temperature display
- Weather condition mapping (Clear, Cloudy, Rain, etc.)
- Humidity tracking
- Wind speed tracking
- "Feels Like" (apparent temperature)
- Modern UI with gradient accents and glass-style cards

---

## What This Project Demonstrates

- API integration using `fetch`
- Handling async data with `async/await`
- State management with React hooks
- Type-safe data handling with TypeScript
- Clean component architecture
- Conditional rendering
- Error handling (invalid city, empty input)

---

## Tech Stack

- React ^19.2.0
- TypeScript
- Vite
- CSS (custom styling)
- Open-Meteo API

---

## API Used

- **Geocoding API** → Convert city name → latitude & longitude
- **Forecast API** → Fetch weather data

Source: https://open-meteo.com/en/docs

---

## Project Structure

```
src/
  components/
    layout/
    weather/
  services/
  types/
  utils/
  styles/
```

---

## How It Works

1. User enters a city name
2. App fetches coordinates using Geocoding API
3. Uses coordinates to fetch weather data
4. Maps weather codes to readable conditions
5. Displays results in UI

---

## Notes

- Weather data may differ slightly from Google Weather due to different providers and models
- Data is based on Open-Meteo forecast models

---

## Future Improvements

- Dynamic weather icons
- Background themes based on weather
- 7-day forecast
- Unit toggle (°C / °F)
- Improved accessibility

---

## Preview

#### Main page:

![Main Page](icons/Main%20Page%20SS.png)

#### Search Result:

![Search Result](icons/Search%20Result%20SS.png)

---

## Links:

[!StackBlitz]()
[!CodeSandBox]()
[!GitHub]()

## Author

Mohaniish
Frontend Developer
