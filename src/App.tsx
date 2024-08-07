import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Timeline from './components/Timeline';

const App: React.FC = () => {
  // Initialize darkMode state from localStorage or default to false if undefined
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'; 
  });


  useEffect(() => {
    // Effect to update localStorage and HTML class whenever darkMode changes
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight});
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <div id="ball-container"></div>
      <script src="%PUBLIC_URL%/ball.js"></script>
      <header>
      <Navbar 
        toggleDarkMode={toggleDarkMode} 
        isDarkMode={isDarkMode} 
        scrollToBottom={scrollToBottom} 
      /></header>
      <div className="intro-container">
        <h1 className="INTRO"><b>CHASE GILLIS</b></h1></div>
        <br/>
      <AboutMe />
      <br/>
      <br/>
      <br/>
      <Timeline />
      <div className="test2" id="projects">
        <br/><br/><br/>
        <h1>PROJECTS</h1>
      </div>
      <Projects /> <br/> <br/>
      <footer>
      <Footer /></footer>
    </div>
  );
};

export default App;
