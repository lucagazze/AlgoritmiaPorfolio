import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AppWrap from '../../components/wrapper/AppWrap';
import MotionWrap from '../../components/wrapper/MotionWrap';
import './Abous.scss';

const about = [
  {
    title: 'UX/UI',
    description: 'Descripción UX/UI',
    imgUrl: require('../../assets/img/about01.png'),
  },
  {
    title: 'Desarrollo Backend',
    description: 'Desarrollo Backend',
    imgUrl: require('../../assets/img/about02.png'),
  },
  {
    title: 'Desarrollo Frontend',
    description: 'Desarrollo Frontend',
    imgUrl: require('../../assets/img/about03.png'),
  },
  {
    title: 'Desarrollo Web',
    description: 'Desarrollo Web',
    imgUrl: require('../../assets/img/about04.png'),
  },
];

export const About = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <>
      <h2 className="head-text">
        Sabemos que <span>Buenos Diseños</span> <br />
        significa <span>Buenos Negocios</span>
      </h2>
      <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            key={about.title + index}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.3 }}
            className={`app__profile-item ${
              hoverIndex === index ? 'hovered' : ''
            }`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
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
