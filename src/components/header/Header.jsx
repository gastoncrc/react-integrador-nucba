import "./header.css";
import logo from "../../assets/img/caffe-logo-white.png";
import { useContext } from "react";
import { MenuContext } from "../../menuContext";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterByFeature } from "../../slices/filterSlice";
import { selectTotalItems } from "../../slices/cartSlice";

const Header = () => {
  const { toggleMenu } = useContext(MenuContext);
  const dispatch = useDispatch();

  const totalItems = useSelector(selectTotalItems);

  return (
    <header>
      <Link to="/" onClick={() => dispatch(filterByFeature())}>
        <img src={logo} alt="prueba" className="logo-caffe" />
      </Link>
      <Menu />
      <div className="menu-tools">
        <a onClick={toggleMenu}>
          <i className="fa-sharp fa-solid fa-bars menu-icon"></i>
        </a>
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
