import React from "react";
import MainMap from "./MainMap";

class MapContainer extends React.Component {
  state = {
    currentLat: null,
    currentLon: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        currentLat: position.coords.latitude,
        currentLon: position.coords.longitude
      });
    });
  }

  click = () => {
    console.log("clicked");
  };
  mouseOver = () => {
    console.log("mouseover");
  };

  render() {
    return (
      <div className="main-map-container">
        <MainMap
          containerElement={<div style={{ height: `400px`, width: "30%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
          // currentLocation={{ lat: this.state.lat, lng: this.state.lon }}
          currentLat={this.state.currentLat}
          currentLon={this.state.currentLon}
          isMarkerShown={true}
          click={this.click}
          mouseOver={this.mouseOver}
        />
      </div>
    );
  }
}

export default MapContainer;
