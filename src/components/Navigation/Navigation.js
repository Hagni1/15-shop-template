import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "../../styles/Navigation/Navigation.scss";
import { ShoppingContext } from "../../context/ShoppingContext";
import data from "../../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import NavigationItem from "./NavigationItem";
import HamburgerMenu from "./HamburgerMenu";

const Navigation = () => {
  const newData = [...data[1].data];
  const { shoppingCart } = useContext(ShoppingContext);
  const totalCount = shoppingCart.reduce((a, c) => a + c.count, 0);
  return (
    <nav className="Navigation">
      <div className="iconsWrapper">
        <HamburgerMenu data={newData} />
        <Link to="/" className="logo">
          {" "}
          <img src={logo} alt="logo" />{" "}
        </Link>
        <Link to="/cart" className="cartIcon">
          {totalCount}
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
      <ul>
        {newData.map((data) => (
          <NavigationItem
            key={data.navName}
            navLink={data.navLink}
            navName={data.navName}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
