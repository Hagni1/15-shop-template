import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/Navigation.scss";
import navigationData from '../data/navigationData.json'
import { ShoppingContext } from "./App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import NavigationItem from "./NavigationItem";
import HamburgerMenu from "./HamburgerMenu";

const Navigation = () => {
  const { shoppingCart } = useContext(ShoppingContext);
  const totalCount = shoppingCart.reduce((a, c) => a + c.count, 0);
  return (

    <nav className="Navigation">
      <div class='iconsWrapper'>
      <Link to="/cart" className="cartIcon">
        {totalCount}
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
      <HamburgerMenu/>
      </div>
      <Link to="/" className="logo">
        {" "}
        <img src={logo} alt="logo" />{" "}
      </Link>
      <ul>
    {navigationData.map(data=> <NavigationItem key={data.navName} navLink={data.navLink} navName={data.navName}/>)}
      </ul>
    </nav>
  );
};

export default Navigation;
