// Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Import the CSS file
import GoogleSlide from '../Google-Slide/GoogleSlideUI';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="animated-card">
        <h2>Google Slides Information</h2>
        <p>Any additional information about Google Slides</p>
        <Link to="/google-creation">
          <button className="animated-card-button" onClick={GoogleSlide}>Create Google Slides</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
