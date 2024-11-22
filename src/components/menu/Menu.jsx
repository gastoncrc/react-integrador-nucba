import "./menu.css";
import React, { useContext } from "react";
import { MenuContext } from "../../menuContext";
import { Link } from "react-router-dom";

const Menu = ({ isOpen, setIsOpen }) => {
  const { menu } = useContext(MenuContext);

  return (
    <nav className={`navbar-menu ${isOpen && "open"}`}>
      <Link to="/" className="navbar-list-item">
        Destacados
      </Link>

      <Link to="/about" className="navbar-list-item">
        Nosotros
      </Link>

      <Link to="/products" className="navbar-list-item">
        Productos
      </Link>

      <Link to="/contact" className="navbar-list-item">
        Contacto
      </Link>
    </nav>
  );
};

export default Menu;
