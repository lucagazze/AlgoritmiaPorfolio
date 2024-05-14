import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss'; // Importa los estilos CSS para el Navbar
import logo from "../../assets/img/algoritmia_logo.png"; // Importa el logo

// Definición del componente Navbar
export const Navbar = () => {
  const [toggle, setToggle] = useState(false); // Define el estado toggle para controlar la visibilidad del menú

  return (
    // Estructura de la barra de navegación
    <nav className="app__navbar">
      {/* Logo de la aplicación */}
      <div className="navbarlogo">
        <h1>
          <a href="/" src="{logo}"><img src={logo} alt="logo" width={70} className="navbar__logo" /> {/* Uso de la imagen */}
</a>
        </h1>
      </div>
      {/* Lista de enlaces de la barra de navegación */}
      <ul className="app__navbar-links">
        {/* Mapea los elementos de la lista de enlaces */}
        {['inicio', 'sobre', 'proyectos', 'habilidades', 'contacto'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a> {/* Renderiza los enlaces */}
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} /> {/* Icono del menú */}
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} /> {/* Icono para cerrar el menú */}
            <ul>
              {['inicio', 'sobre', 'proyectos', 'habilidades', 'contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
