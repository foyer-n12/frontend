import React from 'react';
import {geolocated} from 'react-geolocated';
import './Getlocation.scss';

class Location extends React.Component {

  render() {
    return !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
            ? <div>Geolocation is not enabled</div>
            : this.props.coords
                ? <div className="hack">
                  <iframe id="forecast_embed" frameBorder="0" height="240" width="100%"
                          src={`//forecast.io/embed/#lat=${this.props.coords.latitude}&lon=${this.props.coords.longitude}`}>
                  </iframe>
                </div>
                : <div>Getting your location data&hellip; </div>;
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Location);