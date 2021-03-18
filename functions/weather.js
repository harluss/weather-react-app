require('dotenv').config();

exports.handler = async (event, context, cb) => {
  const method = event.httpMethod;

  if (method !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { city } = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: city,
  };
};
