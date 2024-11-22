import "./header.css";
import logo from "../../assets/img/caffe-logo-white.png";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterByFeature } from "../../slices/filterSlice";
import { selectTotalItems } from "../../slices/cartSlice";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const totalItems = useSelector(selectTotalItems);

  const closeMenuCategory = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <Link to="/" onClick={() => dispatch(filterByFeature())}>
        <img src={logo} alt="prueba" className="logo-coffee" />
      </Link>
      <Menu isOpen={isOpen} closeMenuCategory={closeMenuCategory} />
      <div className="menu-tools">
        <div
          className={`menu-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="/cart">
          <i className="fa-sharp fa-solid fa-cart-shopping cart-icon"></i>

          <div className="counter-cart">{totalItems}</div>
        </Link>
        {/* <Link to="/">
          <i className="fa-sharp fa-solid fa-right-to-bracket login-icon"></i>
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
