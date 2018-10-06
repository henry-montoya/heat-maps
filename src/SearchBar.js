import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";

class SearchBar extends React.Component {
  state = {
    queryString: ""
  };

  handleChange = e => {
    let key = e.target.name;
    let val = e.target.value;
    this.setState({
      [key]: val
    });
  };

  render() {
    return (
      <div class="search-container">
        <select
          name="searchType"
          value={this.state.searchType}
          onChange={this.handleChange}
        >
          <option value="1">Places</option>
          <option value="2">Keywords</option>
        </select>
        <input
          type="text"
          name="queryString"
          value={this.state.queryString}
          onChange={this.handleChange}
        />
        <button class="search-button" type="button" onClick={this.startSearch}>
          Go
        </button>
      </div>
    );
  }
}

export default SearchBar;
