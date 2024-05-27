import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer">
      <div className="footer-content">
                <p>
                    <a href="mailto:chaseley.gillis@gmail.com" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="mail-unread-outline" className="social-icon"></ion-icon>
                    </a>  
                    <a href="https://www.linkedin.com/in/chasegillis" target="_blank" rel="noopener noreferrer">
                        <ion-icon name="logo-linkedin" className="social-icon"></ion-icon>
                    </a>  
                    <a href="https://www.github.com/ChaseGillis" target="_blank" rel="noopener noreferrer">
                        <ion-icon name="logo-github" className="social-icon"></ion-icon>
                    </a> 
                    <a href="https://www.instagram.com/chase.gillis/" target="_blank" rel="noopener noreferrer">
                        <ion-icon name="logo-instagram" className="social-icon"></ion-icon>
                    </a>
                    <a href="https://github.com/ChaseGillis/Resume/blob/main/Chase%20Gillis%20Resume.pdf" target="_blank" rel="noopener noreferrer"> 
                        <ion-icon name="document-text-outline" className="social-icon"></ion-icon>
                    </a>
                    <button onClick={scrollToTop}><ion-icon name="arrow-up-outline"></ion-icon></button>
                </p>
            </div>
    </footer>
  );
};

export default Footer;
