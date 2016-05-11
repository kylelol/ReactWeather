import React from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import openWeatherMap from '../api/openWeatherMap'

class Weather extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    }
  }

  handleSearch(location) {
    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location)
      .then(function(temp) {
        this.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      }.bind(this), function(err) {
        this.setState({
          isLoading: false
        })
        alert(err);
      }.bind(this));
  }

  render() {
    var {isLoading, temp, location} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>

      }
    }
    return (
      <div>
      <h2>Weather component</h2>
      <WeatherForm onSearch={this.handleSearch.bind(this)}/>
      {renderMessage()}
      </div>
    )
  }

}

export default Weather;
