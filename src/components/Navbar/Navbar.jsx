import './Navbar.scss'; // Importa los estilos CSS para el Navbar

// Definición del componente Navbar
export const Navbar = () => {
  // const [toggle, setToggle] = useState(false); // Define el estado toggle para controlar la visibilidad del menú

  return (
    // Estructura de la barra de navegación
    <nav className="app__navbar">
      {/* Logo de la aplicación */}
      <nav className="navbarlogo">
        <h1>
          {' '}
          <a href="/">(logo) </a>
        </h1>
      </nav>
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
      {/* <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />{' '}
        {toggle ? (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />{' '}
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : (
          <div>asdasd</div>
        )}
      </div> */}
    </nav>
  );
};
