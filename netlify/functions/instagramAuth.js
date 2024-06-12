const axios = require('axios');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { code } = JSON.parse(event.body);

  const client_id = process.env.REACT_APP_INSTAGRAM_CLIENT_ID;
  const client_secret = process.env.REACT_APP_INSTAGRAM_CLIENT_SECRET;
  const redirect_uri = 'https://basic-ig-info-app.netlify.app/auth/callback';

  try {
    const response = await axios.post('https://api.instagram.com/oauth/access_token', {
      client_id,
      client_secret,
      grant_type: 'authorization_code',
      redirect_uri,
      code,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};