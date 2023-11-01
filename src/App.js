// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Admin-DashBoard/AdminDashboard';
import DynamicForm from './pages/Google-Slide/GoogleSlideUI';
import GoogleSlideUI from './pages/Google-Slide/GoogleSlideUI';
import GoogleSlideLogic from './containers/GoogleFormLogic';
const App = () => {
  return (
    <GoogleSlideLogic/>
  );
};

export default App;
