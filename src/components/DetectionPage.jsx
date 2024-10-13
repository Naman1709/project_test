// src/components/DetectionPage.jsx
import React, { useState } from 'react';
import WebcamFeed from './WebcamFeed';
import DrowsinessIndicator from './DrowsinessIndicator';
import Alerts from './Alerts';

function DetectionPage() {
  const [alert, setAlert] = useState('');

  const handleAlert = (message) => {
    setAlert(message);
  };

  return (
    <div className="detection">
      <h2>Driver Drowsiness Detection</h2>
      <WebcamFeed onAlert={handleAlert} />
      <DrowsinessIndicator alert={alert} />
      <Alerts message={alert} />
    </div>
  );
}

export default DetectionPage;
