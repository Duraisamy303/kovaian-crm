import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import LeadDetails from './pages/LeadDetails/LeadDetails';
import './App.scss';
import Layout from './components/layout/layout';

const AppContent = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('entering');

  useEffect(() => {
    setTransitionStage('exiting');
  }, [location]);

  const handleTransitionEnd = () => {
    if (transitionStage === 'exiting') {
      setDisplayLocation(location);
      setTransitionStage('entering');
    }
  };

  return (
      <Routes location={displayLocation}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/leads/:id" element={<LeadDetails />} />
      </Routes>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <AppContent />
      </Layout>
    </Router>
  );
}

export default App;