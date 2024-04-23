import React, { useState } from 'react'; // Importa React y la función useState
import { HiMenuAlt4, HiX } from 'react-icons/hi'; // Importa los iconos del menú y de cierre
import { motion } from 'framer-motion'; // Importa la función motion para animaciones

import logo from "../../assets/logo.png"; // Importa el logo desde la carpeta de assets
import "./Navbar.scss"; // Importa los estilos CSS para el Navbar

// Definición del componente Navbar
const Navbar = () => {
  const [toggle, setToggle] = useState(false); // Define el estado toggle para controlar la visibilidad del menú

  return (
    // Estructura de la barra de navegación
    <nav className="app__navbar">
      {/* Logo de la aplicación */}
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" /> {/* Renderiza el logo */}
      </div>

      {/* Lista de enlaces de la barra de navegación */}
      <ul className="app__navbar-links">
        {/* Mapea los elementos de la lista de enlaces */}
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a> {/* Renderiza los enlaces */}
          </li>
        ))}
      </ul>

      {/* Menú desplegable */}
      <div className="app__navbar-menu">
        {/* Icono de menú */}
        <HiMenuAlt4 onClick={() => setToggle(true)} /> {/* Abre el menú cuando se hace clic */}

        {/* Condicionalmente renderiza el contenido del menú desplegable */}
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            {/* Icono de cierre */}
            <HiX onClick={() => setToggle(false)} /> {/* Cierra el menú cuando se hace clic */}

            {/* Lista de enlaces del menú desplegable */}
            <ul>
              {/* Mapea los elementos de la lista de enlaces */}
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a> {/* Renderiza los enlaces del menú desplegable */}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; // Exporta el componente Navbar
