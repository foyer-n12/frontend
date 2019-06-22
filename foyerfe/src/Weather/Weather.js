import React from 'react';
import './Weather.scss';

export default class DarkSkyWidget extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div className="hack">
          <iframe id="forecast_embed" frameBorder="0" height="240" width="100%"
                  src="//forecast.io/embed/#lat=47.6182769&lon=-122.3516573&name=Seattle, WA">
          </iframe>
          </div>

    )
    }
  }

