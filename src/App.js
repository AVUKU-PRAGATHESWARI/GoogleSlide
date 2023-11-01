// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Admin-DashBoard/AdminDashboard';
import DynamicForm from './pages/Google-Slide/GoogleSlide';
import GoogleSlideUI from './pages/Google-Slide/GoogleSlide';
const App = () => {
  return (
    <GoogleSlideUI/>
  );
};

export default App;
