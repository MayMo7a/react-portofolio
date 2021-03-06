import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  position: "relative",
  width: "100%",
  height: "200px"
};

export class Location extends Component {
  render() {
    return (
      <div style={mapStyles}>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "YOUR_GOOGLE_API_KEY_GOES_HERE"
})(Location);
