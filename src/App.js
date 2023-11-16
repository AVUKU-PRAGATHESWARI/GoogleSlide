// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoogleSlideLogic from './containers/GoogleFormLogic';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/forms/:id" element={<GoogleSlideLogic />} />
      </Routes>
    </Router>
  );
};

export default App;
