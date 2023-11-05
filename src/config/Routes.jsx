import React from 'react';
import { Switch, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Admin-DashBoard/AdminDashboard';


const MyRoutes = () => {
  return (
    <Routes>
        <Switch>
            <Route path='/' element = {<Dashboard/>}/>
        </Switch>
    </Routes>
  );
};

export default MyRoutes;
