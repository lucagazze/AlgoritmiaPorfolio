import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import AppWrap from '../../components/wrapper/AppWrap';
import MotionWrap from '../../components/wrapper/MotionWrap';
import './Skills.scss';
import reactIcon from '../../assets/img/react.png';
import reduxIcon from '../../assets/img/redux.png';
import pythonIcon from '../../assets/img/python.png';
import apiIcon from '../../assets/img/api.png';

const Skills = () => {
  // Memoizing data to avoid unnecessary re-renders
  const skillsData = useMemo(() => [
    {
      name: 'React',
      icon: reactIcon,
      bgColor: '#ffffff',
    },
    {
      name: 'Redux',
      icon: reduxIcon,
      bgColor: '#ffffff',
    },
    {
      name: 'Python',
      icon: pythonIcon,
      bgColor: '#ffffff',
    },
    {
      name: 'Api',
      icon: apiIcon,
      bgColor: '#ffffff',
    },
  ], []);

  const experiencesData = useMemo(() => [
    {
      year: 2021,
      works: [
        {
          name: 'Desarrollo de aplicaciones móviles',
          company: 'Mobile Solutions Inc.',
          description: 'Creación de aplicaciones móviles multiplataforma',
        },
        {
          name: 'Testing de software',
          company: 'QA Testing Co.',
          description: 'Pruebas exhaustivas de software para garantizar la calidad del producto',
        },
      ],
    },
    {
      year: 2018,
      works: [
        {
          name: 'Desarrollo de software en Java',
          company: 'Java Development Corp.',
          description: 'Implementación de soluciones utilizando Java y tecnologías relacionadas',
        },
      ],
    },
  ], []);

  return (
    <>
      <h2 className="head-text">Habilidades y experiencias</h2>

      <div className="app__skills-container">
        {/* Lista de habilidades */}
        <motion.div className="app__skills-list">
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              className="app__skills-item app__flex"
              whileHover={{ scale: 1.4 }}
              transition={{ duration: 0 }}
            >
              <motion.div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <motion.img
                  src={skill.icon}
                  alt={skill.name}
                  style={{ width: '100%', height: '100%' }}
                />
              </motion.div>
              <motion.p className="p-text">{skill.name}</motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Lista de experiencias */}
        <div className="app__skills-exp">
          {experiencesData.map((experience) => (
            <motion.div key={experience.year} className="app__skills-exp-item">
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, idx) => (
                  <motion.div
                    key={idx}
                    className="app__skills-exp-work"
                    whileHover={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'habilidades', 'app__whitebg');
