import './index.css'

const SuggestionItem = props => {
  const {suggestItem, showSuggest} = props
  const {id, suggestion} = suggestItem
  const onChange = () => {
    showSuggest(suggestion)
  }
  return (
    <div className="search-list">
      <h1 className="search-heading"> {suggestion} </h1>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-icon"
          alt="arrow"
          onClick={onChange}
        />
      </div>
    </div>
  )
}

export default SuggestionItem
