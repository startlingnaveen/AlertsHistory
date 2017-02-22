'use strict';

module.exports.history = (event, context, callback) => {
  console.log('ALERTS_HISTORY')
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Testing CI/CD stuff!'
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
