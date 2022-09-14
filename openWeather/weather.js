function skyState(fetch, process){
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=asuncion&appid=`, process.env.API_KEY)
  .then(response => response.json())
  .then(data => `Sky ${data.weather[0].main}`)
}

module.exports = skyState;