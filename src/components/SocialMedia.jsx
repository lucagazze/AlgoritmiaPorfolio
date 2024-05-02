import React from 'react';

import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

export const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaFacebook />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};
