const axios = require('axios');

const api_key = 'b8c33a4fd3ef5b32877abc89204f0ec3';
const endpoint = 'http://api.weatherstack.com/current';

axios.get(`${endpoint}?access_key=${api_key}&query=San Francisco&units=f`)
  .then(({ data: { current } }) => {
    console.log('temperatura actual: '+ current.temperature + ' y se siente como: ' + current.feelslike);

  })
  .catch(error => {
    console.log(error);
  });