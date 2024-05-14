import React, { useState, useEffect } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';
import AppWrap from '../../components/wrapper/AppWrap';
import MotionWrap from '../../components/wrapper/MotionWrap';
import './Work.scss';

const worksData = [
  {
    title: 'Portal Selecta',
    description: 'Portal Selecta',
    projectLink: 'https://selectaargentina.com/',
    imgUrl: require('../../assets/img/Selecta.png'),
    tags: ['All', 'Portal'],
  },
  {
    title: 'Portal Fagaz',
    description: 'Portal Fagaz',
    projectLink: 'https://fagazsa.com/',
    imgUrl: require('../../assets/img/FagazSa.png'),
    tags: ['All', 'Portal'],
  },
  {
    title: 'Pagina de Rutinas Gym',
    description: 'Pagina de Rutinas Gym',
    projectLink: 'https://fitplansearch.com/',
    imgUrl: require('../../assets/img/FitPlan.png'),
    tags: ['All', 'Portal', 'Blogs'],
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

    }, 500);
  };

  useEffect(() => {
    handleWorkFilter(activeFilter);
  }, [activeFilter]);

  return (
    <>
      <h2 className="head-text">
        Nuestro <span>Portfolio</span> 
      </h2>

      <div className="app__work-filter">
        {['Blogs', 'Portal', 'Ecommerce', 'React JS', 'All'].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {worksData.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'proyectos',
  'app__primarybg'
);
