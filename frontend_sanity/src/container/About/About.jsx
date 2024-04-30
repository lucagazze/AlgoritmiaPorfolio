import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import "./Abous.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Sabemos que <span>Buenos Diseños</span> <br />significa  <span>Buenos Negocios</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.3}}
            className={`app__profile-item ${hoverIndex === index ? 'hovered' : ''}`}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
