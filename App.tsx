import React, { useState } from 'react';
import Layout from './components/Layout';
import { guideData } from './data/guideData';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  const [currentView, setCurrentView] = useState('welcome');

  const handleStart = () => {
    setCurrentView('introduccion');
  };

  const handleNavigate = (viewId: string) => {
    setCurrentView(viewId);
  };
  
  if (currentView === 'welcome') {
    return <WelcomeScreen onStart={handleStart} />;
  }

  return (
    <Layout 
      guideData={guideData} 
      currentViewId={currentView} 
      onNavigate={handleNavigate} 
    />
  );
}

export default App;