import React from "react";
import MapViewDirections from "react-native-maps-directions";
import config from '~config'

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey={config.API_KEY}
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
