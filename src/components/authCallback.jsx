import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');

      if (code) {
        try {
          const response = await axios.post('/.netlify/functions/instagramAuth', { code });

          const { access_token, user_id } = response.data;
          localStorage.setItem('instagram_access_token', access_token);
          localStorage.setItem('instagram_user_id', user_id);

          // Redirect to the profile page
          navigate('/profile')
        } catch (error) {
          console.error('Error fetching access token', error);
          // Handle the error appropriately in your application
        }
      }
    };

    fetchData();
  }, [navigate]);

  return (
  <div>Loading...</div>
)
};

export default AuthCallback;