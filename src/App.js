// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Admin-DashBoard/AdminDashboard';
import GoogleSlide from './pages/Google-Slide/GoogleSlide';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/google-slides-page" component={GoogleSlide} />
      </Switch>
    </Router>
  );
};

export default App;
