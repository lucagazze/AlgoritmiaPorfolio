import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AppWrap from '../../components/wrapper/AppWrap';
import MotionWrap from '../../components/wrapper/MotionWrap';
import './Abous.scss';
import about01 from '../../assets/img/about01.png';
import about02 from '../../assets/img/about02.png';
import about03 from '../../assets/img/about03.png';
import about04 from '../../assets/img/about04.png';

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

export const About = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

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
            className={`app__profile-item ${
              hoverIndex === index ? 'hovered' : ''
            }`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
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
  'about',
  'app__whitebg'
);
