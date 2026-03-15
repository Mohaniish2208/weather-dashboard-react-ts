import "../../../styles/SearchForm.css"

export default function SearchForm() {
  return (
    <form className="form">
      <input className="form-input" type="text" placeholder="Enter city name"></input>
      <button className="form-btn" type="submit">
        Search
      </button>
    </form>
  )
}
