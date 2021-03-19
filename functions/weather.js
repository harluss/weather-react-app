require('dotenv').config();
const axios = require('axios');

const url = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPENWEATHER_API_KEY}&units=metric&q=`;

exports.handler = async (event, context, cb) => {
  const method = event.httpMethod;

  if (method !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { city, country } = JSON.parse(event.body);

  try {
    const { data } = await axios.get(`${url}${city.trim()},${country.trim()}`);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: JSON.stringify(error),
    };
  }
};
