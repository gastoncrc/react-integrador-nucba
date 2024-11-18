import "./menu.css";
import React, { useContext } from "react";
import { MenuContext } from "../../menuContext";
import { Link } from "react-router-dom";

const Menu = () => {
  const { menu } = useContext(MenuContext);

  return (
    <div className="search_container">
      <nav className={`navbar_menu ${menu ? "isActive" : ""}`}>
        <ul className="navbar_list">
          <li>
            <Link to="/">Destacados</Link>
          </li>
          <li>
            <Link to="/about">Nosotros</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
