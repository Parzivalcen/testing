const fetch = require('cross-fetch');
require('dotenv').config();


const result = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${'asuncion'}&appid=${process.env.API_KEY}`)
.then(response => response.json())
.then(data => `Sky ${data.weather[0].main}`);



result
