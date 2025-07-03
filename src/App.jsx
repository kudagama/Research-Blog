// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import ResearchList from './components/ResearchList';
import ResearchDetail from './components/ResearchDetail';
import Header from './components/Header';
import ThemeContext from './context/ThemeContext';

function App() {
  const [selectedResearch, setSelectedResearch] = useState(null);
  const [theme, setTheme] = useState('light');

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleResearchSelect = (research) => {
    setSelectedResearch(research);
  };

  const handleBackToList = () => {
    setSelectedResearch(null);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app">
        <Header />
        <main className="main-content">
          {selectedResearch ? (
            <ResearchDetail 
              research={selectedResearch} 
              onBack={handleBackToList}
            />
          ) : (
            <ResearchList onResearchSelect={handleResearchSelect} />
          )}
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;