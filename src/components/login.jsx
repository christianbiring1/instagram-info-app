
import React from "react";

const Login = () => {
  const clientId = '1862345414277372';
  const redirectUri = 'http://localhost:5173/auth/callback';

  const loginUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

  return (
    <div>
      <h2>Login with Instagram</h2>
      <a href={loginUrl}>Login</a>
    </div>
  );
};

export default Login;