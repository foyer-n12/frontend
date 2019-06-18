import React from 'react';

export default class DarkSkyWidget extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div>
        <iframe width="100%" height="200"scrolling="no" frameBorder="no"
                src='https://darksky.net/widget/small/47.61805,-122.35205/us12/en.js?width=100%&height=200&title=Full Forecast&textColor=333333&bgColor=transparent&transparency=true&skyColor=undefined&fontFamily=Trebuchet MS&customFont=&units=us'>

        </iframe>
        </div>
    )
    }
  }

