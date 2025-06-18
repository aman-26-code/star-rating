import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Star Rating App. All rights reserved.</p>
      
      <div className="social-icons">
        <a href="https://github.com/aman-26-code" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/aman-shaikh26" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:as0160163@gmail.com" aria-label="Email">
          <i className="fas fa-envelope"></i>
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
