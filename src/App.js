import React from 'react';
import { Route, Switch } from 'react-router-dom';// Assuming this is the component for creating Google Slides
import Dashboard from './pages/Admin-DashBoard/AdminDashboard';
import GoogleSlideLogic from './containers/GoogleFormLogic';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/google-creation" component={GoogleSlideLogic} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
