import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 My Website. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-right">
            <a href="/privacy-policy" className="privacy-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
