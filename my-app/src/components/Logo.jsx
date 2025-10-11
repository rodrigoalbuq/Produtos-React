import React from 'react';
import '../styles/Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-icon">
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="8" fill="url(#gradient1)"/>
          <path 
            d="M12 15L20 10L28 15V27L20 32L12 27V15Z" 
            fill="white" 
            fillOpacity="0.9"
          />
          <circle cx="20" cy="20" r="3" fill="url(#gradient2)"/>
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#667eea"/>
              <stop offset="1" stopColor="#764ba2"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="17" y1="17" x2="23" y2="23" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffd89b"/>
              <stop offset="1" stopColor="#19547b"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="logo-text">
        <h1 className="brand-name">TechStore</h1>
        <p className="brand-tagline">Eletrônicos Premium</p>
      </div>
    </div>
  );
};

export default Logo;