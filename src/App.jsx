import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/login';
import AuthCallback from './components/authCallback';
import Profile from './components/profile';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/auth/callback" element={<AuthCallback />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);

export default App;
