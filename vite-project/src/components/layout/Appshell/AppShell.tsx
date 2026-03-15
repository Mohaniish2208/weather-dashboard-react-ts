import SearchForm from "../../weather/SearchForm/SearchForm"
import StatusMessage from "../../weather/StatusMessage/StatusMessage"
import WeatherCard from "../../weather/WeatherCard/WeatherCard"
import "../../../styles/AppShell.css"

export default function Appshell() {
  return (
    <main className="appshell">
      <div className="appshell-container">
        <header className="appshell-container-header">
          <h1>Weather API Dashboard</h1>
          <p>Search any city to view weather details.</p>
        </header>

        <SearchForm />
        <StatusMessage message="Search for a city to begin." />
        <WeatherCard />
      </div>
    </main>
  )
}
