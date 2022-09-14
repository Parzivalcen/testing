const skyState = require ('./weather');

test ('API', () =>{
  const fakeProcess = {
    env:{
      API_KEY: 'weather123'
    }
  }
  const fakeFetch = (url, apikey) => {
    expect(apikey).toBe('weather123');
    expect(url).toBe(`https://api.openweathermap.org/data/2.5/weather?q=asuncion&appid=`);

    return Promise.resolve({
      json: () => Promise.resolve ({weather: [{main: 'clear'}]})
    })
  }
  return skyState(fakeFetch, fakeProcess)
  .then(result => expect(result).toBe('Sky clear'));
})