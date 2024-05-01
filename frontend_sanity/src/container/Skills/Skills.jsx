import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

// Datos de habilidades
const skillsData = [
  { name: "React", icon: require("../../assets/react.png"), bgColor: "#ffffff" },
  { name: "Redux", icon: require("../../assets/redux.png"), bgColor: "#ffffff" },
  { name: "Python", icon: require("../../assets/python.png"), bgColor: "#ffffff" },
  { name: "Api", icon: require("../../assets/api.png"), bgColor: "#ffffff" },

];

// Datos de experiencias aleatorios
// Datos de experiencias
const experiencesData = [
  { year: 2021, works: [
    { name: "Desarrollo de aplicaciones móviles", company: "Mobile Solutions Inc.", description: "Creación de aplicaciones móviles multiplataforma" },
    { name: "Testing de software", company: "QA Testing Co.", description: "Pruebas exhaustivas de software para garantizar la calidad del producto" }
  ]},
  { year: 2018, works: [
    { name: "Desarrollo de software en Java", company: "Java Development Corp.", description: "Implementación de soluciones utilizando Java y tecnologías relacionadas" }
  ]},
  // Puedes agregar más experiencias si lo deseas
];

const Skills = () => {
  const [skills] = useState(skillsData);
  const [experiences] = useState(experiencesData);

  return (
    <>
      <h2 className="head-text">Habilidades y experiencias</h2>

      <div className="app__skills-container">
        {/* Lista de habilidades */}
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0 }}
              className="app__skills-item app__flex"
              key={skill.name} // Usar una propiedad única como clave
              whileHover={{ scale: 1.4 }}
            >
              <motion.div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <motion.img
                  src={skill.icon} // Usar .default para acceder a la URL de la imagen requerida
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
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.name}
                    key={work.name}
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

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);