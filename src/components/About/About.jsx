import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AppWrap from '../../components/wrapper/AppWrap';
import MotionWrap from '../../components/wrapper/MotionWrap';
import './Abous.scss';
import about01 from '../../assets/img/Default_Imagen_Una_sala_de_diseo_minimalista_con_grandes_venta_3.jpg';
import about02 from '../../assets/img/Default_Imagen_Una_panormica_de_una_sala_de_servidores_con_luc_1.jpg';
import about03 from '../../assets/img/Default_Imagen_Una_sala_luminosa_con_diseadores_y_desarrollado_2.jpg';
import about04 from '../../assets/img/Default_Dame_una_imagen_tecnologica_de_desarrollo_de_paginas_w_0.jpg';

const aboutData = [
  {
    title: 'UX/UI',
    description: 'Descripción UX/UI',
    imgUrl: about01,
  },
  {
    title: 'Desarrollo Backend',
    description: 'Desarrollo Backend',
    imgUrl: about02,
  },
  {
    title: 'Desarrollo Frontend',
    description: 'Desarrollo Frontend',
    imgUrl: about03,
  },
  {
    title: 'Desarrollo Web',
    description: 'Desarrollo Web',
    imgUrl: about04,
  },
];

const About = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <>
      <h2 className="head-text">
        Sabemos que <span>Buenos Diseños</span> <br />
        significa <span>Buenos Negocios</span>
      </h2>
      <div className="app__profiles">
        {aboutData.map((item, index) => (
          <motion.div
            key={item.title + index}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.3 }}
            className={`app__profile-item ${hoverIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={item.imgUrl} alt={item.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {item.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'sobre',
  'app__whitebg'
);
