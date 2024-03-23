const response = (statusCode, data = {}) => {
    return {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Origin": "*",
      },
      statusCode,
      body: JSON.stringify(data),
    };
  };
  
  module.exports = { response };