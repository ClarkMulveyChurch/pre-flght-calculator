import axios from 'axios';

const options = {
  headers: { "X-API-Key": "f4eb598234654ebaad26620b32" },
};

export const fetchWeatherMetar = async (airportCode) => {
  var data = await axios.get(`https://api.checkwx.com/metar/${airportCode}/decoded`, options).then((resp) => {
    console.log(resp.data.data);
    return resp.data.data ;
  }).then((e) => {
    console.log('e', e)
    return e;
  });
  console.log('right before return');
  return data[0];
};

export const fetchWeatherTaf = async (airportCode) => {
  var data = await axios.get(`https://api.checkwx.com/taf/${airportCode}/decoded`, options).then((resp) => {
    console.log(resp.data.data);
    return resp.data.data ;
  }).then((e) => {
    console.log('e', e)
    return e;
  });
  console.log('right before return');
  return data[0];
};
