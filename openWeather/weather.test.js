const skyState = require ('./weather');

test ('API', () =>{
  const fakeProcess = {
    env:{
      API_KEY: 'weather123'
    }
  }

  const fakeFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve ({weather: [{main: 'clear'}]})
  }))
  return skyState(fakeFetch, fakeProcess)
  .then(result => {
    expect(fakeFetch).toBeCalledWith('https://api.openweathermap.org/data/2.5/weather?q=asuncion&appid=', fakeProcess.env.API_KEY)
    expect(result).toBe('Sky clear')});
})