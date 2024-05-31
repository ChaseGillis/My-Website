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
        <li><a href="#about">About</a></li>
        <li><a href="#resume">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><button onClick={scrollToBottom}>Socials</button></li>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {isDarkMode ? <ion-icon name="moon-outline"></ion-icon> : <ion-icon name="sunny-outline"></ion-icon>}
      </button>
      </ul>
    </nav>
  );
};

export default Navbar;