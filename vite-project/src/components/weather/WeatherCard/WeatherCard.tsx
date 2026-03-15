import "../../../styles/WeatherCard.css";

export default function WeatherCard() {
  return (
    <section className="weathercard">
      <h2 className="weathercard-city">Toronto</h2>
      <p className="weathercard-temperature">12°C</p> {/* alt + 0176 for degree symbol */}
      <p className="weathercard-condition">Partly Cloudy</p>
      <div className="weathercard-details">
        <div className="weathercard-detail">
          <h3>Humidity</h3>
          <strong>68%</strong>
        </div>

        <div className="weathercard-detail">
          <h3>Wind</h3>
          <strong>14km/h</strong>
        </div>
      </div>
    </section>
  );
}
