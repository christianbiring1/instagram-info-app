import React, { useEffect } from 'react';
import axios from 'axios';

const AuthCallback = () => {
  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');

      if (code) {
        try {
          const response = await axios.post('https://api.instagram.com/oauth/access_token', {
            client_id: process.env.REACT_APP_INSTAGRAM_CLIENT_ID,
            client_secret: process.env.REACT_APP_REDIRECT_URI,
            grant_type: 'authorization_code',
            redirect_uri: 'https://basic-ig-info-app.netlify.app/auth/callback',
            code: code,
          });

          const { access_token, user_id } = response.data;
          localStorage.setItem('instagram_access_token', access_token);
          localStorage.setItem('instagram_user_id', user_id);

          // Redirect to profile page or another page
          window.location.href = '/profile';
        } catch (error) {
          console.error('Error fetching access token', error);
        }
      }
    };

    fetchData();
  }, []);

  return (
  <div>Loading...</div>
)
};

export default AuthCallback;