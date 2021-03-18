require('dotenv').config();

exports.handler = async (event, context, cb) => {
  return {
    statusCode: 200,
    body: 'hi',
  };
};
