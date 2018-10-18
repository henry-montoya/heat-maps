import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";

class SearchBar extends React.Component {
  state = {
    address: "",
    queryString: ""
  };

  handleChange = e => {
    let key = e.target.name;
    let val = e.target.value;
    this.setState({
      [key]: val
    });
  };

  handleAddressChange = address => {
    this.setState({ address });
  };

  // handleSelect = address => {
  //   geocodeByAddress(address)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng => console.log("Success", latLng))
  //     .catch(error => console.error("Error", error));
  // };

  render() {
    return (
      <div className="search-container">
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
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleAddressChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input"
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <button
          className="search-button"
          type="button"
          onClick={this.startSearch}
        >
          Go
        </button>
      </div>
    );
  }
}

export default SearchBar;
