function skyState(fetch, process){
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=asuncion&appid=${process.env.API_KEY}`)
  .then(response => response.json())
  .then(data => {
    console.log(`Sky state: ${data.weather[0].main}`);
    return `Sky state: ${data.weather[0].main}`;
  })
}

module.exports = skyState;