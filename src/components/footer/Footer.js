import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className="footer-container">
            <div className="footer-links">
                <div className="social-media-links">
                    <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookSquare} /> Facebook</a>
                    <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitterSquare} /> Twitter</a>
                    <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagramSquare} /> Instagram</a>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2024 Mahmoud Nassar. All Rights Reserved.</p>
            </div>
        </div>
    </>
  );
};

export default Footer;
