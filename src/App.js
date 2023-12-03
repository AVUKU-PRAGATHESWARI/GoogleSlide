// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoogleSlideLogic from './containers/GoogleFormLogic';
import Form from './pages/Form/Form'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoogleSlideLogic />} />
        <Route path='/form/:id' element={<Form/>} />
      </Routes>
    </Router>
  );
};

export default App;
