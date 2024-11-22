import "./menu.css";
import { Link } from "react-router-dom";

const Menu = ({ isOpen }) => {
  return (
    <nav className={`navbar-menu ${isOpen && "open"}`}>
      <Link to="/">Destacados</Link>

      <Link to="/about">Nosotros</Link>

      <Link to="/products">Productos</Link>

      <Link to="/contact">Contacto</Link>
    </nav>
  );
};

export default Menu;
