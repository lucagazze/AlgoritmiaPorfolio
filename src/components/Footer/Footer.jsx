import React, { useState } from 'react';

import mobile from '../../assets/img/mobile.png';
import emaill from '../../assets/img/emaill.png';
import AppWrap from '../../components/wrapper/AppWrap';
import MotionWrap from '../../components/wrapper/MotionWrap';
import './Footer.scss';

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    console.log(formData);
    setIsFormSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      <h2 className="head-text">Contactanos!</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={emaill} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">
            lucagazze1@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            +(54) 341-618-9746
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Tu nombre"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Tu mail"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Tu mensaje"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? 'Mandar mensaje' : 'Mandando...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Gracias por mantenerte en contacto!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contacto',
  'app__primarybg'
);
