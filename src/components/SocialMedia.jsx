import React from 'react';

import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

export const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/algoritmia_desarrollos" target="_blank" rel="noopener noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/algoritmia_desarrollos" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/algoritmia_desarrollos" target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};
