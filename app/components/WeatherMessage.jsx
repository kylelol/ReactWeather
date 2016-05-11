import React, { PropTypes } from 'react'

class WeatherMessage extends React.Component {
  render () {
    return (
      <h3>It is {this.props.temp} in {this.props.location}</h3>
      );
  }
}

export default WeatherMessage;
