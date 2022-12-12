import axios from 'axios';

const options = {
  headers: { "X-API-Key": "f4eb598234654ebaad26620b32" },
};

export const fetchWeatherMetar = async (airportCode) => {
  var data = await axios.get(`https://api.checkwx.com/metar/${airportCode}/decoded`, options).then((resp) => {
    return resp.data.data ;
  }).then((e) => {
    return e;
  });
  return data[0];
};

export const fetchWeatherTaf = async (airportCode) => {
  var data = await axios.get(`https://api.checkwx.com/taf/${airportCode}/decoded`, options).then((resp) => {
    return resp.data.data ;
  }).then((e) => {
    return e;
  });
  return data[0];
};
