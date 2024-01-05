import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'
class GoogleSuggestions extends Component {
  state = {searchInput: ''}
  searchChange = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }
  showSuggest = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchSuggestion = suggestionsList.filter(eachSuggest =>
      eachSuggest.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-container">
        <div className="container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              className="google-image"
              alt="google logo"
            />
          </div>
          <div className="sugggestions-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon-image"
                alt="search icon"
              />
              <div>
                <input
                  type="search"
                  placeholder="Search Google"
                  className="inputSearch"
                  onChange={this.searchChange}
                  value={searchInput}
                />
              </div>
            </div>

            <div className="search-list-container">
              {searchSuggestion.map(each => (
                <SuggestionItem
                  suggestItem={each}
                  showSuggest={this.showSuggest}
                  key={each.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
