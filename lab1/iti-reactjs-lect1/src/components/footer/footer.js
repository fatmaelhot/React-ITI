import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub ,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="bg-dark text-light py-4">
      <div className="container text-center">
        <p className='fs-5'>Connect with me:</p>
        <div>
          <a href="" className="text-light mx-3">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="" className="text-light mx-3">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="" className="text-light mx-3">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
