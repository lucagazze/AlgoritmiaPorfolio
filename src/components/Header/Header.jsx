import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import AppWrap from '../../components/wrapper/AppWrap';
import circle from '../../assets/img/circle.svg';
import flutter from '../../assets/img/flutter.png';
import redux from '../../assets/img/redux.png';
import sass from '../../assets/img/sass.png';
import profile from '../../assets/img/Default_haceme_un_buen_logo_que_diga_Algorithmia_que_sea_muy_l_0_ae53fc87-bf71-4388-ada7-7310639b708a_0.png';
import './Header.scss';

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const moveX = (mouseX - window.innerWidth / 2) / 120;
    const moveY = -(mouseY - window.innerHeight / 2) / 120;
    setMousePosition({ x: moveX, y: moveY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const transformStyle = {
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
  };

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
        style={transformStyle}
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hola, somos</p>
              <h1 className="head-text">Algoritmia</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Desarrollos Web</p>
          </div>
        </div>
      </motion.div>

      <div className="app__header-img" style={{ perspective: '1000px' }}>
        <motion.img
          src={profile}
          alt="profile_bg"
          style={{
            ...transformStyle,
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)`
          }}
        />
        <img src={circle} alt="profile_circle" className="overlay_circle" />
      </div>

      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="app__header-circles"
        style={transformStyle}
      >
        {[flutter, redux, sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt={`circle-${index}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'inicio');
