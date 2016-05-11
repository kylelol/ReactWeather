import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=044ff0d7e2f4e62444c3f298b15526e2&units=imperial';
// 044ff0d7e2f4e62444c3f298b15526e2
module.exports = {
  getTemp(location) {
    var encodedLocation = encodeURIComponent(location)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(requestUrl)
      .then(function(res) {
        console.log('here');
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      }, function(err) {
        throw new Error(err.data.message);
      });
  }
}
