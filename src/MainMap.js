import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MainMap = props => {
  if (props.currentLat && props.currentLon) {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: props.currentLat, lng: props.currentLon }}
      >
        {props.isMarkerShown && (
          <Marker
            position={{ lat: props.currentLat, lng: props.currentLon }}
            title="You are here."
            opacity={0.5}
            onClick={props.click}
            onMouseOver={props.mouseOver}
          />
        )}
      </GoogleMap>
    );
  } else {
    return <h1>Hi</h1>;
  }
};

{
  /* <MyMapComponent isMarkerShown />// Map with a Marker
<MyMapComponent isMarkerShown={false} />// Just only Map */
}

export default withGoogleMap(MainMap);
