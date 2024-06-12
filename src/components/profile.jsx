import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const accessToken = localStorage.getItem('instagram_access_token');

  useEffect(() => {
    const fetchUserData = async () => {
      if (accessToken) {
        try {
          const response = await axios.get(`https://graph.instagram.com/me?fields=id,username,media_count&access_token=${accessToken}`);
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data', error);
        }
      }
    };

    fetchUserData();
  }, [accessToken]);

  if (!userData) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {userData.username}</p>
      <p>Media Count: {userData.media_count}</p>
    </div>
  );
};

export default Profile;
