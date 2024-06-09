import React from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  scrollToBottom: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, scrollToBottom }) => {
  return (
    <nav className="navbar">
      <ul>
      <img
        src={isDarkMode ? `${process.env.PUBLIC_URL}/darkModeLogo.png` : `${process.env.PUBLIC_URL}/darkModeLogo.png`}
        alt="Logo"
        className="logo"
      />
        <a href="#about">About</a>
        <a href="#resume">Experience</a>
        <a href="#projects">Projects</a>
        <button onClick={scrollToBottom}>Links</button>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {isDarkMode ? <ion-icon name="moon-outline"></ion-icon> : <ion-icon name="sunny-outline"></ion-icon>}
      </button>
      </ul>
    </nav>
  );
};

export default Navbar;